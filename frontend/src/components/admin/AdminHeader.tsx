import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLogoutMutation, useProfileQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Quantico } from "next/font/google";

const quantico = Quantico({
	weight: ["400"],
});

export default function AdminHeader() {
	const [openMenu, setOpenMenu] = useState(false);
	const router = useRouter();
	const { data, refetch } = useProfileQuery({
		fetchPolicy: "cache-and-network",
	});

	const [logout] = useLogoutMutation();
	const user = data?.me || null;

	const handleLogout = async (e: FormEvent) => {
		try {
			e.preventDefault();
			await logout();
			await refetch();
			console.log("Déconnexion admin effectuée");
			router.push("/");
		} catch (err) {
			console.log("Erreur lors de la déconnexion:", err);
		}
	};

	return (
		<header className="p-4 bg-black text-white border-b-4 border-[#00bb0d]">
			<div className="w-full flex justify-between items-center px-4">
				<Link href="/admin" className="w-max">
					<h1 className={`text-2xl font-bold text-[#00bb0d] ${quantico.className}`}>
						CyberQuiz
					</h1>
				</Link>

				<DropdownMenu onOpenChange={() => setOpenMenu(!openMenu)}>
					<DropdownMenuTrigger asChild className="cursor-pointer">
						<Button
							variant="ghost"
							size="icon"
							aria-label="Menu administration"
							className="text-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d]"
						>
							<Menu className={`size-6 ${openMenu ? "hidden" : ""}`} />
							<X className={`size-6 ${openMenu ? "" : "hidden"}`} />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent
						sideOffset={10}
						className="w-60 text-white bg-[#565656] border border-[#00bb0d] rounded-none"
						align="end"
					>
						<div className={quantico.className}>
							<Link href="/admin">
								<DropdownMenuItem className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black cursor-pointer rounded-none">
									Accueil Admin
								</DropdownMenuItem>
							</Link>

							<Link href="/connected-user-page">
								<DropdownMenuItem className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black cursor-pointer rounded-none">
									Retour site utilisateur
								</DropdownMenuItem>
							</Link>

							<DropdownMenuItem
								className="py-3 text-xl hover:bg-[#00bb0d] hover:text-black cursor-pointer rounded-none"
								onClick={handleLogout}
							>
								Déconnexion
							</DropdownMenuItem>
						</div>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
