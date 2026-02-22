"use client";

import { useGlobalStatsQuery } from "@/graphql/generated/schema";
import { Card, CardContent } from "@/components/ui/card";
import {
	TrendingUp,
	CheckCircle,
	XCircle,
	BarChart3,
	Trophy,
	Target,
	Layers,
} from "lucide-react";

export default function StatsCards() {
	const { data, loading, error } = useGlobalStatsQuery();

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

	return (
		<div className="p-6 space-y-6">
			<h2 className="text-2xl font-bold text-white mb-6">Statistiques Globales</h2>

			{/* User Growth Card */}
			<Card className="border-gray-700 bg-gray-900">
				<CardContent className="p-6">
					<div className="flex items-center gap-3 mb-4">
						<TrendingUp className="w-6 h-6 text-green-400" />
						<h3 className="text-lg font-semibold text-white">
							Taux de croissance des utilisateurs
						</h3>
					</div>
					<div className="grid grid-cols-3 gap-4 mb-4">
						{stats.userGrowth.map((item) => (
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
						<h3 className="text-lg font-semibold text-white">
							Tentatives réussies vs échouées
						</h3>
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
						<div className="text-2xl font-bold text-orange-400">
							{stats.attemptsSuccessRate.successRate}%
						</div>
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

			{/* Top 5 Quiz les plus joués */}
			<Card className="border-gray-700 bg-gray-900">
				<CardContent className="p-6">
					<div className="flex items-center gap-3 mb-4">
						<Trophy className="w-6 h-6 text-yellow-400" />
						<h3 className="text-lg font-semibold text-white">
							Top 5 Quiz les plus joués
						</h3>
					</div>
					<div className="space-y-3">
						{stats.topQuizzes.length === 0 ? (
							<p className="text-gray-400 text-center py-4">Aucune donnée disponible</p>
						) : (
							stats.topQuizzes.map((item, index) => (
								<div
									key={item.quiz.id}
									className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
								>
									<div className="flex items-center gap-3">
										<div
											className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
												index === 0
													? "bg-yellow-500 text-black"
													: index === 1
													? "bg-gray-400 text-black"
													: index === 2
													? "bg-orange-600 text-white"
													: "bg-gray-600 text-white"
											}`}
										>
											{index + 1}
										</div>
										<div>
											<div className="text-white font-medium">{item.quiz.title}</div>
											<div className="text-sm text-gray-400">
												{item.quiz.level.name} • {item.quiz.theme.name}
											</div>
										</div>
									</div>
									<div className="text-right">
										<div className="text-lg font-bold text-yellow-400">
											{item.attemptCount}
										</div>
										<div className="text-xs text-gray-400">tentatives</div>
									</div>
								</div>
							))
						)}
					</div>
				</CardContent>
			</Card>

			{/* Top 5 Levels les plus joués */}
			<Card className="border-gray-700 bg-gray-900">
				<CardContent className="p-6">
					<div className="flex items-center gap-3 mb-4">
						<Target className="w-6 h-6 text-blue-400" />
						<h3 className="text-lg font-semibold text-white">
							Top 5 Levels les plus joués
						</h3>
					</div>
					<div className="space-y-3">
						{stats.topLevels.length === 0 ? (
							<p className="text-gray-400 text-center py-4">Aucune donnée disponible</p>
						) : (
							stats.topLevels.map((item, index) => (
								<div
									key={item.level.id}
									className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
								>
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
											{index + 1}
										</div>
										<div className="text-white font-medium">{item.level.name}</div>
									</div>
									<div className="text-right">
										<div className="text-lg font-bold text-blue-400">
											{item.attemptCount}
										</div>
										<div className="text-xs text-gray-400">tentatives</div>
									</div>
								</div>
							))
						)}
					</div>
				</CardContent>
			</Card>

			{/* Top 5 Themes les plus joués */}
			<Card className="border-gray-700 bg-gray-900">
				<CardContent className="p-6">
					<div className="flex items-center gap-3 mb-4">
						<Layers className="w-6 h-6 text-purple-400" />
						<h3 className="text-lg font-semibold text-white">
							Top 5 Thèmes les plus joués
						</h3>
					</div>
					<div className="space-y-3">
						{stats.topThemes.length === 0 ? (
							<p className="text-gray-400 text-center py-4">Aucune donnée disponible</p>
						) : (
							stats.topThemes.map((item, index) => (
								<div
									key={item.theme.id}
									className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
								>
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white">
											{index + 1}
										</div>
										<div className="text-white font-medium">{item.theme.name}</div>
									</div>
									<div className="text-right">
										<div className="text-lg font-bold text-purple-400">
											{item.attemptCount}
										</div>
										<div className="text-xs text-gray-400">tentatives</div>
									</div>
								</div>
							))
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
