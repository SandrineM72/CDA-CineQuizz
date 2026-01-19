// ResultScreen.tsx
import Link from "next/link";
import { Heart } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ResultScreenProps {
  score: number;               // % venant du backend
  time: string;                // durée formatée
  message: string;             // message backend-driven
  trophyImageUrl: string;
  targetScore?: number;
  onNextQuiz: () => void;
  onReplayQuiz: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export function ResultScreen({
  score,
  time,
  message,
  trophyImageUrl,
  targetScore = 70,
  onNextQuiz,
  onReplayQuiz,
  isFavorite = false,
  onToggleFavorite,
}: ResultScreenProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = () => {
    setFavorite((prev) => !prev);
    onToggleFavorite?.();
  };

  const getProgressBarColor = () => {
    if (score < 50) return "bg-red-500";
    if (score < targetScore) return "bg-orange-500";
    return "bg-green-500";
  };

  return (
    <div className="px-4 py-8">
      <div className="max-w-sm mx-auto space-y-5">

        {/* Trophée */}
        <div className="relative overflow-hidden rounded-3xl border-4 border-zinc-600 bg-zinc-950/60">
          <img
            src={trophyImageUrl}
            alt="Trophée"
            className="w-full h-full object-cover"
          />

          <button
            onClick={handleFavoriteClick}
            className="absolute bottom-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/70"
            aria-label="Ajouter aux favoris"
          >
            <Heart
              className={cn(
                "w-8 h-8",
                favorite ? "fill-red-500 text-red-500" : "text-red-500"
              )}
            />
          </button>
        </div>

        {/* Score */}
        <div className="rounded-3xl border-4 border-zinc-600 bg-zinc-950/60 py-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl font-semibold text-white">{score}%</p>
            <Progress
              value={score}
              className={cn(
                "h-3",
                "[&>div]:transition-all",
                `[&>div]:${getProgressBarColor()}`
              )}
            />
          </div>
        </div>

        {/* Message */}
        <div className="rounded-3xl border-4 border-zinc-600 bg-zinc-950/60 py-6 text-center">
          <p className="text-2xl font-semibold text-white">
            {message} · {time}
          </p>
        </div>

        {/* Actions */}
        <Button onClick={onNextQuiz} className="w-full h-20 text-2xl">
          Quiz suivant
        </Button>

        <Button
          onClick={onReplayQuiz}
          variant="outline"
          className="w-full h-20 text-2xl"
        >
          Rejouer ce quiz
        </Button>
      </div>
    </div>
  );
}
