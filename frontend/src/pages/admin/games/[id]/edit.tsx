import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	useLevelsQuery,
	useThemesQuery,
	useQuizQuery,
	useUpdateChoiceMutation,
	useUpdateQuestionMutation,
	useUpdateQuizMutation,
} from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const EditQuizPage = () => {
	const router = useRouter();
	const id = Number(router.query.id);

	const [updateQuiz] = useUpdateQuizMutation();
	const [updateQuestion] = useUpdateQuestionMutation();
	const [updateChoice] = useUpdateChoiceMutation();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const {
		data: quizData,
		loading,
		error,
		refetch,
	} = useQuizQuery({ variables: { id: id }, skip: !id });
	const quiz = quizData?.quiz || null;

	// Test quiz
	if (isNaN(id) || !quiz) {
		return (
			<AdminLayout pageTitle={`Quiz n°${router.query.id} - Admin`}>
				<div className="flex">
					<AdminSidebar />
					<main className="flex-1 p-8 bg-black text-white">
						<h1 className="text-2xl">Quiz inexistant</h1>
					</main>
				</div>
			</AdminLayout>
		);
	}

	const { data: levelsData } = useLevelsQuery();
	const levels = levelsData?.levels || null;

	const { data: themesData } = useThemesQuery();
	const themes = themesData?.themes || null;

	// State des champs formulaire
	const [title, setTitle] = useState(quiz.title);
	const [description, setDescription] = useState(quiz.description);
	const [levelId, setLevelId] = useState(quiz.level.id);
	const [themeId, setThemeId] = useState(quiz.theme.id);
	const [isDraft, setIsDraft] = useState(quiz.is_draft);
	const [isPublic, setIsPublic] = useState(quiz.is_public);

	const [questionsToMake, setQuestionsToMake] = useState<any>(
		quiz.questions?.map((item) => ({
			id: item.id,
			title: item.title,
			choices: item.choices.map((choice) => ({
				id: choice.id,
				description: choice.description,
				is_correct: choice.is_correct,
			})),
		}))
	);

	// Soumission formulaire
	const handleSubmit = async (e: FormEvent) => {
		try {
			e.preventDefault();
			console.log("Formulaire soumis");

			const data = {
				title,
				description,
				is_draft: isDraft,
				is_public: isPublic,
				level: { id: levelId },
				theme: { id: themeId },
			};

			questionsToMake.forEach(
				async (question: { id: any; title: any; choices: any }) => {
					await updateQuestion({
						variables: {
							id: question.id,
							data: { title: question.title },
						},
					});

					question.choices.forEach(
						async (choice: {
							id: number;
							description: string;
							is_correct: boolean;
						}) => {
							await updateChoice({
								variables: {
									updateChoiceId: choice.id,
									data: {
										description: choice.description,
										is_correct: choice.is_correct,
									},
								},
							});
						}
					);
				}
			);

			await updateQuiz({
				variables: {
					id: quiz.id,
					data: data,
				},
			});

			await refetch();
			router.push(`/admin/games/${id}`);
		} catch (err: any) {
			const message =
				err.graphQLErrors?.[0]?.message ||
				err.networkError?.message ||
				err.errors?.[0]?.extensions.validationErrors?.[0]?.constraints.isUrl ||
				err.message ||
				"Une erreur est survenue";
			setErrorMessage(message);
		}
	};

	// Chargement données
	if (loading) {
		return (
			<AdminLayout pageTitle={`Quiz n°${router.query.id} - Admin`}>
				<div className="flex">
					<AdminSidebar />
					<main className="flex-1 p-8 bg-black text-white">
						<p>Chargement des données...</p>
					</main>
				</div>
			</AdminLayout>
		);
	}

	if (errorMessage) {
		alert(errorMessage);
		router.push("/admin/games");
	}

	const handleQuestionChange = (
		question: any,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const questionToChange = questionsToMake.find(
			(item: { title: any }) => item.title === question.title
		);
		const questionsLeft = questionsToMake.filter(
			(item: { title: any }) => item.title !== question.title
		);
		questionToChange.title = e.target.value;
		const newArr = [...questionsLeft, questionToChange];
		setQuestionsToMake(newArr.sort((a, b) => a.id - b.id));
	};

	const handleChoiceChange = (
		question: any,
		choice: any,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const questionToChange = questionsToMake.find(
			(item: { title: any }) => item.title === question.title
		);
		const questionsLeft = questionsToMake.filter(
			(item: { title: any }) => item.title !== question.title
		);

		const choiceToChange = questionToChange.choices.find(
			(item: { description: any }) => item.description === choice.description
		);
		const choicesLeft = questionToChange.choices.filter(
			(item: { description: any }) => item.description !== choice.description
		);
		choiceToChange.description = e.target.value;
		questionToChange.choices = [...choicesLeft, choiceToChange].sort(
			(a: { id: number }, b: { id: number }) => a.id - b.id
		);

		const newArr = [...questionsLeft, questionToChange];
		setQuestionsToMake(newArr.sort((a, b) => a.id - b.id));
	};

	const handleCorrectChoiceChange = (
		question: any,
		choice: any,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const questionToChange = questionsToMake.find(
			(item: { title: any }) => item.title === question.title
		);
		const questionsLeft = questionsToMake.filter(
			(item: { title: any }) => item.title !== question.title
		);

		const choiceToChange = questionToChange.choices.find(
			(item: { description: any }) => item.description === choice.description
		);

		questionToChange.choices = questionToChange.choices.map(
			(item: { id: any; is_correct: boolean }) => {
				if (item.id === choiceToChange.id) {
					return { ...item, is_correct: true };
				} else {
					return { ...item, is_correct: false };
				}
			}
		);

		const newArr = [...questionsLeft, questionToChange];
		setQuestionsToMake(newArr.sort((a, b) => a.id - b.id));
	};

	return (
		<AdminLayout pageTitle={`Édition Quiz n°${id} - Admin`}>
			<div className="flex">
				<AdminSidebar />
				<main className="flex-1 p-8 bg-black">
					<form onSubmit={handleSubmit}>
						<Card className="w-full border-gray-700 bg-gray-900 p-5">
							<CardContent>
								{/* Header avec titre et bouton retour */}
								<div className="flex justify-between items-center mb-5">
									<h2 className="text-2xl text-white">
										Édition du quiz {quiz.id}
									</h2>
									<Button
										type="button"
										onClick={() => router.push(`/admin/games/${id}`)}
										className="w-[200px] bg-[#00bb0d] border border-zinc-700 text-black text-xl hover:bg-green-500 cursor-pointer"
									>
										Retour au quiz {quiz.id}
									</Button>
								</div>

								<Label className="text-white block mb-2">
										Titre
									</Label>
								<Input
									type="text"
									id="title"
									placeholder="Titre du quiz"
									value={title}
									onChange={(e) => setTitle(e.currentTarget.value)}
									required
									className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:bg-zinc-300 focus:text-black focus:font-[arial] mb-5"
								/>

								<Label className="text-white block mb-2">
									Description
								</Label>
								<Input
									type="text"
									id="description"
									placeholder="Description du quiz"
									value={description}
									onChange={(e) => setDescription(e.currentTarget.value)}
									required
									className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:bg-zinc-300 focus:text-black focus:font-[arial] mb-8"
								/>

								<Label className="text-white block mb-2">Level</Label>
								<Select
									value={"" + levelId}
									onValueChange={(val) => setLevelId(Number(val))}
								>
									<SelectTrigger
										className={`bg-zinc-800 border-zinc-700 w-full mb-5 ${
											true ? "text-white" : "text-zinc-500"
										}`}
									>
										<SelectValue placeholder="Level" />
									</SelectTrigger>
									<SelectContent>
										{levels?.map((elem) => (
											<SelectItem key={elem.id} value={"" + elem.id}>
												{elem.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>

								<Label className="text-white block mb-2">Thème</Label>
								<Select
									value={"" + themeId}
									onValueChange={(val) => setThemeId(Number(val))}
								>
									<SelectTrigger
										className={`bg-zinc-800 border-zinc-700 w-full mb-8 ${
											true ? "text-white" : "text-zinc-500"
										}`}
									>
										<SelectValue placeholder="Thème" />
									</SelectTrigger>
									<SelectContent>
										{themes?.map((elem) => (
											<SelectItem key={elem.id} value={"" + elem.id}>
												{elem.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>

								<div className="flex items-center space-x-2 mb-4">
									<Checkbox
										id="draft"
										checked={isDraft}
										onCheckedChange={(checked) => setIsDraft(checked === true)}
										className="text-white"
									/>
									<Label
										htmlFor="draft"
										className="text-white cursor-pointer"
									>
										Brouillon
									</Label>
								</div>
								
								<div className="flex items-center space-x-2 mb-8">
									<Checkbox
										id="public"
										checked={isPublic}
										onCheckedChange={(checked) =>
											setIsPublic(checked === true)
										}
										className="text-white"
									/>
									<Label
										htmlFor="public"
										className="text-white cursor-pointer"
									>
										Public
									</Label>
								</div>

								<h3 className="text-xl text-white mb-5">
									Questions et réponses du quiz {quiz.id}
								</h3>

								{questionsToMake?.map(
									(
										question: {
											id: number | null | undefined;
											title: string | number | readonly string[] | undefined;
											choices: any[];
										},
										index: number
									) => (
										<Card key={question.id} className="p-10 mb-5 bg-gray-800">
											<Label
												htmlFor={`question${index + 1}`}
												className="p-3 bg-[#00bb0d] text-black text-xl inline-block mb-3"
											>
												Question {index + 1}
											</Label>
											<Input
												type="text"
												id={`question${index + 1}`}
												placeholder="Question du quiz"
												value={question.title}
												onChange={(e) => handleQuestionChange(question, e)}
												required
												className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:bg-zinc-300 focus:text-black focus:font-[arial]"
											/>
											<div className="m-5">
												{question.choices.map(
													(
														choice: {
															id: number;
															description: string;
															is_correct: boolean;
														},
														ind: number
													) => (
														<div key={choice.id}>
															<Label
																htmlFor={`question${index + 1}choice${ind + 1}`}
																className="text-sm w-[250px] text-white"
															>
																Proposition {ind + 1}
																<input
																	type="radio"
																	name={"" + question.id}
																	checked={choice.is_correct}
																	id={`question${index + 1}choice${ind + 1}correct`}
																	onChange={(e) =>
																		handleCorrectChoiceChange(question, choice, e)
																	}
																	className={`text-white inline-block w-4 h-4 ml-5`}
																/>
																<Label
																	htmlFor={`question${index + 1}choice${
																		ind + 1
																	}correct`}
																	className={`inline text-[10px] p-2 ${
																		choice.is_correct && "text-green-400"
																	}`}
																>
																	Bonne réponse
																</Label>
															</Label>

															<Input
																type="text"
																id={`question${index + 1}choice${ind + 1}`}
																value={"" + choice.description}
																onChange={(e) =>
																	handleChoiceChange(question, choice, e)
																}
																required
																className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 mt-5 mb-10  focus:bg-zinc-300 focus:text-black focus:font-[arial]"
															/>
														</div>
													)
												)}
											</div>
										</Card>
									)
								)}

								<Button
									type="submit"
									className="w-[200px] h-12 bg-[#00bb0d] border border-zinc-700 text-black text-xl hover:bg-green-500 cursor-pointer block mx-auto mt-6 flex items-center justify-center"
								>
									Valider
								</Button>
							</CardContent>
						</Card>
					</form>
				</main>
			</div>
		</AdminLayout>
	);
};

export default EditQuizPage;
