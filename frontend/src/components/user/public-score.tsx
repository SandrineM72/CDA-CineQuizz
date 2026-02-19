import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useGuestUserRecentAttemptsQuery } from "@/graphql/generated/schema";

export default function PublicScore() {
  // Récupérer les 3 derniers attempts du GuestUser
  const { data, loading } = useGuestUserRecentAttemptsQuery();
  const attempts = data?.guestUserRecentAttempts || [];

  // Calcul du score global (moyenne des 3 quiz)
  const globalScore = attempts.length > 0
    ? Math.round(attempts.reduce((sum, a) => sum + a.percentage_success, 0) / attempts.length)
    : 0;

  // Calcul du temps total (somme des durées)
  const totalTime = attempts.reduce((sum, a) => sum + a.duration, 0);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min ${remainingSeconds}`;
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
              {/* Section 1 : Message */}
              <div className="bg-[#565656] p-4 text-center">
                <p className="text-white text-base font-normal">
                  Vos 3 quiz d'essai sont terminés,
                </p>
                <p className="text-white text-base font-normal">
                  voici vos scores.
                </p>
              </div>

              {/* Section 2 : Score */}
              <div className="bg-[#565656] p-4 text-center">
                <p className="text-white text-base font-normal">
                  Réussite : {globalScore}%
                </p>
              </div>

              {/* Section 3 : Temps */}
              <div className="bg-[#565656] p-4 text-center">
                <p className="text-white text-base font-normal">
                  Temps : {formatTime(totalTime)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to action button */}
        <div className="flex flex-col items-center">
          <Link href="/signup-page" className="w-3/4">
            <Button
              type="button"
              className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-14 text-base font-semibold leading-tight"
            >
              S'inscrire pour accéder<br />à tout CyberQuiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
