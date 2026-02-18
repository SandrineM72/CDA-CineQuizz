import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLogoutMutation, useProfileQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Quantico } from 'next/font/google';

const quantico = Quantico({
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
		<header className="p-4 bg-black text-white border-b-4 border-[#00bb0d]">
			<div className="max-w-sm mx-auto flex justify-between items-center">
				<Link href={`${user ? "/connected-user-page" : "/"}`} className="w-max">
					<h1 className={`text-2xl font-bold text-[#00bb0d] ${quantico.className}`}>CyberQuiz</h1>
				</Link>

				<DropdownMenu onOpenChange={()=> setOpenMenu(!openMenu)}>
					<DropdownMenuTrigger asChild className="cursor-pointer">
						<Button variant="ghost" size="icon" aria-label="Menu" className="text-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d]">
							<Menu className={`size-6 ${openMenu ? "hidden": ""}`} />
							<X className={`size-6 ${openMenu ? "": "hidden"}`} />
						</Button>
					</DropdownMenuTrigger>
			
					<DropdownMenuContent sideOffset={10} className="w-60 text-white bg-[#565656] border border-[#00bb0d] rounded-none" align="end">
					{/* menu visiteur */}
					{!user && 
						<DropdownMenuGroup className={quantico.className}>

							<Link href="/infos/contacts">
								<DropdownMenuItem className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black cursor-pointer rounded-none" >
									Contacts
								</DropdownMenuItem>
							</Link>

							<Link href="/infos/about">
								<DropdownMenuItem className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black cursor-pointer rounded-none">
									Qui sommes-nous ?
								</DropdownMenuItem>
							</Link>
							
							<Link href="/infos/personal-data-policy">
								<DropdownMenuItem className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black cursor-pointer rounded-none">
									Protection des données
								</DropdownMenuItem>
							</Link>

							<Link href="/infos/legal-notices">
								<DropdownMenuItem className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black cursor-pointer rounded-none">
									Mentions légales
								</DropdownMenuItem>
							</Link>
						</DropdownMenuGroup>
					}
					{/* menu utilisateur connecté */}
					{user &&
						<DropdownMenuGroup className={quantico.className}> 
							<Link href="/profile">
								<DropdownMenuItem className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black cursor-pointer rounded-none">
									Profil
								</DropdownMenuItem>
							</Link>
							{
								user.is_admin && <Link href="/admin">
									<DropdownMenuItem className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black cursor-pointer rounded-none">
										Admin
									</DropdownMenuItem>
								</Link>
							}
							<DropdownMenuItem className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black cursor-pointer rounded-none" onClick={handleLogout}>
							Log out
							</DropdownMenuItem>
						</DropdownMenuGroup>
					}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
