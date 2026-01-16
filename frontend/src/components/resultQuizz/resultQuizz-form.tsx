// biome-ignore assist/source/organizeImports: <explanation>
import Link from "next/link";
import { Heart } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ResultScreenProps {
  score?: number;
  time?: string;
  message?: string;
  trophyImageUrl?: string;
  targetScore?: number; // Objectif à atteindre (par défaut 70%)
  onNextQuiz?: () => void;
  onReplayQuiz?: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
}

export default function ResultPage({
  score = 85,
  time = "1min54",
  message = "Super!",
  trophyImageUrl = "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
  targetScore = 70,
  onNextQuiz,
  onReplayQuiz,
  onToggleFavorite,
  isFavorite = false,
}: ResultScreenProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    onToggleFavorite?.();
  };

  // Déterminer la couleur de la barre de progression selon le score
  const getProgressBarColor = () => {
    if (score < 50) {
      return "bg-red-500"; // Rouge si < 50%
    } else if (score < targetScore) {
      return "bg-orange-500"; // Orange si entre 50% et l'objectif
    } else {
      return "bg-green-500"; // Vert si >= objectif
    }
  };

  return (
    <div className="px-4 py-8">
      <div className="max-w-sm mx-auto space-y-5">
        {/* Carte image trophée */}

        <div className="relative overflow-hidden rounded-3xl border-4 border-zinc-600 bg-zinc-950/60">
          {/** biome-ignore lint/performance/noImgElement: <explanation> */}
          <img
            src={trophyImageUrl}
            alt="Trophée"
            width={400}
            height={300}
            className="w-full h-full object-cover relative"
          />

          {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            onClick={handleFavoriteClick}
            className="absolute bottom-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all z-20 shadow-lg"
            aria-label="Ajouter aux favoris"
          >
            <Heart
              className={cn("w-8 h-8", favorite ? "fill-red-500 text-red-500" : "text-red-500")}
            />
          </button>
        </div>

        {/* Bloc % + Progress */}
        <div className="w-full h-20 rounded-3xl border-4 border-zinc-600 bg-zinc-950/60 py-6">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-semibold text-white">{score}%</p>
            <Progress
              value={score}
              className={cn(
                "h-3",
                // hack simple: on force la couleur de l'indicateur interne
                // (si ton Progress expose un indicator via classes, ça marchera)
                "[&>div]:transition-all",
                `[&>div]:${getProgressBarColor}`,
              )}
            />
          </div>
        </div>

        {/* Bloc message + temps */}
        <div className="rounded-3xl border-4 border-zinc-600 bg-zinc-950/60 py-6 text-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-semibold text-white">
              {" "}
              {message} {time}
            </p>
          </div>
        </div>
        <Link
  href="/quiz"
  onClick={onNextQuiz}
  className="block w-full rounded-3xl border-4 border-zinc-600 bg-zinc-950/60 transition hover:bg-zinc-900/70"
>
  <Button className="w-full h-20 text-2xl font-semibold text-white" aria-label="Submit">
    Quiz suivant
  </Button>
</Link>

<Link
  href="/quiz/replay"
  onClick={onReplayQuiz}
  className="block w-full rounded-3xl border-4 border-zinc-600 bg-zinc-950/60 transition hover:bg-zinc-900/70"
>
  <Button className="w-full h-20 text-2xl font-semibold text-white" aria-label="Submit">
    Rejouer ce quiz
  </Button>
</Link>
      </div>
    </div>
  );
}
