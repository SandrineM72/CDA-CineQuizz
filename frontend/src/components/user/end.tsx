import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EndPage() {
  const [endText, setEndText] = useState<string>("");

  useEffect(() => {
    // Charger le fichier end-public-quiz.txt depuis le dossier public
    fetch('/textes/end-public-quiz.txt')
      .then(response => response.text())
      .then(text => setEndText(text))
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
              alt="Fin du quiz"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Call to action button outside card */}
        <div className="flex flex-col items-center">
          <Link href="/signup" className="w-3/4">
            <Button
              type="button"
              className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-14 text-base font-semibold leading-tight"
            >
              S'inscrire pour accéder<br />à tout CyberQuiz
            </Button>
          </Link>
        </div>

        {/* Intro text card */}
        <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
          <CardContent className="px-4">
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Le contenu provient d'un fichier contrôlé par l'application */}
            <div 
              className="intro-content text-white space-y-4"
              dangerouslySetInnerHTML={{ __html: endText }}
            />
          </CardContent>
        </Card>

        {/* Call to action button outside card */}
        <div className="flex flex-col items-center">
          <Link href="/signup" className="w-3/4">
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
