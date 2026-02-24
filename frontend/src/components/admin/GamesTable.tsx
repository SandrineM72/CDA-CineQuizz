import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAllQuizzesQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GamesTable() {
	const router = useRouter();
	const { data, loading, error } = useAllQuizzesQuery();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	if (loading) {
		return (
			<Card className="bg-gray-900 border-gray-700">
				<CardContent className="p-8">
					<p className="text-white text-center">Chargement des quiz...</p>
				</CardContent>
			</Card>
		);
	}

	if (error) {
		return (
			<Card className="bg-gray-900 border-gray-700">
				<CardContent className="p-8">
					<p className="text-red-500 text-center">Erreur : {error.message}</p>
				</CardContent>
			</Card>
		);
	}

	const quizzes = data?.allQuizzes || [];
	
	// Calculs pagination
	const totalPages = Math.ceil(quizzes.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentQuizzes = quizzes.slice(startIndex, endIndex);

	const goToPreviousPage = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
	};

	const goToNextPage = () => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	};

	return (
		<Card className="bg-gray-900 border-gray-700">
			<CardHeader>
				<CardTitle className="text-white">
					Liste des quiz ({quizzes.length} quiz)
				</CardTitle>
				<CardDescription className="text-gray-400">
					Cliquer sur un quiz pour accéder à ses détails
				</CardDescription>
			</CardHeader>
			<CardContent>
				{quizzes.length === 0 ? (
					<h2 className="text-2xl text-white">Aucun quiz actuellement</h2>
				) : (
					<>
						<div className="overflow-x-auto">
							<Table>
								<TableHeader>
									<TableRow className="border-gray-700 bg-gray-800">
										<TableHead className="text-gray-300 border-2 text-center border-gray-400">
											N°
										</TableHead>
										<TableHead className="text-gray-300 border-2 text-center border-gray-400">
											Titre
										</TableHead>
										<TableHead className="text-gray-300 border-2 text-center border-gray-400">
											Description
										</TableHead>
										<TableHead className="text-gray-300 text-center border-2 border-gray-400">
											Public
										</TableHead>
										<TableHead className="text-gray-300 text-center border-2 border-gray-400">
											Brouillon
										</TableHead>
										<TableHead className="text-gray-300 text-center border-2 border-gray-400">
											Niveau
										</TableHead>
										<TableHead className="text-gray-300 text-center border-2 border-gray-400">
											Thème
										</TableHead>
										<TableHead className="text-gray-300 text-center border-2 border-gray-400">
											Questions
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{currentQuizzes.map((quiz, index) => (
										<TableRow
											key={quiz.id}
											className="border-gray-700 font-[Arial] hover:bg-gray-600 cursor-pointer"
											onClick={() => router.push(`/admin/games/${quiz.id}`)}
										>
											<TableCell className="text-gray-300 font-medium p-5 border-2 border-gray-500 text-center">
												{startIndex + index + 1}
											</TableCell>
											<TableCell className="text-gray-300 font-medium p-5 border-2 border-gray-500">
												{quiz.title}
											</TableCell>
											<TableCell className="text-gray-300 font-medium p-5 border-2 border-gray-500">
												{quiz.description}
											</TableCell>
											<TableCell className="text-gray-300 text-center p-5 border-2 border-gray-500">
												{quiz.is_public ? "Oui" : "Non"}
											</TableCell>
											<TableCell className="text-gray-300 text-center p-5 border-2 border-gray-500">
												{quiz.is_draft ? "Oui" : "Non"}
											</TableCell>
											<TableCell className="text-gray-300 text-center p-5 border-2 border-gray-500">
												{quiz.level.name}
											</TableCell>
											<TableCell className="text-gray-300 text-center p-5 border-2 border-gray-500">
												{quiz.theme.name}
											</TableCell>
											<TableCell className="text-gray-300 text-center p-5 border-2 border-gray-500">
												{quiz.questions?.length || 0}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>

						{/* Pagination */}
						{totalPages > 1 && (
							<div className="flex items-center justify-center gap-4 mt-6">
								<Button
									variant="outline"
									size="sm"
									onClick={goToPreviousPage}
									disabled={currentPage === 1}
									className="text-white border-gray-600 hover:bg-gray-700 disabled:opacity-50"
								>
									<ChevronLeft className="w-4 h-4 mr-1" />
									Précédent
								</Button>
								<span className="text-white">
									Page {currentPage} sur {totalPages}
								</span>
								<Button
									variant="outline"
									size="sm"
									onClick={goToNextPage}
									disabled={currentPage === totalPages}
									className="text-white border-gray-600 hover:bg-gray-700 disabled:opacity-50"
								>
									Suivant
									<ChevronRight className="w-4 h-4 ml-1" />
								</Button>
							</div>
						)}
					</>
				)}
			</CardContent>
		</Card>
	);
}
