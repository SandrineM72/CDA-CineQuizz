import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLogoutMutation, useProfileQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

import {
  	DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, 
  	DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

import { Limelight } from 'next/font/google';

const limelight = Limelight({
	weight: ["400"],
});


export default function Header() {

	const [openMenu, setOpenMenu] = useState(false);

	const router = useRouter();
	const {data, loading, refetch} = useProfileQuery({
		fetchPolicy: "cache-and-network"
	});

	const [logout] = useLogoutMutation();
	console.log(data);

	const user = data?.me || null;
	console.log(user);

	const handleLogout = async (e: FormEvent) => {
		try {
			e.preventDefault();
			await logout();
			await refetch();
			console.log("déconnexion faite");
			router.push("/home");
		} catch(err) {
			console.log("Logout error", err);
		} 
	}

	return (
		<header className="p-4 bg-zinc-900 text-white">
			<div className="max-w-sm mx-auto flex justify-between items-center">
				<Link href="/" className="w-max">
					<h1 className="text-2xl font-bold">CinéQuizz</h1>
				</Link>

				<DropdownMenu onOpenChange={()=> setOpenMenu(!openMenu)}>    {/* on utilise cet attribut pour gérer l'état de l'ouverture/fermeture */}
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon" aria-label="Menu">
							<Menu className={`size-6 ${openMenu ? "hidden": ""}`} />
							<X className={`size-6 ${openMenu ? "": "hidden"}`} />
						</Button>
					</DropdownMenuTrigger>
			
					<DropdownMenuContent sideOffset={10} className="w-60 text-white bg-stone-600 border-0" align="start">
					{!user && 
						<DropdownMenuGroup className={limelight.className}>
							<DropdownMenuItem className="py-3 text-xl hover:bg-stone-500" >
								Contacts
							</DropdownMenuItem>
							<DropdownMenuItem className="pb-3 text-xl hover:bg-stone-500">
								Qui sommes-nous ?
							</DropdownMenuItem>
							<DropdownMenuItem className="pb-3 text-xl hover:bg-stone-500">
								Protection des données
							</DropdownMenuItem>
							<DropdownMenuItem className="pb-3 text-xl hover:bg-stone-500">
								Mentions légales
							</DropdownMenuItem>
						</DropdownMenuGroup>
					}
					{user &&
						<DropdownMenuGroup className={limelight.className}> 
							<DropdownMenuItem className="pb-3 text-xl hover:bg-stone-500">
							Profil
							</DropdownMenuItem>
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
