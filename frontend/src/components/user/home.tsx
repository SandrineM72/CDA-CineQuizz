import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [introText, setIntroText] = useState<string>("");

  useEffect(() => {
    // Charger le fichier intro.txt depuis le dossier public
    fetch('/textes/intro.txt')
      .then(response => response.text())
      .then(text => setIntroText(text))
      .catch(error => console.error('Erreur lors du chargement du texte:', error));
  }, []);

  return (
    <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
      <div className="w-full max-w-md space-y-4">
        {/* Header image */}
        <div className="flex justify-center">
          <div className="relative w-full aspect-[4/3] overflow-hidden border-4 border-[#00bb0d]">
            <Image
              src="/illustrations/smartphone_lock_plant-green.png"
              alt="Bienvenue sur CyberQuiz"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Intro text card */}
        <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
          <CardContent className="px-4">
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Le contenu provient d'un fichier contrôlé par l'application */}
            <div 
              className="intro-content text-white space-y-4"
              dangerouslySetInnerHTML={{ __html: introText }}
            />

            {/* Call to action button */}
            <div className="flex flex-col items-center gap-3 mt-6">
              <p className="text-white text-center font-semibold">
                Prêt à relever le défi ?
              </p>
              <p className="text-white text-center text-sm">
                Choisissez un quiz d'essai pour tester CyberQuiz !
              </p>
              <Link href="/quiz-welcome" className="w-full">
                <Button
                  type="button"
                  className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-12 text-base font-semibold"
                >
                  Je relève le défi !
                </Button>
              </Link>
              <p className="text-white text-center text-sm">(pas besoin d'inscription)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
