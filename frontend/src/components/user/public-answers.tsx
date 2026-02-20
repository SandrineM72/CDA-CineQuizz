import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  useQuizQuery,
  useCreateAttemptMutation,
  useGuestUserCompletedQuizzesQuery,
} from "@/graphql/generated/schema";
import { useState } from "react";

export default function PublicAnswers() {
  const router = useRouter();
  const { quizId, questionIndex, answers: answersParam, duration } = router.query;

  const [createAttempt] = useCreateAttemptMutation();
  const [isProcessing, setIsProcessing] = useState(false);

  const parsedQuizId = quizId ? Number(quizId) : undefined;
  const parsedQuestionIndex = questionIndex ? Number(questionIndex) : 0;
  const parsedDuration = duration ? Number(duration) : 0;
  
  const answersArray = answersParam 
    ? JSON.parse(answersParam as string) 
    : [];

  const { data, loading, error } = useQuizQuery({
    variables: { id: parsedQuizId! },
    skip: !parsedQuizId,
  });

  // Récupérer le nombre de quiz terminés par le GuestUser
  const { data: completedData, refetch: refetchCompleted } = useGuestUserCompletedQuizzesQuery();
  const completedQuizzes = completedData?.guestUserCompletedQuizzes || 0;

  const quiz = data?.quiz;
  const currentQuestion = quiz?.questions?.[parsedQuestionIndex];
  const totalQuestions = quiz?.questions?.length ?? 0;

  // Déterminer le bouton et l'action
  const isLastQuestionOfQuiz = parsedQuestionIndex === totalQuestions - 1;

  // Cas 1 : Pas fini le quiz actuel (< 3 questions)
  const isCase1 = !isLastQuestionOfQuiz;
  // Cas 2 : Quiz fini, mais le user n'a pas encore terminé 3 quiz
  const isCase2 = isLastQuestionOfQuiz && completedQuizzes < 2; // < 2 car on va en créer un de plus
  // Cas 3 : Le user a déjà 2 quiz terminés, celui-ci sera le 3ème
  const isCase3 = isLastQuestionOfQuiz && completedQuizzes >= 2;

  // Trouver la réponse choisie par l'utilisateur
  const userAnswer = answersArray.find(
    (a: any) => a.questionId === currentQuestion?.id
  );
  const correctChoice = currentQuestion?.choices.find((c) => c.is_correct);
  const isCorrectAnswer = userAnswer && correctChoice && userAnswer.choiceId === correctChoice.id;

  const handleNextAction = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    try {
      if (isCase1) {
        // Prochaine question du même quiz
        router.push({
          pathname: '/public-quiz-page',
          query: {
            id: parsedQuizId,
            questionIndex: parsedQuestionIndex + 1,
            answers: JSON.stringify(answersArray),
            duration: parsedDuration,
            quizId: parsedQuizId,
          },
        });
      } else if (isCase2) {
        // Créer l'attempt pour ce quiz
        await createAttempt({
          variables: {
            quizId: parsedQuizId!,
            answers: answersArray,
            duration: parsedDuration,
          },
        });
        
        // Recharger le nombre de quiz complétés
        await refetchCompleted();
        
        // Retour à welcome-quiz pour choisir un autre quiz
        router.push('/quiz-welcome-page');
      } else if (isCase3) {
        // Créer l'attempt pour ce dernier quiz
        await createAttempt({
          variables: {
            quizId: parsedQuizId!,
            answers: answersArray,
            duration: parsedDuration,
          },
        });
        
        // Aller à la page de score final
        router.push('/public-score-page');
      }
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
    }
  };

  const getButtonText = () => {
    if (isCase1) return "Compris, question suivante !";
    if (isCase2) return "Choisir un autre quiz";
    if (isCase3) return (
      <>
        Les 3 quiz sont terminés<br />
        Voir mes scores
      </>
    );
    return "Continuer";
  };

  if (loading) {
    return (
      <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
        <div className="w-full max-w-md">
          <p className="text-center text-white">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error || !quiz || !currentQuestion) {
    return (
      <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
        <div className="w-full max-w-md">
          <p className="text-center text-[#c00f00]">
            {error?.message || "Question introuvable"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
      <div className="w-full max-w-md space-y-4">
        <div className="flex justify-center">
          <div className="relative w-full h-34 overflow-hidden border-4 border-[#00bb0d]">
            <Image
              src="/illustrations/question_mark_right_green.jpg"
              alt="Point d'interrogation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Explanation Card */}
        <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
          <CardContent className="px-4">
            <div className="space-y-4">
              {/* Explication avec Bravo/Dommage */}
              <div className="bg-[#565656] p-4 space-y-2">
                {/* Message Bravo ou Dommage */}
                <p className={`text-lg font-semibold text-center ${
                  isCorrectAnswer ? 'text-[#00bb0d]' : 'text-[#c00f00]'
                }`}>
                  {isCorrectAnswer ? 'Bravo !' : 'Dommage !'}
                </p>
                
                {/* Explication */}
                <p className="text-white text-sm font-normal leading-relaxed">
                  {currentQuestion.explanation || "Explication non disponible"}
                </p>
              </div>

              {/* Bouton action */}
              <Button
                onClick={handleNextAction}
                disabled={isProcessing}
                className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-auto min-h-[48px] py-3 px-4 text-base font-semibold leading-tight"
              >
                {isProcessing ? "Chargement..." : getButtonText()}
              </Button>

              {/* Answers avec couleurs */}
              <div className="space-y-3">
                {currentQuestion.choices.map((choice) => (
                  <Button
                    key={choice.id}
                    disabled
                    className={`w-full h-auto min-h-[30px] py-1 px-4 text-base font-normal leading-relaxed whitespace-normal rounded-full border-4 ${
                      choice.is_correct
                        ? 'bg-[#00bb0d] border-[#00bb0d] text-white'
                        : 'bg-[#c00f00] border-[#c00f00] text-white'
                    }`}
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
