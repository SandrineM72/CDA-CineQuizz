import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useSignupMutation } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import Link from "next/link";

export function SignupForm() {
	const router = useRouter();
	const [signup, { loading: isSubmitting, error }] = useSignupMutation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [pseudo, setPseudo] = useState("");
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

			const result = await signup({
				variables: {
					data: {
						email,
						pseudo,
						password,
					},
				},
			});

			if (result.data && typeof result.data === "object" && "signup" in result.data) {
				router.push("/login-page");
			}
		} catch (err: any) {
			const message = 
				err.graphQLErrors?.[0]?.message ||
				err.networkError?.message ||
				err.errors?.[0]?.extensions.validationErrors?.[0]?.constraints.isStrongPassword ||
				err.message ||
				"Une erreur est survenue lors de l'inscription";
			setErrorMessage(message);
		}
	};

	return (
		<div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
			<div className="w-full max-w-md space-y-4">
				{/* Header image */}
				<div className="flex justify-center">
          			<div className="relative w-full h-54 overflow-hidden border-4 border-[#00bb0d]">
						<Image
							src="/illustrations/smartphone_lock_plant-green.png"
							alt="smartphone and plant"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>

				{/* Signup form */}
				<Card className="bg-black border-2 border-[#00bb0d] rounded-none">
					<CardContent className="px-4">
						<form onSubmit={handleSubmit}>
							<FieldGroup className="gap-4">
								{/* Email field */}
								<Field>
									<FieldLabel htmlFor="email" className="text-white text-base mb-2">
										Email
									</FieldLabel>
									<Input
										id="email"
										type="email"
										placeholder="ada.lovelace@example.com"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="bg-[#565656] border-[#00bb0d] border-2 text-white placeholder:text-[#a5a5a5] rounded-none h-12"
									/>
								</Field>

								{/* Password field with visibility toggle */}
								<Field>
									<FieldLabel htmlFor="password" className="text-white text-base mb-2">
										Mot de passe
									</FieldLabel>
									<div className="relative">
										<Input
											id="password"
											type={showPassword ? "text" : "password"}
											required
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className="bg-[#565656] border-[#00bb0d] border-2 text-white rounded-none h-12 pr-10"
										/>

										{/* Toggle password visibility */}
										<button
											type="button"
											onClick={() => setShowPassword((prev) => !prev)}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a5a5a5] hover:text-white"
											aria-label={
												showPassword
													? "Masquer le mot de passe"
													: "Afficher le mot de passe"
											}
										>
											{showPassword ? (
												<EyeOff className="w-5 h-5" />
											) : (
												<Eye className="w-5 h-5" />
											)}
										</button>
									</div>
								</Field>

								{/* Pseudo field */}
								<Field>
									<FieldLabel htmlFor="pseudo" className="text-white text-base mb-2">
										Pseudo
									</FieldLabel>
									<Input
										id="pseudo"
										type="text"
										placeholder="Ada Lovelace"
										required
										value={pseudo}
										onChange={(e) => setPseudo(e.target.value)}
										className="bg-[#565656] border-[#00bb0d] border-2 text-white placeholder:text-[#a5a5a5] rounded-none h-12"
									/>
								</Field>

								{/* Terms checkbox */}
								<div className="flex items-center space-x-2">
									<Checkbox
										id="terms"
										checked={acceptedTerms}
										onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
										className="border-2 border-[#00bb0d] data-[state=checked]:bg-[#00bb0d] data-[state=checked]:text-black"
									/>
									<Label
										htmlFor="terms"
										className="text-white text-sm cursor-pointer"
									>
										J'accepte les conditions d'utilisation
									</Label>
								</div>

								{/* Error message */}
								{(errorMessage || error) && (
									<p className="text-sm text-[#c00f00] text-center">
										{errorMessage || error?.message}
									</p>
								)}

								{/* Submit button */}
								<Button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-12 text-base font-semibold mt-4"
								>
									{isSubmitting ? "Inscription..." : "S'inscrire"}
								</Button>

								{/* Login link */}
								<FieldDescription className="px-6 text-center text-white">
									Déjà un compte ?{" "}
									<Link href="/login-page" className="text-[#00bb0d] hover:underline font-semibold">
										Se connecter
									</Link>
								</FieldDescription>
							</FieldGroup>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
