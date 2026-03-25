import Link from "next/link";
import { CircleUserRound, Gamepad2, ChartArea } from "lucide-react";
import { useRouter } from "next/router";
import { useRef, createContext, useContext, ReactNode, useState, useEffect } from "react";

// Context pour partager les refs entre sidebar et contenu
export const AdminFocusContext = createContext<{
	usersRef: React.RefObject<HTMLAnchorElement | null>;
	gamesRef: React.RefObject<HTMLAnchorElement | null>;
	statsRef: React.RefObject<HTMLAnchorElement | null>;
} | null>(null);

// Hook personnalisé pour récupérer les refs depuis n'importe quel composant
export function useAdminFocus() {
	const context = useContext(AdminFocusContext);
	if (!context) {
		throw new Error("useAdminFocus doit être utilisé dans un AdminFocusProvider");
	}
	return context;
}

// Provider séparé qui wrappera toute la page admin
export function AdminFocusProvider({ children }: { children: ReactNode }) {
	// Refs pour chaque lien de menu
	const usersRef = useRef<HTMLAnchorElement | null>(null);
	const gamesRef = useRef<HTMLAnchorElement | null>(null);
	const statsRef = useRef<HTMLAnchorElement | null>(null);

	const contextValue = {
		usersRef,
		gamesRef,
		statsRef,
	};

	return (
		<AdminFocusContext.Provider value={contextValue}>
			{children}
		</AdminFocusContext.Provider>
	);
}

const menuItems = [
	{
		title: "Utilisateurs",
		url: "/admin/users",
		icon: CircleUserRound,
		refKey: "usersRef" as const,
	},
	{
		title: "Quiz",
		url: "/admin/games",
		icon: Gamepad2,
		refKey: "gamesRef" as const,
	},
	{
		title: "Statistiques",
		url: "/admin/stats",
		icon: ChartArea,
		refKey: "statsRef" as const,
	},
];

export default function AdminSidebar() {
	const router = useRouter();
	
	// Récupérer les refs depuis le context
	const { usersRef, gamesRef, statsRef } = useAdminFocus();

	// Map des refs
	const refsMap = {
		usersRef,
		gamesRef,
		statsRef,
	};

	// Index de l'item actuellement focus (pour la navigation aux flèches)
	const [focusedIndex, setFocusedIndex] = useState<number>(0);

	// Trouver l'index de l'item actif (basé sur l'URL)
	const activeIndex = menuItems.findIndex(
		item => router.pathname === item.url || router.pathname.startsWith(item.url + "/")
	);

	// Au montage, mettre le focus sur l'item actif
	useEffect(() => {
		if (activeIndex !== -1) {
			setFocusedIndex(activeIndex);
		}
	}, [activeIndex]);

	// Gestion des flèches ↑↓
	const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
		let newIndex = index;

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			newIndex = (index + 1) % menuItems.length; // Boucle vers le début
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			newIndex = (index - 1 + menuItems.length) % menuItems.length; // Boucle vers la fin
		} else if (e.key === 'Enter') {
			// Entrée : on laisse le Link faire son travail de navigation
			// Après navigation, on veut que le Tab suivant aille au contenu
			return;
		} else {
			return; // Autre touche, ne rien faire
		}

		// Mettre le focus sur le nouvel item
		setFocusedIndex(newIndex);
		const newRef = refsMap[menuItems[newIndex].refKey as keyof typeof refsMap];
		if (newRef?.current) {
			newRef.current.focus();
		}
	};

	return (
		<aside className="w-64 bg-gray-900 border-r border-gray-700 flex flex-col min-h-screen">
			<div className="p-4 border-b border-gray-700">
				<h2 className="text-white font-semibold text-lg" tabIndex={-1}>Administration</h2>
			</div>
			<nav className="flex-1 p-4" aria-label="Menu d'administration">
				<ul className="space-y-2" role="menu" tabIndex={-1}>
					{menuItems.map((item, index) => {
						const isActive = router.pathname === item.url || router.pathname.startsWith(item.url + "/");
						const ref = refsMap[item.refKey];
						const isFocused = focusedIndex === index;

						return (
							<li key={item.title} role="none">
								<Link
									ref={ref}
									href={item.url}
									role="menuitem"
									tabIndex={isFocused ? 0 : -1}
									onKeyDown={(e) => handleKeyDown(e, index)}
									onFocus={() => setFocusedIndex(index)}
									className={`flex items-center gap-3 px-3 py-2 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 outline-none rounded ${
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
