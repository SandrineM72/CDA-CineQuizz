import Link from "next/link";
import { useRouter } from "next/router";
import { useQuizPublicQuery } from "@/graphql/generated/schema";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function HomePage() {
  const router = useRouter();
  const { data, loading, error } = useQuizPublicQuery();

  const handleStartQuiz = (quizId: number) => {
    router.push(`/quiz-details-page?id=${quizId}`);
  };

  const formatTimeLimit = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} min`;
  };

  if (loading) {
    return (
      <div className="flex w-full items-start justify-center px-6 md:px-10">
        <div className="w-full max-w-md space-y-4">
          <p className="text-center text-white">Chargement des quiz...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full items-start justify-center px-6 md:px-10">
        <div className="w-full max-w-md space-y-4">
          <p className="text-center text-red-500">
            Erreur lors du chargement des quiz : {error.message}
          </p>
        </div>
      </div>
    );
  }

  // Limite à 3 quiz maximum
  const quizList = data?.getPublicQuizzes?.slice(0, 3) || [];

  return (
    <div className="flex w-full items-start justify-center px-6 md:px-10">
      <div className="w-full max-w-md space-y-4">
        {/* Image de présentation */}
          <div className="flex justify-center relative">
            <div className="w-full rounded-2xl overflow-hidden bg-sky-200">
              {/** biome-ignore lint/performance/noImgElement: <explanation> */}
              <img
                src="/films/forest_gump_assis.png"
                alt="Personnage"
                width={400}
                height={300}
                className="w-full h-full object-cover relative"
              />
            </div>
            <Link href={"/signup"}>
              <button
                type="button"
                className="absolute text-white bg-red-800 border-3 border-stone-600 px-1 py-1 rounded-lg left-0 bottom-0 text-sm hover:bg-red-600"
              >
                S'inscrire
              </button>
            </Link>
            
            <Link href={"/login"}>
              <button
                type="button"
                className="absolute text-white bg-yellow-500 border-3 border-stone-600 px-1 py-1 rounded-lg right-0 bottom-0 text-sm hover:bg-yellow-400"
              >
                Se connecter
              </button>
            </Link>
          </div>

        {/* Titre de section */}
        <h2 className="text-2xl font-bold text-center text-white">Bienvenue sur CinéQuizz !</h2>
        <p className="text-center text-gray-500 text-sm">
          Jouez sans inscription à nos quiz cinéma !
        </p>

        {/* Liste des quiz (maximum 3) */}
        <div className="space-y-3">
          {quizList.map((quiz) => (
            <Card
              key={quiz.id}
              className="bg-black border-gray-700 hover:border-gray-500 transition-colors pt-0 overflow-hidden"
            >
              {/* Image du quiz */}
              {quiz.image && (
                <div className="w-full h-48 overflow-hidden rounded-t-lg relative">
                  {/** biome-ignore lint/performance/noImgElement: <explanation> */}
                  <img src={quiz.image} alt={quiz.title} className="object-contain" />
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-white">{quiz.title}</CardTitle>
                <p className="text-gray-400 text-sm">{quiz.description}</p>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Informations du quiz */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-400">
                    <span className="font-semibold">Catégorie :</span> {quiz.category.name}
                  </div>
                  <div className="text-gray-400">
                    <span className="font-semibold">Décennie :</span> {quiz.decade.name}
                  </div>
                  <div className="text-gray-400">
                    <span className="font-semibold">Durée :</span>{" "}
                    {formatTimeLimit(quiz.time_limit)}
                  </div>
                  <div className="text-gray-400">
                    <span className="font-semibold">Public :</span>{" "}
                    {quiz.age_range.replace(/_/g, " ")}
                  </div>
                </div>

                {/* Bouton pour démarrer */}
                <Button
                  onClick={() => handleStartQuiz(quiz.id)}
                  className="w-full text-white"
                  variant="outline"
                >
                  Commencer le quiz
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
