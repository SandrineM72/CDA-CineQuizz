import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
	return (
		<header className="p-4 bg-zinc-900 text-white">
			<div className="max-w-sm mx-auto flex justify-between items-center">
				<Link href="/" className="w-max">
					<h1 className="text-2xl font-bold italic">CinéQuizz</h1>
				</Link>
				<Button variant="ghost" size="icon" aria-label="Menu">
					<Menu className="h-6 w-6" />
				</Button>
			</div>
		</header>
	);
}
