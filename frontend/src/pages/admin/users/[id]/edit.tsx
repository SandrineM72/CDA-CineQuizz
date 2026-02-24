import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	useUserQuery,
	useAdminUpdateUserMutation,
} from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent, useState, useEffect } from "react";

const EditUserPage = () => {
	const router = useRouter();
	const id = Number(router.query.id);

	const [updateUser] = useAdminUpdateUserMutation();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const {
		data: userData,
		loading,
		error,
		refetch,
	} = useUserQuery({ variables: { id: id }, skip: !id });
	const user = userData?.user || null;

	// State des champs formulaire - initialisés avec des valeurs par défaut
	const [pseudo, setPseudo] = useState("");
	const [email, setEmail] = useState("");
	const [avatar, setAvatar] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);

	// Mettre à jour les states quand les données de l'utilisateur sont chargées
	useEffect(() => {
		if (user) {
			setPseudo(user.pseudo);
			setEmail(user.email);
			setAvatar(user.avatar || "");
			setIsAdmin(user.is_admin);
		}
	}, [user]);

	// Test user - après le chargement
	if (isNaN(id) || (!loading && !user)) {
		return (
			<AdminLayout pageTitle={`Utilisateur n°${router.query.id} - Admin`}>
				<div className="flex">
					<AdminSidebar />
					<main className="flex-1 p-8 bg-black text-white">
						<h1 className="text-2xl">Utilisateur inexistant</h1>
					</main>
				</div>
			</AdminLayout>
		);
	}

	// Soumission formulaire
	const handleSubmit = async (e: FormEvent) => {
		try {
			e.preventDefault();
			console.log("Formulaire soumis");

			const data = {
				pseudo,
				email,
				avatar: avatar || undefined,
				is_admin: isAdmin,
			};

			await updateUser({
				variables: {
					id: id,
					data: data,
				},
			});

			await refetch();
			router.push("/admin/users");
		} catch (err: any) {
			const message =
				err.graphQLErrors?.[0]?.message ||
				err.networkError?.message ||
				err.message ||
				"Une erreur est survenue";
			setErrorMessage(message);
		}
	};

	// Chargement données
	if (loading) {
		return (
			<AdminLayout pageTitle={`Utilisateur n°${router.query.id} - Admin`}>
				<div className="flex">
					<AdminSidebar />
					<main className="flex-1 p-8 bg-black text-white">
						<p>Chargement des données...</p>
					</main>
				</div>
			</AdminLayout>
		);
	}

	if (errorMessage) {
		alert(errorMessage);
		router.push("/admin/users");
	}

	return (
		<AdminLayout pageTitle={`Édition Utilisateur n°${id} - Admin`}>
			<div className="flex">
				<AdminSidebar />
				<main className="flex-1 p-8 bg-black">
					<form onSubmit={handleSubmit}>
						<Card className="w-full border-gray-700 bg-gray-900 p-5">
							<CardContent>
								{/* Header avec titre et bouton retour */}
								<div className="flex justify-between items-center mb-5">
									<h2 className="text-2xl text-white">
										Édition de l'utilisateur {user.id}
									</h2>
									<Button
										type="button"
										onClick={() => router.push("/admin/users")}
										className="w-[200px] bg-[#00bb0d] border border-zinc-700 text-black text-xl hover:bg-green-500 cursor-pointer"
									>
										Retour à la liste
									</Button>
								</div>

								<Label className="text-white block mb-2">Pseudo</Label>
								<Input
									type="text"
									id="pseudo"
									placeholder="Pseudo de l'utilisateur"
									value={pseudo}
									onChange={(e) => setPseudo(e.currentTarget.value)}
									required
									className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:bg-zinc-300 focus:text-black focus:font-[arial] mb-5"
								/>

								<Label className="text-white block mb-2">Email</Label>
								<Input
									type="email"
									id="email"
									placeholder="Email de l'utilisateur"
									value={email}
									onChange={(e) => setEmail(e.currentTarget.value)}
									required
									className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:bg-zinc-300 focus:text-black focus:font-[arial] mb-8"
								/>

								<Label className="text-white block mb-2">
									Avatar (URL)
								</Label>
								<Input
									type="text"
									id="avatar"
									placeholder="URL de l'avatar (optionnel)"
									value={avatar}
									onChange={(e) => setAvatar(e.currentTarget.value)}
									className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:bg-zinc-300 focus:text-black focus:font-[arial] mb-8"
								/>

								{/* Aperçu de l'avatar */}
								{avatar && (
									<div className="mb-8">
										<Label className="text-white block mb-2">
											Aperçu de l'avatar
										</Label>
										<div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#00bb0d]">
											<img
												src={avatar}
												alt="Avatar preview"
												className="w-full h-full object-cover"
												onError={(e) => {
													e.currentTarget.style.display = "none";
												}}
											/>
										</div>
									</div>
								)}

								<div className="flex items-center space-x-2 mb-8">
									<Checkbox
										id="admin"
										checked={isAdmin}
										onCheckedChange={(checked) => setIsAdmin(checked === true)}
										className="text-white"
									/>
									<Label htmlFor="admin" className="text-white cursor-pointer">
										Administrateur
									</Label>
								</div>

								<Button
									type="submit"
									className="w-[200px] h-12 bg-[#00bb0d] border border-zinc-700 text-black text-xl hover:bg-green-500 cursor-pointer block mx-auto mt-6 flex items-center justify-center"
								>
									Valider
								</Button>
							</CardContent>
						</Card>
					</form>
				</main>
			</div>
		</AdminLayout>
	);
};

export default EditUserPage;
