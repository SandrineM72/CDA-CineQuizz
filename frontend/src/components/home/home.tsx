import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const router = useRouter();

  // TODO: Remplacer par une vraie requête GraphQL pour récupérer les quiz publics
  // Query à créer : getPublicQuizzes (where is_public = true AND is_draft = false)
  const quizList = [
    {
      id: 1,
      title: "Les Comédies Françaises Cultes",
      description: "Testez vos connaissances sur les comédies françaises incontournables",
      image: "/image-quiz-1.jpg",
      category: { name: "Comédie" },
      decade: { name: "Années 90" },
      time_limit: 300, // en secondes
      age_range: "TOUS_PUBLICS",
    },
    {
      id: 2,
      title: "Le Cinéma d'Action des Années 80",
      description: "Plongez dans l'univers explosif du cinéma d'action",
      image: "/image-quiz-2.jpg",
      category: { name: "Action" },
      decade: { name: "Années 80" },
      time_limit: 600,
      age_range: "MOINS_16",
    },
  ];

  const handleStartQuiz = (quizId: number) => {
    router.push(`/quiz/${quizId}`);
  };

  // Fonction pour convertir les secondes en minutes
  const formatTimeLimit = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} min`;
  };

  return (
    <div className="flex w-full items-start justify-center px-6 md:px-10">
      <div className="w-full max-w-md space-y-4">
        Image de présentation
        <div className="flex justify-center">
          <div className="relative w-full rounded-2xl overflow-hidden bg-sky-200">
            <img
              src="/forest_gump_assis.png"
              alt="Personnage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Titre de section */}
        <h2 className="text-2xl font-bold text-center text-white">Bienvenue sur CinéQuizz !</h2>
        <p className="text-center text-gray-500 text-sm">
          Jouez sans inscription à nos quiz cinéma !
        </p>
        {/* Liste des quiz disponibles */}
        <div className="space-y-3">
          {quizList.map((quiz) => (
            <Card
              key={quiz.id}
              className="bg-black border-gray-700 hover:border-gray-500 transition-colors"
            >
              {/* Image du quiz (optionnelle) */}
              {quiz.image && (
                <div className="w-full h-32 overflow-hidden rounded-t-lg">
                  <img src={quiz.image} alt={quiz.title} className="w-full h-full object-cover" />
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
