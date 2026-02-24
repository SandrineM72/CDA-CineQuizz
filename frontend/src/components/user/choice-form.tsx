"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useThemesQuery, useLevelsQuery, usePrivateQuizzesLazyQuery } from "@/graphql/generated/schema";

export default function ChoiceForm() {
	const router = useRouter();
	const [themeId, setThemeId] = useState<string>("");
	const [levelId, setLevelId] = useState<string>("");
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	// Récupère les thèmes depuis la base de données
	const { data: themesData, loading: themesLoading, error: themesError } = useThemesQuery();
	
	// Récupère les niveaux depuis la base de données
	const { data: levelsData, loading: levelsLoading, error: levelsError } = useLevelsQuery();

	// Lazy query pour récupérer les quiz au moment du clic
	const [fetchPrivateQuizzes] = usePrivateQuizzesLazyQuery();

	const themes = themesData?.themes || [];
	const levels = levelsData?.levels || [];

	const handleJouer = async () => {
		setIsLoading(true);
		setErrorMessage(null);

		try {
			// Récupère les quiz correspondant aux filtres
			const { data } = await fetchPrivateQuizzes({
				variables: {
					themeId: themeId ? Number(themeId) : undefined,
					levelId: levelId ? Number(levelId) : undefined,
				},
			});

			const quizzes = data?.privateQuizzes || [];

			if (quizzes.length === 0) {
				setErrorMessage("Aucun quiz disponible pour cette sélection.");
				setIsLoading(false);
				return;
			}

			// Prend le premier quiz de la liste (ou choisis aléatoirement si tu préfères)
			const selectedQuiz = quizzes[0];
			
			// Redirige directement vers le quiz
			router.push(`/private-quiz-page?id=${selectedQuiz.id}`);
		} catch (err) {
			console.error(err);
			setErrorMessage("Erreur lors du chargement des quiz.");
			setIsLoading(false);
		}
	};

	return (
		<div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
			<div className="w-full max-w-md space-y-4">
				{/* Image */}
				<div className="flex justify-center">
          			<div className="relative w-full h-54 overflow-hidden border-4 border-[#00bb0d]">
						<Image
							src="/illustrations/hacker_gloves.jpg"
							alt="Hacker sur ordinateur"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>

				{/* Choice Card */}
				<Card className="bg-black border-2 border-[#00bb0d] rounded-none">
					<CardContent className="px-4">
						<div className="space-y-4">
							{/* Instruction */}
							<div className="bg-[#565656] p-4 text-center">
								<p className="text-white text-base font-normal">
									Choisissez un niveau<br />et un thème
								</p>
							</div>

							{/* Message d'erreur */}
							{errorMessage && (
								<div className="bg-[#c00f00] p-3 text-center rounded">
									<p className="text-white text-sm">{errorMessage}</p>
								</div>
							)}

							{/* Dropdowns */}
							<div className="space-y-3">
								{/* Dropdown Niveau */}
								<Select
									value={levelId || undefined}
									onValueChange={setLevelId}
									disabled={levelsLoading || isLoading}
								>
									<SelectTrigger className="w-full bg-[#565656] border-2 border-[#00bb0d] text-white rounded-none h-12">
										<SelectValue placeholder={levelsLoading ? "Chargement..." : "Niveau"} />
									</SelectTrigger>
									<SelectContent className="bg-[#565656] border-2 border-[#00bb0d] text-white">
										{levelsError ? (
											<SelectItem value="error" disabled>
												Erreur de chargement
											</SelectItem>
										) : (
											levels.map((level) => (
												<SelectItem 
													key={level.id} 
													value={level.id.toString()}
													className="text-white hover:bg-[#00bb0d] focus:bg-[#00bb0d]"
												>
													{level.name}
												</SelectItem>
											))
										)}
									</SelectContent>
								</Select>

								{/* Dropdown Thème */}
								<Select
									value={themeId || undefined}
									onValueChange={setThemeId}
									disabled={themesLoading || isLoading}
								>
									<SelectTrigger className="w-full bg-[#565656] border-2 border-[#00bb0d] text-white rounded-none h-12">
										<SelectValue placeholder={themesLoading ? "Chargement..." : "Thème"} />
									</SelectTrigger>
									<SelectContent className="bg-[#565656] border-2 border-[#00bb0d] text-white">
										{themesError ? (
											<SelectItem value="error" disabled>
												Erreur de chargement
											</SelectItem>
										) : (
											themes.map((theme) => (
												<SelectItem 
													key={theme.id} 
													value={theme.id.toString()}
													className="text-white hover:bg-[#00bb0d] focus:bg-[#00bb0d]"
												>
													{theme.name}
												</SelectItem>
											))
										)}
									</SelectContent>
								</Select>
							</div>

							{/* Bouton Jouer */}
							<Button
								onClick={handleJouer}
								disabled={isLoading}
								className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full mt-10 h-12 text-base font-semibold"
							>
								{isLoading ? "Chargement..." : "Jouer"}
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
