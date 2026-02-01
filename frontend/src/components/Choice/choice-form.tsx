"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useCategoriesQuery, useDecadesQuery } from "@/graphql/generated/schema";

export default function ChoicePage() {
	const router = useRouter();
	const [category, setCategory] = useState<string>("");
	const [decade, setDecade] = useState<string>("");

	// Retrieves categories from my database
	const { data: categoriesData, loading: categoriesLoading, error: categoriesError } = useCategoriesQuery();
	
	// Retrieves decade from my database
	const { data: decadesData, loading: decadesLoading, error: decadesError } = useDecadesQuery();

	const categories = categoriesData?.categories || [];
	const decades = decadesData?.decades || [];

	const handleValider = () => {
		// Dynamic construction of my URL for the selected choices
		// Parameters become optional for the user to get acces to next page
		const params = new URLSearchParams();
		
		if (category) {
			params.append("categoryId", category);
		}
		
		if (decade) {
			params.append("decadeId", decade);
		}
		
		// Redirection with the choices made earlier
		const queryString = params.toString();
		const url = queryString 
			? `/connected-user-page?${queryString}`
			: `/connected-user-page`;
		
		router.push(url);
	};

	return (
		<div className="w-full max-w-sm mx-auto px-4 py-8 space-y-6">
			<Card className="border-white">
				<CardContent className="p-6 space-y-6">
					{/* Image Section */}
					<Card className="overflow-hidden p-0 border-white">
						<div className="relative w-full aspect-4/3 bg-zinc-800">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyy9gKjkNfYftUtfaFr0aKh6BsCSsNQxAjw&s"
								alt="Cinéma"
								className="absolute inset-0 w-full h-full object-cover"
							/>
						</div>
					</Card>

					{/* Instruction button */}
					<Button
						onClick={() => {}}
						className="w-full bg-zinc-800 border border-white text-white font-bold hover:bg-zinc-700 text-[12px]" 
						disabled
					>
						Choix catégorie ou décennie 👇
					</Button>

					{/* Dropdown menues */}
					<Card className="border-white">
						<CardContent className="p-6">
							<div className="flex gap-4 flex-col items-center">
								<Select
									value={category || undefined}
									onValueChange={setCategory}
									disabled={categoriesLoading}
								>
									<SelectTrigger className="bg-zinc-800 border-zinc-700 text-white flex-1">
										<SelectValue placeholder={categoriesLoading ? "Chargement..." : "Catégorie"} />
									</SelectTrigger>
									<SelectContent>
										{categoriesError ? (
											<SelectItem value="error" disabled>
												Erreur de chargement
											</SelectItem>
										) : (
											categories.map((category) => (
												<SelectItem key={category.id} value={category.id.toString()}>
													{category.name}
												</SelectItem>
											))
										)}
									</SelectContent>
								</Select>

								<Select
									value={decade || undefined}
									onValueChange={setDecade}
									disabled={decadesLoading}
								>
									<SelectTrigger className="bg-zinc-800 border-zinc-700 text-white flex-1">
										<SelectValue placeholder={decadesLoading ? "Chargement..." : "Decennie"} />
									</SelectTrigger>
									<SelectContent>
										{decadesError ? (
											<SelectItem value="error" disabled>
												Erreur de chargement
											</SelectItem>
										) : (
											decades.map((decade) => (
												<SelectItem key={decade.id} value={decade.id.toString()}>
													{decade.name}
												</SelectItem>
											))
										)}
									</SelectContent>
								</Select>
							</div>
						</CardContent>
					</Card>

					{/* Validation button */}
					<Button
						onClick={handleValider}
						className="w-full bg-zinc-800 border border-white text-white font-bold hover:bg-zinc-700"
					>
						Valider
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}