"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  useQuizQuery,
} from "@/graphql/generated/schema";

export default function PrivateQuiz() {
  const router = useRouter();
  const quizId = router.query.id ? Number(router.query.id) : undefined;
  
  // Récupérer questionIndex et answers depuis les query params (pour la navigation)
  const questionIndexParam = router.query.questionIndex ? Number(router.query.questionIndex) : 0;
  const answersParam = router.query.answers ? JSON.parse(router.query.answers as string) : [];
  const durationParam = router.query.duration ? Number(router.query.duration) : 0;

  const { data, loading: isLoading, error } = useQuizQuery({
    variables: { id: quizId! },
    skip: !quizId,
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(questionIndexParam);
  const [selected, setSelected] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const startTimeRef = useRef<number>(Date.now() - (durationParam * 1000));

  // Stocke les réponses utilisateur
  const answersRef = useRef<{ questionId: number; choiceId: number }[]>(answersParam);

  const quiz = data?.quiz;
  const currentQuestion = quiz?.questions?.[currentQuestionIndex];
  const totalQuestions = quiz?.questions?.length ?? 0;

  // Init quiz - réinitialiser seulement si c'est la première question
  useEffect(() => {
    if (quiz?.questions && questionIndexParam === 0) {
      startTimeRef.current = Date.now();
      answersRef.current = [];
    }
  }, [quiz?.questions, questionIndexParam]);

  // Mettre à jour currentQuestionIndex quand questionIndexParam change
  useEffect(() => {
    setCurrentQuestionIndex(questionIndexParam);
  }, [questionIndexParam]);

  // Handle answer click
  const handleAnswerClick = (choiceId: number, choiceIndex: number) => {
    if (selected !== null || !currentQuestion) return;

    setSelected(choiceIndex);

    // Stocke la réponse
    answersRef.current.push({
      questionId: currentQuestion.id,
      choiceId: choiceId,
    });

    // Redirection vers la page d'explications après 1 seconde
    setTimeout(() => {
      const duration = Math.floor((Date.now() - startTimeRef.current) / 1000);
      
      router.push({
        pathname: '/private-answers-page',
        query: {
          quizId: quizId,
          questionIndex: currentQuestionIndex,
          answers: JSON.stringify(answersRef.current),
          duration: duration,
        },
      });
    }, 1000);
  };

  // Render states
  if (isLoading) {
    return (
      <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
        <div className="w-full max-w-md">
          <p className="text-center text-white">Chargement du quiz...</p>
        </div>
      </div>
    );
  }

  if (error || !quiz || !currentQuestion) {
    return (
      <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
        <div className="w-full max-w-md">
          <p className="text-center text-[#c00f00]">
            {errorMessage || error?.message || "Quiz introuvable"}
          </p>
        </div>
      </div>
    );
  }

  // UI
  return (
    <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
      <div className="w-full max-w-md space-y-4">
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-full h-54 overflow-hidden border-4 border-[#00bb0d]">
            <Image
              src="/illustrations/code_dark.jpg"
              alt="Quiz"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
          <CardContent className="px-4">
            <div className="space-y-4">
              {/* Question title only (pas de numéro pour private) */}
              <div className="bg-[#565656] p-4 text-center">
                <p className="text-white text-base font-normal leading-relaxed">
                  {currentQuestion.title}
                </p>
              </div>

              {/* Answers */}
              <div className="space-y-3">
                {currentQuestion.choices.map((choice, index) => (
                  <Button
                    key={choice.id}
                    onClick={() => handleAnswerClick(choice.id, index)}
                    disabled={selected !== null}
                    className={`w-full bg-[#00bb0d] text-white border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-auto min-h-[30px] py-1 px-4 text-base font-normal leading-relaxed whitespace-normal ${
                      selected === index ? 'opacity-70' : ''
                    } ${selected !== null && selected !== index ? 'opacity-50' : ''}`}
                  >
                    {choice.description}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
