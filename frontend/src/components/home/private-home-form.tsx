

import { useState, useEffect } from "react";
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
import { ArrowRight, Clock, Target } from "lucide-react";
import { usePrivateQuizzesQuery, PrivateQuizzesQuery, useCategoriesQuery, useDecadesQuery } from "@/graphql/generated/schema";

function formatDuration(seconds: number): string {
	const minutes = Math.floor(seconds / 60);
	return `${minutes} min`;
}

export default function PrivateHomeForm() {
	const router = useRouter();
	
	// Local state for category and decade selections
	// Initialize as empty strings to show placeholders by default
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [selectedDecade, setSelectedDecade] = useState<string>("");

	// Fetch categories and decades for the dropdowns
	const { data: categoriesData, loading: categoriesLoading, error: categoriesError } = useCategoriesQuery();
	const { data: decadesData, loading: decadesLoading, error: decadesError } = useDecadesQuery();

	const categories = categoriesData?.categories || [];
	const decades = decadesData?.decades || [];

	// Initialize selections from URL parameters when router is ready
	// Only set values if they exist in URL, otherwise keep empty to show placeholders
	useEffect(() => {
		if (router.isReady) {
			const categoryIdParam = router.query.categoryId;
			const decadeIdParam = router.query.decadeId;
			
			// Only set if parameter exists, otherwise keep empty string to show placeholder
			setSelectedCategory(typeof categoryIdParam === "string" ? categoryIdParam : "");
			setSelectedDecade(typeof decadeIdParam === "string" ? decadeIdParam : "");
		}
	}, [router.isReady, router.query]);

	// Convert string selections to numbers for GraphQL query
	const categoryId = selectedCategory ? Number(selectedCategory) : undefined;
	const decadeId = selectedDecade ? Number(selectedDecade) : undefined;

	// Pass parameters to GraphQL query
	const { data, loading, error } = usePrivateQuizzesQuery({
		variables: {
			categoryId: categoryId || undefined,
			decadeId: decadeId || undefined,
		},
		fetchPolicy: 'network-only', // Always fetch from server to respect filters
	});

	// Update URL when selections change
	const updateURL = (category: string, decade: string) => {
		const params = new URLSearchParams();
		
		if (category) {
			params.append("categoryId", category);
		}
		
		if (decade) {
			params.append("decadeId", decade);
		}
		
		const queryString = params.toString();
		const url = queryString 
			? `/connected-user-page?${queryString}`
			: `/connected-user-page`;
		
		router.push(url, undefined, { shallow: true });
	};

	// Handle category change
	const handleCategoryChange = (value: string) => {
		setSelectedCategory(value);
		updateURL(value, selectedDecade);
	};

	// Handle decade change
	const handleDecadeChange = (value: string) => {
		setSelectedDecade(value);
		updateURL(selectedCategory, value);
	};

	const handleStartQuiz = (quizId: number) => {
		router.push(`/quiz-details-page?id=${quizId}`);
	};

	const quizzes = data?.privateQuizzes || [];

	return (
		<div className="max-w-sm mx-auto w-full">
			{/* Image Section */}
			<div className="px-4 pt-8">
				<Card className="overflow-hidden p-0 border-white">
					<div className="relative w-full aspect-4/3 bg-zinc-800">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyy9gKjkNfYftUtfaFr0aKh6BsCSsNQxAjw&s"
							alt="Cinéma"
							className="absolute inset-0 w-full h-full object-cover"
						/>
					</div>
				</Card>

				{/* Filter Dropdowns Section - Under the image */}
				<div className="px-0 pt-2 pb-2">
					<div className="flex gap-2">
						<Select
							value={selectedCategory || undefined}
							onValueChange={handleCategoryChange}
							disabled={categoriesLoading}
						>
							<SelectTrigger className="bg-zinc-800 border-zinc-700 text-white flex-1 min-w-0">
								<SelectValue placeholder={categoriesLoading ? "Chargement..." : "Catégorie"} />
							</SelectTrigger>
							<SelectContent className="min-w-[calc(var(--radix-select-trigger-width)+15px)]!">
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
							value={selectedDecade || undefined}
							onValueChange={handleDecadeChange}
							disabled={decadesLoading}
						>
							<SelectTrigger className="bg-zinc-800 border-zinc-700 text-white flex-1 min-w-0">
								<SelectValue placeholder={decadesLoading ? "Chargement..." : "Décennie"} />
							</SelectTrigger>
							<SelectContent 
								position="item-aligned"
								side="bottom"
								align="start" 
								sideOffset={4} 
								collisionPadding={16}
								avoidCollisions={true}
								className="min-w-[calc(var(--radix-select-trigger-width)+15px)]!"
							>
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
				</div>
			</div>

			{/* Quizzes List */}
			<div className="px-4 py-8 space-y-6">
				{loading && (
					<div className="text-center text-white py-4">Loading quizzes...</div>
				)}

				{error && (
					<div className="text-center text-red-400 py-4">
						Error: {error.message}
					</div>
				)}

				{quizzes.length === 0 && !loading && (
					<div className="text-center text-white py-4">No private quizzes available</div>
				)}

				{quizzes.map((quiz: PrivateQuizzesQuery['privateQuizzes'][number]) => (
					<Card key={quiz.id} className="border-white bg-gray-500">
						<CardContent className="p-6 space-y-4">
							{/* Top section with decade and category */}
							<div className="flex justify-between items-start">
								{/* Decade - Top Left - Red badge */}
								{quiz.decade && (
									<div className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
										{quiz.decade.name}
									</div>
								)}
								{/* Category - Top Right - Yellow badge */}
								{quiz.category && (
									<div className="bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
										{quiz.category.name}
									</div>
								)}
							</div>

							{/* Middle section with title and description */}
							<div className="space-y-2">
								<h2 className="text-xl font-bold text-black">{quiz.title}</h2>
								<p className="text-black text-sm">
									{quiz.description}
								</p>
							</div>

							{/* Duration and percentage badges */}
							<div className="flex justify-center gap-3">
								{/* Duration badge with clock icon */}
								<div className="bg-white text-gray-600 text-xs px-3 py-1 rounded-full flex items-center gap-1">
									<Clock className="w-3 h-3" />
									<span>{formatDuration(quiz.time_limit || 0)}</span>
								</div>
								{/* Percentage badge with target icon */}
								<div className="bg-white text-gray-600 text-xs px-3 py-1 rounded-full flex items-center gap-1">
									<Target className="w-3 h-3" />
									<span>70%</span>
								</div>
							</div>

							{/* Start Button - Bottom */}
							<Button
								onClick={() => handleStartQuiz(quiz.id)}
								className="w-full bg-black text-white font-bold hover:bg-zinc-800 cursor-pointer"
							>
								Start quiz <ArrowRight className="w-4 h-4" />
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}

