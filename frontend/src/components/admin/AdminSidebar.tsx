import Link from "next/link";
import { CircleUserRound, Gamepad2, ChartArea } from "lucide-react";
import { useRouter } from "next/router";

const menuItems = [
	{
		title: "Utilisateurs",
		url: "/admin/users",
		icon: CircleUserRound,
	},
	{
		title: "Quiz",
		url: "/admin/games",
		icon: Gamepad2,
	},
	{
		title: "Statistiques",
		url: "/admin/stats",
		icon: ChartArea,
	},
];

export default function AdminSidebar() {
	const router = useRouter();

	return (
		<aside className="w-64 bg-gray-900 border-r border-gray-700 flex flex-col min-h-screen">
			<div className="p-4 border-b border-gray-700">
				<h2 className="text-white font-semibold text-lg">Administration</h2>
			</div>
			<nav className="flex-1 p-4">
				<ul className="space-y-2">
					{menuItems.map((item) => {
						const isActive = router.pathname === item.url;
						return (
							<li key={item.title}>
								<Link
									href={item.url}
									className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
										isActive
											? "bg-[#00bb0d] text-black font-semibold"
											: "text-gray-300 hover:bg-gray-800 hover:text-white"
									}`}
								>
									<item.icon className="w-5 h-5" />
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</aside>
	);
}
