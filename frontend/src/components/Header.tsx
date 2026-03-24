import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLogoutMutation, useProfileQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { type FormEvent, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Quantico } from 'next/font/google';

const quantico = Quantico({
	weight: ["400"]
});

export default function Header() {
	const [openMenu, setOpenMenu] = useState(false);

	const router = useRouter();
	const {data, refetch} = useProfileQuery({
		fetchPolicy: "cache-and-network"
	});

	const [logout] = useLogoutMutation();
	const user = data?.me || null;

	// Détection si on est sur la page de modification du profil
	const isOnProfilePage = router.pathname === "/profile-modify-page";

	const handleLogout = async (e: FormEvent) => {
		try {
			e.preventDefault();
			await logout();
			await refetch();
			console.log("déconnexion faite");
			router.push("/login-page");
		} catch(err) {
			console.log("Logout error", err);
		} 
	}

	return (
		<header className="p-4 bg-black text-white border-b-4 border-[#00bb0d]">
			<div className="max-w-sm mx-auto flex justify-between items-center">
				<Link href={`${user ? "/connected-user-page" : "/home-page"}`} className="w-max">
					<h1 className={`text-2xl font-bold text-[#00bb0d] ${quantico.className}`}>CyberQuiz</h1>
				</Link>

				<DropdownMenu onOpenChange={()=> setOpenMenu(!openMenu)}>
					<DropdownMenuTrigger asChild className="cursor-pointer">
						<Button variant="ghost" size="icon" aria-label="Menu" data-testid="menu-burger-button" className="text-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d]">
							<Menu className={`size-6 ${openMenu ? "hidden": ""}`} />
							<X className={`size-6 ${openMenu ? "": "hidden"}`} />
						</Button>
					</DropdownMenuTrigger>
			
					<DropdownMenuContent sideOffset={10} className="w-60 text-white bg-[#565656] border border-[#00bb0d] rounded-none" align="end" data-testid="menu-dropdown">
					{/* menu visiteur */}
					{!user && 
						<DropdownMenuGroup className={quantico.className}>

							<DropdownMenuItem asChild>
								<Link 
									href="/infos/contacts" 
									className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black focus:bg-[#00bb0d] focus:text-black data-highlighted:bg-[#00bb0d] data-highlighted:text-black cursor-pointer rounded-none block outline-none" 
									data-testid="menu-contacts"
								>
									Contacts
								</Link>
							</DropdownMenuItem>

							<DropdownMenuItem asChild>
								<Link 
									href="/infos/about" 
									className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black focus:bg-[#00bb0d] focus:text-black data-highlighted:bg-[#00bb0d] data-highlighted:text-black cursor-pointer rounded-none block outline-none" 
									data-testid="menu-about"
								>
									A propos
								</Link>
							</DropdownMenuItem>
							
							<DropdownMenuItem asChild>
								<Link 
									href="/infos/personal-data-policy" 
									className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black focus:bg-[#00bb0d] focus:text-black data-highlighted:bg-[#00bb0d] data-highlighted:text-black cursor-pointer rounded-none block outline-none" 
									data-testid="menu-personal-data"
								>
									Protection des données
								</Link>
							</DropdownMenuItem>

							<DropdownMenuItem asChild>
								<Link 
									href="/infos/legal-notices" 
									className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black focus:bg-[#00bb0d] focus:text-black data-highlighted:bg-[#00bb0d] data-highlighted:text-black cursor-pointer rounded-none block outline-none" 
									data-testid="menu-legal-notices"
								>
									Mentions légales
								</Link>
							</DropdownMenuItem>

							<DropdownMenuItem asChild>
								<Link 
									href="/home-page" 
									className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black focus:bg-[#00bb0d] focus:text-black data-highlighted:bg-[#00bb0d] data-highlighted:text-black cursor-pointer rounded-none block outline-none" 
									data-testid="menu-home"
								>
									Retour accueil
								</Link>
							</DropdownMenuItem>

						</DropdownMenuGroup>
					}
					{/* menu utilisateur connecté */}
					{user &&
						<DropdownMenuGroup className={quantico.className}> 
							{/* Affichage conditionnel : "Jouer" si on est sur la page profil, "Profil" sinon */}
							{isOnProfilePage ? (
								<DropdownMenuItem asChild>
									<Link 
										href="/choice-page" 
										className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black focus:bg-[#00bb0d] focus:text-black data-highlighted:bg-[#00bb0d] data-highlighted:text-black cursor-pointer rounded-none block outline-none"
									>
										Jouer
									</Link>
								</DropdownMenuItem>
							) : (
								<DropdownMenuItem asChild>
									<Link 
										href="/profile-modify-page" 
										className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black focus:bg-[#00bb0d] focus:text-black data-highlighted:bg-[#00bb0d] data-highlighted:text-black cursor-pointer rounded-none block outline-none"
									>
										Profil & scores
									</Link>
								</DropdownMenuItem>
							)}
							
							{user.is_admin && (
								<DropdownMenuItem asChild>
									<Link 
										href="/admin" 
										className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black focus:bg-[#00bb0d] focus:text-black data-highlighted:bg-[#00bb0d] data-highlighted:text-black cursor-pointer rounded-none block outline-none"
									>
										Admin
									</Link>
								</DropdownMenuItem>
							)}
							
							<DropdownMenuItem 
								className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black focus:bg-[#00bb0d] focus:text-black data-highlighted:bg-[#00bb0d] data-highlighted:text-black cursor-pointer rounded-none outline-none" 
								onClick={handleLogout}
							>
								Déconnexion
							</DropdownMenuItem>
						</DropdownMenuGroup>
					}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
