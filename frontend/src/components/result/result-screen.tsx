"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DEFAULT_IMAGE_URL =
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop";

interface ResultScreenProps {
  score: number;               // % backend
  time: string;                // formatted time
  message: string;
  trophyImageUrl?: string;
  targetScore?: number;
  onNextQuiz: () => void;
  onReplayQuiz: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
  nextQuizLoading?: boolean;
}

export function ResultScreen({
  score,
  time,
  message,
  trophyImageUrl,
  targetScore = 70,
  onNextQuiz,
  onReplayQuiz,
  onToggleFavorite,
  isFavorite = false,
  nextQuizLoading = false,
}: ResultScreenProps) {
  const [favorite, setFavorite] = useState(isFavorite);
  const [imageError, setImageError] = useState(false);

  const imageSrc =
    imageError || !trophyImageUrl
      ? DEFAULT_IMAGE_URL
      : trophyImageUrl;

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
    <div className="w-full max-w-sm mx-auto flex flex-col items-center px-4 py-6 gap-6">

      {/* Image */}
      <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-zinc-800">
        <img
          src={imageSrc}
          alt="Quiz result"
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />

        <button
          onClick={handleFavoriteClick}
          className="absolute bottom-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/70 z-20"
          aria-label="Ajouter aux favoris"
        >
          <Heart
            className={cn(
              "w-8 h-8",
              favorite
                ? "fill-red-500 text-red-500"
                : "text-red-500"
            )}
          />
        </button>
      </div>

      {/* Result Card */}
      <Card className="w-full border-gray-700 bg-zinc-900 relative overflow-hidden">
        {/* Bokeh */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-2xl" />
          <div className="absolute top-32 right-16 w-16 h-16 bg-yellow-500 rounded-full blur-xl" />
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-yellow-300 rounded-full blur-lg" />
          <div className="absolute bottom-32 right-10 w-14 h-14 bg-yellow-400 rounded-full blur-xl" />
        </div>

        <CardContent className="p-6 space-y-6 relative z-10">

          {/* Progress */}
          <div className="relative w-full h-12 bg-zinc-700 rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full flex items-center justify-end pr-4 transition-all duration-500",
                getProgressBarColor()
              )}
              style={{ width: `${score}%` }}
            >
              {score >= 10 && (
                <span className="text-white text-xl font-bold">
                  {score}%
                </span>
              )}
            </div>

            {score < 10 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {score}%
                </span>
              </div>
            )}
          </div>

          {/* Message */}
          <Button
            variant="outline"
            className="w-full py-4 bg-zinc-800 border-gray-700 text-white text-lg cursor-default"
            disabled
          >
            {message} · {time}
          </Button>

          {/* Actions */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full py-4 bg-zinc-800 border-gray-700 text-white hover:bg-zinc-700"
              onClick={onNextQuiz}
              disabled={nextQuizLoading}
            >
              {nextQuizLoading ? "Chargement..." : "Quiz suivant"}
            </Button>

            <Button
              variant="outline"
              className="w-full py-4 bg-zinc-800 border-gray-700 text-white hover:bg-zinc-700"
              onClick={onReplayQuiz}
            >
              Rejouer ce quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
