import AdminLayout from "@/components/AdminLayout";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { CircleUserRound, Gamepad2, ChartArea } from "lucide-react";
import Image from "next/image";

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
		<AdminLayout pageTitle="Administration">
			<div className="flex">
				<AdminSidebar />
				<main className="flex-1 p-8 overflow-auto bg-black">
					<div className="w-full max-w-4xl mx-auto">
						<h1 className="text-3xl font-bold text-[#00bb0d] mb-2 text-center">
							Bienvenue sur l'écran de l'administration CyberQuiz !
						</h1>

						<p className="text-xl text-[#00bb0d] my-8 text-center">Choix possibles :</p>

						<ul className="space-y-2 mb-8 text-[#00bb0d] text-center" >
							{adminSections.map((section) => (
								<li key={section.url} className="text-lg">
									{section.title}
								</li>
							))}
						</ul>

						<div className="flex justify-center">
							<Image
								src="/illustrations/Startrek.jpg"
								alt="Spock - Live long and prosper"
								width={300}
								height={200}
								className="max-w-md rounded-none border-4 border-[#00bb0d]"
								priority
							/>
						</div>
					</div>
				</main>
			</div>
		</AdminLayout>
	);
}
