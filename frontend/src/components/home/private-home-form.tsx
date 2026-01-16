"use client";

import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Target } from "lucide-react";
import { usePrivateQuizzesQuery, PrivateQuizzesQuery } from "@/graphql/generated/schema";

function formatDuration(seconds: number): string {
	const minutes = Math.floor(seconds / 60);
	return `${minutes} min`;
}

export default function PrivateHomeForm() {
	const router = useRouter();
	
	// Get filtering parameters from URL
	// Parameters come from URL as strings, convert them to numbers
	// Wait for router to be ready to avoid hydration errors
	const categoryIdParam = router.isReady ? router.query.categoryId : undefined;
	const decadeIdParam = router.isReady ? router.query.decadeId : undefined;
	
	const categoryId = categoryIdParam && typeof categoryIdParam === 'string'
		? Number(categoryIdParam)
		: undefined;
	const decadeId = decadeIdParam && typeof decadeIdParam === 'string'
		? Number(decadeIdParam)
		: undefined;

	// Pass parameters to GraphQL query
	// Always make the request to avoid hydration errors
	// Parameters will be undefined if router is not ready
	const { data, loading, error } = usePrivateQuizzesQuery({
		variables: {
			categoryId: categoryId || undefined,
			decadeId: decadeId || undefined,
		},
		fetchPolicy: 'network-only', // Always fetch from server to respect filters
	});

	const handleStartQuiz = (quizId: number) => {
		router.push(`/quiz-details-page?id=${quizId}`);
	};

	const quizzes = data?.privateQuizzes || [];

	return (
		<div className="max-w-sm mx-auto w-full">
			{/* Image Section - Fixed at top (without signup button) */}
			<div className="px-4 pt-8 sticky top-0 z-10 bg-zinc-900">
				<Card className="overflow-hidden p-0 border-white">
				<div className="relative w-full aspect-4/3 bg-zinc-800">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyy9gKjkNfYftUtfaFr0aKh6BsCSsNQxAjw&s"
						alt="Cinéma"
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</div>
			</Card>
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
								className="w-full bg-black text-white font-bold hover:bg-zinc-900"
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

