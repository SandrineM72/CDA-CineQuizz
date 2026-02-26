"use client";

import { useUserPersonalStatsQuery } from "@/graphql/generated/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, BarChart3 } from "lucide-react";

export default function UserStatsCard() {
	const { data, loading, error } = useUserPersonalStatsQuery({
		fetchPolicy: "cache-and-network",
	});

	if (loading) {
		return (
			<Card className="bg-black border-2 border-[#00bb0d] rounded-none">
				<CardContent className="p-4">
					<div className="text-center text-white">Chargement des statistiques...</div>
				</CardContent>
			</Card>
		);
	}

	if (error || !data?.userPersonalStats) {
		return null; // Ne rien afficher en cas d'erreur
	}

	const stats = data.userPersonalStats;

	return (
		<Card className="bg-black border-2 border-[#00bb0d] rounded-none">
			<CardContent className="p-4 space-y-3">
				{/* Taux de réussite */}
				<div className="bg-[#565656] p-4">
					<div className="flex items-center gap-3 mb-2">
						<BarChart3 className="w-5 h-5 text-[#00bb0d]" />
						<h3 className="text-white font-semibold">Taux de réussite</h3>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-[#00bb0d]">
							{stats.totalSuccessRate.toFixed(1)}%
						</div>
						<p className="text-xs text-gray-300 mt-1">
							Moyenne de tous vos scores
						</p>
					</div>
				</div>

				{/* Quiz réussis */}
				<div className="bg-[#565656] p-4">
					<div className="flex items-center gap-3 mb-2">
						<Trophy className="w-5 h-5 text-[#00bb0d]" />
						<h3 className="text-white font-semibold">Quiz réussis</h3>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-[#00bb0d]">
							{stats.totalQuizzesPassed}
						</div>
					</div>
				</div>

				{/* Progression globale */}
				<div className="bg-[#565656] p-4">
					<div className="flex items-center gap-3 mb-2">
						<Target className="w-5 h-5 text-[#00bb0d]" />
						<h3 className="text-white font-semibold">Progression</h3>
					</div>
					<div className="space-y-2">
						<div className="flex justify-between text-white text-sm">
							<span>Quiz joués</span>
							<span className="font-semibold">
								{stats.totalQuizzesAttempted} / {stats.totalQuizzesAvailable}
							</span>
						</div>
						{/* Barre de progression */}
						<div className="w-full bg-gray-700 rounded-full h-3">
							<div
								className="bg-[#00bb0d] h-3 rounded-full transition-all duration-500"
								style={{ width: `${stats.completionRate}%` }}
							/>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
