import Layout from "@/components/Layout";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Link from "next/link";
import { CircleUserRound, Gamepad2, ChartArea } from "lucide-react";

const adminSections = [
	{
		title: "Gestion des utilisateurs",
		url: "/admin/users",
		icon: CircleUserRound,
		description: "Gérer les comptes utilisateurs",
	},
	{
		title: "Gestion des quiz",
		url: "/admin/games",
		icon: Gamepad2,
		description: "Créer et modifier les quiz",
	},
	{
		title: "Consultation des statistiques",
		url: "/admin/stats",
		icon: ChartArea,
		description: "Voir les statistiques globales",
	},
];

export default function AdminHomePage() {
	return (
		<Layout pageTitle="Administration">
			<div className="flex">
				<AdminSidebar />
				<main className="flex-1 p-8 overflow-auto bg-black">
					<div className="w-full max-w-4xl mx-auto">
						<h1 className="text-3xl font-bold text-[#00bb0d] mb-2 text-center">
							Bienvenue sur l'écran de l'administration CyberQuiz !
						</h1>

						<p className="text-xl text-[#00bb0d] mb-8 text-center">Choix possibles :</p>

						<ul className="space-y-2 mb-8 text-[#00bb0d]">
							{adminSections.map((section) => (
								<li key={section.url} className="text-lg">
									{section.title}
								</li>
							))}
						</ul>

						{/* Image Spock */}
						<div className="flex justify-center">
							<img
								src="/illustrations/Startrek.jpg"
								alt="Spock - Live long and prosper"
								className="max-w-md rounded-lg border-4 border-[#00bb0d]"
							/>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
}
