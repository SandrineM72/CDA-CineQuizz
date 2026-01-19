import { useRouter } from "next/router";
import { useAttemptQuery } from "@/graphql/generated/schema";
import { ResultScreen } from "./result-screen";

export default function ResultContainer() {
  const router = useRouter();
  const attemptId = Number(router.query.attemptId);

  const { data, loading, error } = useAttemptQuery({
    variables: { id: attemptId },
    skip: !attemptId,
  });

  if (loading) return <p className="text-white">Chargement...</p>;
  if (error || !data?.attempt)
    return <p className="text-red-500">Résultat introuvable</p>;

  const attempt = data.attempt;

  return (
    <ResultScreen
      score={attempt.percentage_success}
      time={`${attempt.duration}s`}
      message={attempt.passed ? "Bravo !" : "Presque !"}
      trophyImageUrl={
        attempt.passed
          ? "/images/trophy-success.jpg"
          : "/images/trophy-fail.jpg"
      }
      onReplayQuiz={() =>
        router.push(`/quiz?id=${attempt.quiz.id}`)
      }
      onNextQuiz={() => router.push("/quiz")}
    />
  );
}
