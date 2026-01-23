import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLogoutMutation, useProfileQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Limelight } from 'next/font/google';

const limelight = Limelight({
	weight: ["400"]
});

export default function Header() {
	const [openMenu, setOpenMenu] = useState(false);

	const router = useRouter();
	const {data, loading, refetch} = useProfileQuery({
		fetchPolicy: "cache-and-network"
	});

	const [logout] = useLogoutMutation();
	const user = data?.me || null;

	const handleLogout = async (e: FormEvent) => {
		try {
			e.preventDefault();
			await logout();
			await refetch();
			console.log("déconnexion faite");
			router.push("/");
		} catch(err) {
			console.log("Logout error", err);
		} 
	}

	return (
		<header className="p-4 bg-zinc-900 text-white">
			<div className="max-w-sm mx-auto flex justify-between items-center">
				<Link href={`${user ? "/connected-user-page" : "/"}`} className="w-max">
					<h1 className="text-2xl font-bold">CinéQuizz</h1>
				</Link>

				<DropdownMenu onOpenChange={()=> setOpenMenu(!openMenu)}>    {/* on utilise cet attribut pour gérer l'état de l'ouverture/fermeture */}
					<DropdownMenuTrigger asChild className="cursor-pointer">
						<Button variant="ghost" size="icon" aria-label="Menu">
							<Menu className={`size-6 ${openMenu ? "hidden": ""}`} />
							<X className={`size-6 ${openMenu ? "": "hidden"}`} />
						</Button>
					</DropdownMenuTrigger>
			
					<DropdownMenuContent sideOffset={10} className="w-60 text-white bg-stone-600 border-0" align="start">
					{/* menu visiteur */}
					{!user && 
						<DropdownMenuGroup className={limelight.className}>
							<Link href="/contacts">
								<DropdownMenuItem className="py-3 text-xl hover:bg-stone-500 cursor-pointer" >
									Contacts
								</DropdownMenuItem>
							</Link>
							<Link href="/about">
								<DropdownMenuItem className="pb-3 text-xl hover:bg-stone-500 cursor-pointer">
									Qui sommes-nous ?
								</DropdownMenuItem>
							</Link>
							
							<Link href="/personal-data-policy">
								<DropdownMenuItem className="pb-3 text-xl hover:bg-stone-500 cursor-pointer">
									Protection des données
								</DropdownMenuItem>
							</Link>

							<Link href="/legal-notices">
								<DropdownMenuItem className="pb-3 text-xl hover:bg-stone-500 cursor-pointer">
									Mentions légales
								</DropdownMenuItem>
							</Link>
						</DropdownMenuGroup>
					}
					{/* menu utilisateur connecté */}
					{user &&
						<DropdownMenuGroup className={limelight.className}> 
							<Link href="/profile">
								<DropdownMenuItem className="pb-3 text-xl hover:bg-stone-500 cursor-pointer">
									Profil
								</DropdownMenuItem>
							</Link>
							{
								user.is_admin && <Link href="/admin">
									<DropdownMenuItem className="pb-3 text-xl hover:bg-stone-500 cursor-pointer">
										Admin
									</DropdownMenuItem>
								</Link>
							}
							<DropdownMenuItem className="pb-3 text-xl hover:bg-stone-500" onClick={handleLogout}>
							Log out
							</DropdownMenuItem>
						</DropdownMenuGroup>
					}
						<DropdownMenuSeparator />
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
