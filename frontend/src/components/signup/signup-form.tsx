import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye, EyeOff } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useSignupMutation } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

export function SignupForm() {
	const router = useRouter();
	const [signup, { loading: isSubmitting, error }] = useSignupMutation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [pseudo, setPseudo] = useState("");
	const [age_range, setAgeRange] = useState<"tous publics" | "-12" | "-16" | "">("");
	const [showPassword, setShowPassword] = useState(false);
	const [acceptedTerms, setAcceptedTerms] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		try {
			e.preventDefault();
			setErrorMessage(null);

			if (!acceptedTerms) {
				setErrorMessage("Vous devez accepter les conditions d'utilisation");
				return;
			}

			if (!age_range) {
				setErrorMessage("Veuillez sélectionner une tranche d'âge");
				return;
			}

			const result = await signup({
				variables: {
					data: {
						email,
						pseudo,
						password,
						age_range: age_range as "tous publics" | "-12" | "-16",
					},
				},
			});

			if (result.data && typeof result.data === "object" && "signup" in result.data) {
				router.push("/login");
			}
		} catch (err: any) {
			const message =
				err.graphQLErrors?.[0]?.message ||
				err.networkError?.message ||
				err.message ||
				"Une erreur est survenue lors de l'inscription";
			setErrorMessage(message);
		}
	};

	return (
		<div className="w-full max-w-sm mx-auto px-4 py-8 space-y-6">
			{/* Avatar Section */}
			<div className="flex justify-center">
				<Avatar className="h-32 w-32 bg-zinc-800 border border-white">
					<AvatarFallback className="text-white text-xl font-semibold">
						AVATAR
					</AvatarFallback>
				</Avatar>
			</div>

			{/* Signup Form */}
			<Card className="border-white">
				<CardContent className="p-6">
					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
						<Input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400 w-full"
						/>
						<div className="relative">
							<Input
								type={showPassword ? "text" : "password"}
								placeholder="Mot de passe"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400 w-full pr-10"
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
								aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
							>
								{showPassword ? (
									<EyeOff className="w-5 h-5" />
								) : (
									<Eye className="w-5 h-5" />
								)}
							</button>
						</div>
						<Input
							type="text"
							placeholder="Pseudo"
							value={pseudo}
							onChange={(e) => setPseudo(e.target.value)}
							required
							className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400 w-full"
						/>
						<Select
							value={age_range || undefined}
							onValueChange={(val) =>
								setAgeRange(val as "tous publics" | "-12" | "-16")
							}
						>
							<SelectTrigger className="bg-zinc-800 border-zinc-700 text-white w-full">
								<SelectValue placeholder="Tranche d'âge" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="tous publics">Tous publics</SelectItem>
								<SelectItem value="-12">Moins de 12 ans</SelectItem>
								<SelectItem value="-16">Entre 12 et 16 ans</SelectItem>
							</SelectContent>
						</Select>
						<div className="flex items-center space-x-2">
							<Checkbox
								id="terms"
								checked={acceptedTerms}
								onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
							/>
							<Label
								htmlFor="terms"
								className="text-white text-sm cursor-pointer"
							>
								J'accepte les conditions d'utilisation
							</Label>
						</div>
						{(errorMessage || error) && (
							<p className="text-sm text-red-400 text-center">
								{errorMessage || error?.message}
							</p>
						)}
						<Button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-zinc-800 border border-zinc-700 text-white font-bold hover:bg-zinc-700"
						>
							{isSubmitting ? "Inscription..." : "S'inscrire"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
