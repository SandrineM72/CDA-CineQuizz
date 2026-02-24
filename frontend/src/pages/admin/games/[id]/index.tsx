import AdminLayout from "@/components/AdminLayout";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
	useAllQuizzesQuery,
	useDeleteQuizMutation,
	useQuizQuery,
} from "@/graphql/generated/schema";
import { PenTool, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function GamePage() {
	const router = useRouter();
	const id = Number(router.query.id);

	const [deleteQuiz, { loading: isLoading, error }] = useDeleteQuizMutation();

	const { refetch } = useAllQuizzesQuery(); // pour la mise à jour des quiz après suppression

	const { data, loading } = useQuizQuery({ variables: { id: id }, skip: !id });
	const quiz = data?.quiz || undefined;

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

	const handleDeleteQuiz = async () => {
		const confirmation = confirm(
			`Voulez-vous supprimer le quiz "${quiz.title}" ?`
		);
		if (confirmation) {
			await deleteQuiz({ variables: { id: quiz.id } });
			console.log("Quiz supprimé");
			await refetch();
			router.push("/admin/games");
		}
	};

	return (
		<AdminLayout pageTitle={`Quiz n°${router.query.id} - Admin`}>
			<div className="flex">
				<AdminSidebar />
				<main className="flex-1 p-8 bg-black text-white">
					<Card className="w-full border-gray-700 bg-gray-900 p-5">
						<h1 className="text-3xl font-bold mb-6">
							Quiz n° {quiz.id}

							<Link href={`/admin/games/${quiz.id}/edit`}>
								<PenTool
									color="white"
									size={40}
									className="inline-block bg-[#00bb0d] p-1 rounded-md cursor-pointer hover:bg-green-400 m-3"
								/>
							</Link>
							<Trash2
								color="white"
								size={40}
								className="inline-block bg-red-600 p-1 rounded-md cursor-pointer hover:bg-red-400 m-3"
								onClick={handleDeleteQuiz}
							/>
						</h1>
						<ul className="p-3">
							<li className="m-3">
								<strong>Titre :</strong> {quiz.title}
							</li>
							<li className="m-3">
								<strong>Description :</strong> {quiz.description}
							</li>
							<li className="m-3">
								<strong>Niveau :</strong> {quiz.level.name}
							</li>
							<li className="m-3">
								<strong>Thème :</strong> {quiz.theme.name}
							</li>
							<li className="m-3">
								<strong>Brouillon :</strong> {quiz.is_draft ? "Oui" : "Non"}
							</li>
							<li className="m-3">
								<strong>Public :</strong> {quiz.is_public ? "Oui" : "Non"}
							</li>
						</ul>

						<h2 className="text-2xl bg-[#00bb0d] text-black px-1 py-2 text-center font-bold">
							Questions ({quiz.questions?.length || 0})
						</h2>
						{quiz.questions?.map((question, index) => (
							<Card key={index} className="mt-4 border-gray-700">
								<CardTitle className="p-3 bg-gray-700 text-white">
									Question {index + 1} : {question.title}
								</CardTitle>
								<CardContent className="m-5 bg-gray-800">
									<ul className="list-decimal ml-6">
										{question.choices.map((choice) => (
											<li key={choice.id} className="p-2">
												<span
													className={
														choice.is_correct
															? "bg-[#00bb0d] text-black p-1 font-semibold"
															: ""
													}
												>
													{choice.description}
												</span>
											</li>
										))}
									</ul>
									{question.explanation && (
										<div className="mt-4 p-3 bg-gray-700 border-l-4 border-[#00bb0d]">
											<p className="text-sm text-gray-300">
												<strong className="text-[#00bb0d]">Explication :</strong>{" "}
												{question.explanation}
											</p>
										</div>
									)}
								</CardContent>
							</Card>
						))}
					</Card>
				</main>
			</div>
		</AdminLayout>
	);
}
