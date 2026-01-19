"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  useQuizQuery,
  useCreateAttemptMutation,
} from "@/graphql/generated/schema";

export default function QuizScreen() {
  const router = useRouter();
  const quizId = router.query.id ? Number(router.query.id) : undefined;

  const { data, loading: isLoading, error } = useQuizQuery({
    variables: { id: quizId! },
    skip: !quizId,
  });

  const [createAttempt] = useCreateAttemptMutation();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const startTimeRef = useRef<number>(Date.now());

  // 👉 Stocke les réponses utilisateur (SOURCE envoyée au backend)
  const answersRef = useRef<
    { questionId: number; choiceId: number }[]
  >([]);

  const quiz = data?.quiz;
  const currentQuestion = quiz?.questions?.[currentQuestionIndex];
  const totalQuestions = quiz?.questions?.length ?? 0;

  // -------------------------------
  // Shuffle des réponses (UI only)
  // -------------------------------
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledChoices = useMemo(() => {
    if (!currentQuestion?.choices) return [];
    return shuffleArray(currentQuestion.choices);
  }, [currentQuestionIndex, currentQuestion?.choices]);

  // -------------------------------
  // Init quiz
  // -------------------------------
  useEffect(() => {
    if (quiz?.questions) {
      startTimeRef.current = Date.now();
      answersRef.current = [];
    }
  }, [quiz?.questions]);

  // -------------------------------
  // Handle answer click
  // -------------------------------
  const handleAnswerClick = (index: number) => {
    if (selected !== null || !currentQuestion) return;

    setSelected(index);

    const selectedChoice = shuffledChoices[index];

    // 👉 On stocke la réponse (PAS de calcul de score ici)
    answersRef.current.push({
      questionId: currentQuestion.id,
      choiceId: selectedChoice.id,
    });

    setTimeout(() => {
      setSelected(null);

      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        handleQuizComplete();
      }
    }, 1000);
  };

  // -------------------------------
  // Quiz complete
  // -------------------------------
  const handleQuizComplete = async () => {
    try {
      const duration = Math.floor(
        (Date.now() - startTimeRef.current) / 1000
      );

      const result = await createAttempt({
        variables: {
          quizId: quizId!,
          answers: answersRef.current,
          duration,
        },
      });

      const attemptId = result.data?.createAttempt?.id;

      if (attemptId) {
        router.push(`/result?attemptId=${attemptId}`);
      } else {
        setErrorMessage("Erreur lors de l'enregistrement du résultat");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Une erreur est survenue");
    }
  };

  // -------------------------------
  // Render states
  // -------------------------------
  if (isLoading) {
    return (
      <div className="w-full max-w-sm mx-auto px-4 py-6 text-white text-center">
        Chargement du quiz...
      </div>
    );
  }

  if (error || !quiz || !currentQuestion) {
    return (
      <div className="w-full max-w-sm mx-auto px-4 py-6">
        <Card className="border-gray-700 bg-transparent">
          <CardContent className="p-6">
            <p className="text-sm text-red-400 text-center">
              {errorMessage ||
                error?.message ||
                "Quiz introuvable"}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // -------------------------------
  // UI
  // -------------------------------
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col gap-6 px-4 py-6">
      {/* Image */}
      <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
        <Image
          src={
            quiz.image ||
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800"
          }
          alt="Quiz"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Question */}
      <Card className="border-gray-700 bg-transparent">
        <CardContent className="p-4 space-y-4">
          <div className="text-center">
            <span className="text-sm text-gray-400">
              Question {currentQuestionIndex + 1}/{totalQuestions}
            </span>
          </div>

          <p className="text-center text-lg font-bold text-white">
            {currentQuestion.title}
          </p>

          {/* Answers */}
          <div className="grid grid-cols-2 gap-3">
            {shuffledChoices.map((choice, index) => (
              <Button
                key={choice.id}
                onClick={() => handleAnswerClick(index)}
                disabled={selected !== null}
                className={cn(
                  "h-auto py-4 text-sm font-bold whitespace-normal",
                  selected === index
                    ? "bg-red-600 text-white"
                    : "bg-transparent text-white border border-gray-700",
                  selected !== null &&
                    selected !== index &&
                    "opacity-50"
                )}
              >
                {choice.description}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

