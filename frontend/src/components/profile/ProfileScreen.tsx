import { Pencil } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProfileScreenProps {
	username: string;
	ageRange: string;
	quizCount: number;
	trophyCount: number;
	avatarUrl?: string;
	onEditAvatar?: () => void;
}

export default function ProfileScreen({
	username,
	ageRange,
	quizCount,
	trophyCount,
	avatarUrl,
	onEditAvatar,
}: ProfileScreenProps) {
	return (
		<div className="max-w-sm mx-auto px-6 py-8">
			{/* Avatar Section */}
			<section className="mb-10">
				<div className="relative flex justify-center">
					<div className="relative">
						<Avatar className="h-[150px] w-[150px] border-2 border-zinc-600">
							<AvatarImage src={avatarUrl} alt={`Avatar de ${username}`} />
							<AvatarFallback className="bg-zinc-800 text-sm font-semibold tracking-wide">
								AVATAR
							</AvatarFallback>
						</Avatar>
						<Button
							size="icon"
							className="absolute -right-2 top-2 h-10 w-10 rounded-full bg-white hover:bg-zinc-100"
							aria-label="Modifier l'avatar"
							onClick={onEditAvatar}
						>
							<Pencil className="h-5 w-5 text-zinc-900" />
						</Button>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="flex flex-col gap-4">
				<Card className="bg-transparent border-2 border-zinc-600 hover:border-zinc-500 transition-colors">
					<CardContent className="p-5 text-center">
						<span className="text-base font-medium">{username}</span>
					</CardContent>
				</Card>

				<Card className="bg-transparent border-2 border-zinc-600 hover:border-zinc-500 transition-colors">
					<CardContent className="p-5 text-center">
						<span className="text-base font-medium">{ageRange}</span>
					</CardContent>
				</Card>

				<Card className="bg-transparent border-2 border-zinc-600 hover:border-zinc-500 transition-colors">
					<CardContent className="p-5 text-center">
						<span className="text-base font-medium">
							{quizCount} quizz lancés
						</span>
					</CardContent>
				</Card>

				<Card className="bg-transparent border-2 border-zinc-600 hover:border-zinc-500 transition-colors">
					<CardContent className="p-5 text-center">
						<span className="text-base font-medium">
							{trophyCount} trophées obtenus
						</span>
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
