"use client";

import { useState } from "react";
// @ts-ignore - Will be available after codegen runs
import { useGlobalStatsQuery } from "@/graphql/generated/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, CheckCircle, XCircle, BarChart3 } from "lucide-react";

type Period = "week" | "month" | "year";

export default function StatsData() {
	const { data, loading, error } = useGlobalStatsQuery();
	const [selectedPeriod, setSelectedPeriod] = useState<Period>("week");

	if (loading) {
		return (
			<div className="p-6">
				<div className="text-center text-white">Chargement des statistiques...</div>
			</div>
		);
	}

	if (error || !data?.globalStats) {
		return (
			<div className="p-6">
				<div className="text-center text-red-400">
					{error?.message || "Erreur lors du chargement des statistiques"}
				</div>
			</div>
		);
	}

	const stats = data.globalStats;
	const newUsersCount = stats.newUsers[selectedPeriod];

	return (
		<div className="p-6 space-y-6">
			<h2 className="text-2xl font-bold text-white mb-6">Statistiques Globales</h2>

			{/* New Users Card */}
			<Card className="border-gray-700 bg-gray-900">
				<CardContent className="p-6">
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center gap-3">
							<Users className="w-6 h-6 text-blue-400" />
							<h3 className="text-lg font-semibold text-white">Nouveaux utilisateurs</h3>
						</div>
						<div className="flex gap-2">
							<Button
								variant={selectedPeriod === "week" ? "default" : "outline"}
								size="sm"
								onClick={() => setSelectedPeriod("week")}
								className={selectedPeriod === "week" 
									? "bg-blue-600 text-white hover:bg-blue-700" 
									: "border-gray-600 bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
								}
							>
								Semaine
							</Button>
							<Button
								variant={selectedPeriod === "month" ? "default" : "outline"}
								size="sm"
								onClick={() => setSelectedPeriod("month")}
								className={selectedPeriod === "month" 
									? "bg-blue-600 text-white hover:bg-blue-700" 
									: "border-gray-600 bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
								}
							>
								Mois
							</Button>
							<Button
								variant={selectedPeriod === "year" ? "default" : "outline"}
								size="sm"
								onClick={() => setSelectedPeriod("year")}
								className={selectedPeriod === "year" 
									? "bg-blue-600 text-white hover:bg-blue-700" 
									: "border-gray-600 bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
								}
							>
								Année
							</Button>
						</div>
					</div>
					<div className="text-4xl font-bold text-blue-400">{newUsersCount}</div>
					<p className="text-sm text-gray-300 mt-2">
						Utilisateurs inscrits sur la période sélectionnée
					</p>
				</CardContent>
			</Card>

			{/* Age Distribution Card */}
			<Card className="border-gray-700 bg-gray-900">
				<CardContent className="p-6">
					<div className="flex items-center gap-3 mb-4">
						<BarChart3 className="w-6 h-6 text-purple-400" />
						<h3 className="text-lg font-semibold text-white">Répartition par tranche d'âge</h3>
					</div>
					<div className="space-y-4">
						{stats.ageDistribution.map((item: { age_range: string; count: number; percentage: number; formattedLabel: string }) => (
							<div key={item.age_range} className="space-y-2">
								<div className="flex justify-between items-center">
									<span className="text-gray-200 font-medium">
										{item.formattedLabel}
									</span>
									<span className="text-gray-300">
										{item.count} utilisateurs ({item.percentage}%)
									</span>
								</div>
								<div className="w-full bg-gray-700 rounded-full h-3">
									<div
										className="bg-purple-500 h-3 rounded-full transition-all"
										style={{ width: `${item.percentage}%` }}
									/>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			{/* User Growth Card */}
			<Card className="border-gray-700 bg-gray-900">
				<CardContent className="p-6">
					<div className="flex items-center gap-3 mb-4">
						<TrendingUp className="w-6 h-6 text-green-400" />
						<h3 className="text-lg font-semibold text-white">Taux de croissance des utilisateurs</h3>
					</div>
					<div className="grid grid-cols-3 gap-4 mb-4">
						{stats.userGrowth.map((item: { period: string; count: number }) => (
							<div key={item.period} className="text-center p-3 bg-gray-800 rounded-lg">
								<div className="text-sm text-gray-300 mb-1">{item.period}</div>
								<div className="text-2xl font-bold text-green-400">{item.count}</div>
							</div>
						))}
					</div>
					<div className="text-sm text-gray-300">
						Évolution mensuelle (3 derniers mois)
					</div>
				</CardContent>
			</Card>

			{/* Attempts Success Rate Card */}
			<Card className="border-gray-700 bg-gray-900">
				<CardContent className="p-6">
					<div className="flex items-center gap-3 mb-4">
						<BarChart3 className="w-6 h-6 text-orange-400" />
						<h3 className="text-lg font-semibold text-white">Tentatives réussies vs échouées</h3>
					</div>
					<div className="grid grid-cols-2 gap-4 mb-4">
						<div className="text-center p-4 bg-green-900/30 rounded-lg border border-green-800">
							<CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
							<div className="text-3xl font-bold text-green-400">
								{stats.attemptsSuccessRate.passed}
							</div>
							<div className="text-sm text-gray-300 mt-1">Réussies</div>
						</div>
						<div className="text-center p-4 bg-red-900/30 rounded-lg border border-red-800">
							<XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
							<div className="text-3xl font-bold text-red-400">
								{stats.attemptsSuccessRate.failed}
							</div>
							<div className="text-sm text-gray-300 mt-1">Échouées</div>
						</div>
					</div>
					<div className="text-center">
						<div className="text-sm text-gray-300 mb-1">Taux de réussite</div>
						<div className="text-2xl font-bold text-orange-400">{stats.attemptsSuccessRate.successRate}%</div>
					</div>
				</CardContent>
			</Card>

			{/* Average Score Card */}
			<Card className="border-gray-700 bg-gray-900">
				<CardContent className="p-6">
					<div className="flex items-center gap-3 mb-4">
						<BarChart3 className="w-6 h-6 text-indigo-400" />
						<h3 className="text-lg font-semibold text-white">Score moyen global</h3>
					</div>
					<div className="text-center">
						<div className="text-5xl font-bold text-indigo-400 mb-2">
							{stats.averageScore.toFixed(1)}%
						</div>
						<div className="w-full bg-gray-700 rounded-full h-4 max-w-md mx-auto">
							<div
								className="bg-indigo-500 h-4 rounded-full transition-all"
								style={{ width: `${stats.averageScore}%` }}
							/>
						</div>
						<p className="text-sm text-gray-300 mt-3">
							Moyenne de tous les scores de tentatives
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
