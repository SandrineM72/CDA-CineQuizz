"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useQuizQuery, useCreateAttemptMutation } from "@/graphql/generated/schema";

export default function QuizScreen() {
	const router = useRouter();
	const quizId = router.query.id ? Number(router.query.id) : 1; // Get ID from URL, default to 1
	const { data, loading: isLoading, error } = useQuizQuery({
		variables: { id: quizId },
		skip: !quizId,
	});
	const [createAttempt] = useCreateAttemptMutation();
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selected, setSelected] = useState<number | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const totalQuestionsRef = useRef<number>(0);
	const startTimeRef = useRef<number>(Date.now());
	const correctAnswersRef = useRef<number>(0);

	const quiz = data?.quiz;
	const totalQuestions = quiz?.questions?.length || 0;
	const currentQuestion = quiz?.questions?.[currentQuestionIndex];

	// Shuffle choices randomly for each question to prevent correct answer from always being in the same position
	// Fisher-Yates shuffle algorithm
	const shuffleArray = <T,>(array: T[]): T[] => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	// Shuffle choices whenever the question changes
	const shuffledChoices = useMemo(() => {
		if (!currentQuestion?.choices) return [];
		return shuffleArray(currentQuestion.choices);
	}, [currentQuestionIndex, currentQuestion?.choices]);

	const answers = shuffledChoices.map((choice: { description: string }) => choice.description);

	// Update ref when number of questions changes and initialize start time
	useEffect(() => {
		if (quiz?.questions) {
			totalQuestionsRef.current = quiz.questions.length;
			startTimeRef.current = Date.now(); // Initialize start time when quiz is loaded
			correctAnswersRef.current = 0; // Reset correct answers counter
			console.log("Total questions updated:", totalQuestionsRef.current);
		}
	}, [quiz?.questions]);

	const handleAnswerClick = async (index: number) => {
		if (selected !== null) return; // Prevent changing answer once selected
		setSelected(index);
		
		// Check if answer is correct using the shuffled choices array
		// The index corresponds to the position in the shuffled array
		const selectedChoice = shuffledChoices[index];
		if (selectedChoice?.is_correct) {
			correctAnswersRef.current += 1;
		}
		
		// Set a time out to automatically move to next question after 1 second
		setTimeout(() => {
			setCurrentQuestionIndex((prevIndex) => {
			  const questionsLength = totalQuestionsRef.current;
		  
			  if (prevIndex < questionsLength - 1) {
				return prevIndex + 1;
			  }
		  
			  handleQuizComplete();
			  return prevIndex;
			});
		  
			setSelected(null);
		  }, 1000);
		  
	};

	const handleQuizComplete = async () => {
		try {
			const duration = Math.floor((Date.now() - startTimeRef.current) / 1000); // Duration in seconds
			const score = correctAnswersRef.current;
			
			const result = await createAttempt({
				variables: {
					quizId,
					score,
					duration,
				},
			});

			if (result.data?.createAttempt?.id) {
				// Redirect to results page with attempt ID
				router.push(`/result?attemptId=${result.data.createAttempt.id}&quizId=${quizId}`);
			} else {
				setErrorMessage("Error saving attempt");
			}
		} catch (err: any) {
			console.error("Error creating attempt:", err);
			setErrorMessage(err.message || "An error occurred");
		}
	};

	if (isLoading) {
		return (
			<div className="w-full max-w-sm mx-auto flex flex-col items-center px-4 py-6 gap-6">
				<div className="text-white text-center">Loading quiz...</div>
			</div>
		);
	}

	if (error || !quiz || !currentQuestion) {
		return (
			<div className="w-full max-w-sm mx-auto flex flex-col items-center px-4 py-6 gap-6">
				<Card className="w-full border-gray-700 bg-transparent">
					<CardContent className="p-6">
						{errorMessage && (
							<p className="text-sm text-red-400 text-center">{errorMessage}</p>
						)}
						{!errorMessage && error && (
							<p className="text-sm text-red-400 text-center">
								{error.message || "An error occurred while loading the quiz"}
							</p>
						)}
						{!error && !quiz && (
							<p className="text-sm text-white text-center">Quiz not found</p>
						)}
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<div className="w-full max-w-sm mx-auto flex flex-col items-center px-4 py-6 gap-6">
			{/* Image Section */}
			<div className="w-full">
				<div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
					<Image
						src={quiz.image || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop"}
						alt="Movie still"
						fill
						className="object-cover"
						priority
					/>
				</div>
			</div>

			{/* Quiz Section */}
			<Card className="w-full border-gray-700 bg-transparent">
				<CardContent className="p-4 space-y-4">
					{/* Question Box */}
					<div className="w-full border border-gray-700 rounded-lg py-4 px-6 bg-transparent">
						<div className="text-center mb-2">
							<span className="text-sm text-gray-400 font-medium">
								Question {currentQuestionIndex + 1}/{totalQuestions}
							</span>
						</div>
						<p className="text-center font-serif font-bold text-lg text-white">
							{currentQuestion.title || "Question ?"}
						</p>
					</div>

					{/* Answer Buttons Grid */}
					<div className="grid grid-cols-2 gap-3">
						{answers.map((answer: string, index: number) => (
							<Button
								key={index}
								onClick={() => handleAnswerClick(index)}
								variant={selected === index ? "destructive" : "outline"}
								disabled={selected !== null}
								className={cn(
									"py-4 px-2 font-serif font-bold text-center border-gray-700 text-sm wrap-break-word whitespace-normal h-auto min-h-12",
									selected === index
										? "bg-red-600 text-white hover:bg-red-700"
										: "bg-transparent text-white hover:bg-gray-800",
									selected !== null && selected !== index && "opacity-50 cursor-not-allowed"
								)}
							>
								<span className="block">{answer}</span>
							</Button>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
