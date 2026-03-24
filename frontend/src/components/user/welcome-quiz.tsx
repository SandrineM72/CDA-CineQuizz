import Link from "next/link";
import { useRouter } from "next/router";
import { useQuizPublicQuery, useGuestUserCompletedQuizIdsQuery } from "@/graphql/generated/schema";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function WelcomeQuiz() {
  const router = useRouter();
  
  // 2 requêtes graphql nécessaires pour gérer la limite du nombre de quiz
  const { data, loading, error } = useQuizPublicQuery();
  const { data: completedData } = useGuestUserCompletedQuizIdsQuery({
    fetchPolicy: 'network-only',
  });
  const completedQuizIds = completedData?.guestUserCompletedQuizIds || [];

  const handleStartQuiz = (quizId: number) => {
    router.push(`/public-quiz-page?id=${quizId}`);
  };

  if (loading) {
    return (
      <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
        <div className="w-full max-w-md space-y-4">
          <p className="text-center text-white">Chargement des quiz...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
        <div className="w-full max-w-md space-y-4">
          <p className="text-center text-[#c00f00]">
            Erreur lors du chargement des quiz : {error.message}
          </p>
        </div>
      </div>
    );
  }

  // Fonction pour déterminer l'ordre des niveaux
  const getLevelOrder = (levelName: string) => {
    const normalized = levelName.toLowerCase();
    if (normalized.includes('débutant') || normalized.includes('debutant')) return 1;
    if (normalized.includes('avancé') || normalized.includes('avance')) return 2;
    if (normalized.includes('expert')) return 3;
    return 4; // Autres niveaux en dernier
  };

  // Tri des quiz par niveau
  const allQuizzes = data?.getPublicQuizzes || [];
  const sortedQuizzes = [...allQuizzes].sort((a, b) => {
    const orderA = getLevelOrder(a.level?.name || '');
    const orderB = getLevelOrder(b.level?.name || '');
    return orderA - orderB;
  });

  // Limite à 3 quiz maximum
  const quizList = sortedQuizzes.slice(0, 3);

  return (
    <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
      <div className="w-full max-w-sm space-y-4">
        {/* Header image */}
        <div className="flex justify-center">
          <div className="relative w-full h-54 overflow-hidden border-4 border-[#00bb0d]">
            <Image
              src="/illustrations/smartphone_lock_plant-green.png"
              alt="Bienvenue sur CyberQuiz"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Call to action button */}
        <div className="flex flex-col items-center">
          <Button
            asChild
            className="w-3/4 bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full h-18 text-base font-semibold leading-tight text-center"
          >
            <Link href="/signup-page">
              S'inscrire ou se<br />connecter pour accéder<br />à tout CyberQuiz
            </Link>
          </Button>
        </div>

        {/* Liste des quiz (maximum 3) */}
        <div className="space-y-3">
          {quizList.map((quiz) => {
            // ✨ AJOUTÉ : Vérifier si ce quiz a déjà été complété
            const isCompleted = completedQuizIds.includes(quiz.id);
            
            return (
              <Card
                key={quiz.id}
                className="bg-black border-2 border-[#00bb0d] rounded-none"
              >
                <CardContent className="px-4">
                  {/* Titre du thème avec indicateur de complétion */}
                  <h3 className="text-[#565656] text-lg font-semibold text-center mb-3">
                    {quiz.theme?.name || "Thème inconnu"}
                    {isCompleted && (
                      <span className="ml-2 text-[#00bb0d]">✓</span>
                    )}
                  </h3>

                  {/* Bouton pour démarrer */}
                  <Button
                    onClick={() => handleStartQuiz(quiz.id)}
                    className="w-full bg-black text-white border-2 border-[#00bb0d] hover:bg-[#00bb0d] hover:text-black rounded-none h-12 text-sm font-semibold"
                  >
                    {isCompleted ? (
                      <>Recommencer le quiz d'essai<br />niveau {quiz.level?.name || "inconnu"}</>
                    ) : (
                      <>Commencer le quiz d'essai<br />niveau {quiz.level?.name || "inconnu"}</>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
