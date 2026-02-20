import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useUserSessionAttemptsLazyQuery, useLogoutMutation } from "@/graphql/generated/schema";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PrivateScore() {
  const router = useRouter();
  const quizId = router.query.quizId ? Number(router.query.quizId) : undefined;

  // Utilisation de LazyQuery pour appel manuel côté client uniquement
  const [fetchAttempts, { data, loading, called }] = useUserSessionAttemptsLazyQuery({
    fetchPolicy: 'network-only',
  });

  // 👇 AJOUT : Mutation de logout
  const [logout] = useLogoutMutation();

  const [hasExecuted, setHasExecuted] = useState(false);

  // Appel manuel de la query côté client uniquement - UNE SEULE FOIS
  useEffect(() => {
    if (typeof window !== 'undefined' && !hasExecuted) {
      fetchAttempts().then(result => {
        setHasExecuted(true);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Exécute UNE SEULE FOIS au montage

  const attempts = data?.userSessionAttempts || [];

  // Calcul du score global (moyenne de tous les quiz de la session)
  const globalScore = attempts.length > 0
    ? Math.round(attempts.reduce((sum, a) => sum + a.percentage_success, 0) / attempts.length)
    : 0;

  // Temps du dernier quiz (le plus récent)
  const lastAttemptTime = attempts.length > 0 ? attempts[0].duration : 0;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min ${remainingSeconds}`;
  };

  const handleQuizSuivant = () => {
    router.push('/choice-page');
  };

  const handleRejouerQuiz = () => {
    if (quizId) {
      router.push(`/private-quiz-page?id=${quizId}`);
    }
  };

  // 👇 MODIFIÉ : Vraie déconnexion avec mutation logout
  const handleDeconnexion = async () => {
    try {
      await logout(); // Appelle la mutation logout (détruit la session côté serveur)
      router.push('/login-page');
    } catch (err) {
      console.error("Logout error:", err);
      router.push('/login-page'); // Redirige quand même en cas d'erreur
    }
  };

  if (loading) {
    return (
      <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
        <div className="w-full max-w-md">
          <p className="text-center text-white">Chargement des résultats...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
      <div className="w-full max-w-md space-y-4">
        {/* Image trophée */}
        <div className="flex justify-center">
          <div className="relative w-full aspect-[4/3] overflow-hidden border-4 border-[#00bb0d]">
            <Image
              src="/illustrations/trophy_blue_green.jpg"
              alt="Trophée"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
          <CardContent className="px-4 py-4">
            <div className="space-y-3">
              {/* Section 1 : Score avec tooltip */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-[#565656] p-4 text-center cursor-help">
                      <p className="text-white text-base font-normal">
                        Réussite : {globalScore}%
                      </p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black border-2 border-[#00bb0d] text-white">
                    <p>Score cumulé depuis votre connexion</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Section 2 : Temps avec tooltip */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-[#565656] p-4 text-center cursor-help">
                      <p className="text-white text-base font-normal">
                        Temps : {formatTime(lastAttemptTime)}
                      </p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black border-2 border-[#00bb0d] text-white">
                    <p>Temps du dernier quiz joué</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
        </Card>

        {/* Boutons */}
        <div className="space-y-3">
          {/* Bouton 1 : Quiz suivant */}
          <Button
            onClick={handleQuizSuivant}
            className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-12 text-base font-semibold"
          >
            Quiz suivant
          </Button>

          {/* Bouton 2 : Rejouer ce quiz */}
          <Button
            onClick={handleRejouerQuiz}
            disabled={!quizId}
            className="w-full bg-black text-[#00bb0d] border-2 border-[#00bb0d] hover:bg-[#00bb0d] hover:text-black rounded-full h-12 text-base font-semibold"
          >
            Rejouer ce quiz
          </Button>

          {/* Séparateur visuel */}
          <div className="py-2 text-center">
              <p className="text-white text-sm">Assez joué ?<br />Je me déconnecte avec le menu burger.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
