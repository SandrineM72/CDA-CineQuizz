import { useRouter } from "next/router";
import {
  useAttemptQuery,
  useNextPublicQuizQuery,
  useNextQuizQuery,
  useMeQuery,
} from "@/graphql/generated/schema";
import { ResultScreen } from "./result-screen";

export default function ResultContainer() {
  const router = useRouter();
  const attemptId = Number(router.query.attemptId);

  /* =======================
       AUTH (JWT HttpOnly)
     Source of truth: backend
     ======================= */
  const { data: meData, loading: meLoading } = useMeQuery();
  const isAuthenticated = Boolean(meData?.me);

  /* =======================
     Current attempt
     ======================= */
  const {
    data: attemptData,
    loading: attemptLoading,
    error: attemptError,
  } = useAttemptQuery({
    variables: { id: attemptId },
    skip: !attemptId,
  });

  const quizId = attemptData?.attempt?.quiz?.id;

  /* =======================
        Next PUBLIC quiz
     (unauthenticated users)
     ======================= */
  const {
    data: nextPublicQuizData,
    loading: nextPublicQuizLoading,
  } = useNextPublicQuizQuery({
    variables: { currentQuizId: quizId! },
    skip: !quizId || isAuthenticated,
  });

  /* =======================
       Next GLOBAL quiz
     (authenticated users)
     ======================= */
  const {
    data: nextQuizData,
    loading: nextQuizLoading,
  } = useNextQuizQuery({
    variables: { currentQuizId: quizId! },
    skip: !quizId || !isAuthenticated,
  });

  /* ===============================
     Global loading / error states
     =============================== */
  if (meLoading || attemptLoading) {
    return <p className="text-white">Loading...</p>;
  }

  if (attemptError || !attemptData?.attempt) {
    return <p className="text-red-500">Result not found</p>;
  }

  const attempt = attemptData.attempt;

  /* =======================
     Business actions
     ======================= */

  // Replay → same quiz (a new Attempt will be created later)
  const handleReplayQuiz = () => {
    router.push(`/quiz-details-page?id=${attempt.quiz.id}`);
  };

  // Next quiz (full and robust logic)
  const handleNextQuiz = () => {

    if (isAuthenticated) {
      if (nextQuizLoading) return;

      const nextQuiz = nextQuizData?.nextQuiz;

      if (!nextQuiz) {
        // End of authenticated user journey
        router.push("/connected-user-page");
        return;
      }

      router.push(`/quiz-details-page?id=${nextQuiz.id}`);
      return;
    }

    // UNAUTHENTICATED USER
    if (nextPublicQuizLoading) return;

    const nextPublicQuiz = nextPublicQuizData?.nextPublicQuiz;

    if (!nextPublicQuiz) {
      // End of public quiz journey
      router.push("/");
      return;
    }

    router.push(`/quiz-details-page?id=${nextPublicQuiz.id}`);
  };

  return (
    <ResultScreen
      score={attempt.percentage_success}
      time={`${attempt.duration}s`}
      message={attempt.passed ? "Bravo!" : "Almost there!"}
      trophyImageUrl={
        attempt.passed
          ? "/images/trophy-success.jpg"
          : "/images/trophy-fail.jpg"
      }
      onReplayQuiz={handleReplayQuiz}
      onNextQuiz={handleNextQuiz}
      nextQuizLoading={nextQuizLoading || nextPublicQuizLoading}
    />
  );
}
