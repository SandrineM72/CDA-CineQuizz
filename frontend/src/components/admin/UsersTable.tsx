import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	useUsersQuery,
	useDeleteUserMutation,
} from "@/graphql/generated/schema";
import { useState } from "react";
import { useRouter } from "next/router";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function UsersTable() {
	const router = useRouter();
	const { data, loading, error, refetch } = useUsersQuery();
	const [deleteUser] = useDeleteUserMutation();
	const [deletingId, setDeletingId] = useState<number | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;

	const handleDelete = async (id: number, pseudo: string) => {
		if (
			!window.confirm(
				`Êtes-vous sûr de vouloir supprimer l'utilisateur "${pseudo}" ?`
			)
		) {
			return;
		}

		setDeletingId(id);
		try {
			await deleteUser({ variables: { id } });
			await refetch();
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Erreur inconnue lors de la suppression";
			alert(`Erreur lors de la suppression : ${errorMessage}`);
		} finally {
			setDeletingId(null);
		}
	};

	if (loading) {
		return (
			<Card className="bg-gray-900 border-gray-700">
				<CardContent className="p-8">
					<p className="text-white text-center">Chargement des utilisateurs...</p>
				</CardContent>
			</Card>
		);
	}

	if (error) {
		return (
			<Card className="bg-gray-900 border-gray-700">
				<CardContent className="p-8">
					<p className="text-red-500 text-center">Erreur : {error.message}</p>
				</CardContent>
			</Card>
		);
	}

	const users = data?.users || [];

	// Calculs pagination
	const totalPages = Math.ceil(users.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentUsers = users.slice(startIndex, endIndex);

	const goToPreviousPage = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
	};

	const goToNextPage = () => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	};

	return (
		<Card className="bg-gray-900 border-gray-700">
			<CardHeader>
				<CardTitle className="text-white">Liste des utilisateurs</CardTitle>
				<CardDescription className="text-gray-400">
					Gérez les utilisateurs de la plateforme ({users.length} utilisateur
					{users.length > 1 ? "s" : ""})
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableCaption className="text-gray-400">
						Liste de tous les utilisateurs enregistrés
					</TableCaption>
					<TableHeader>
						<TableRow className="border-gray-700 hover:bg-gray-800">
							<TableHead className="text-gray-300">Avatar</TableHead>
							<TableHead className="text-gray-300">Pseudo</TableHead>
							<TableHead className="text-gray-300">Email</TableHead>
							<TableHead className="text-gray-300">Rôle</TableHead>
							<TableHead className="text-gray-300 text-right pr-18">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{currentUsers.map((user, index) => (
							<TableRow key={user.id} className="border-gray-700 hover:bg-gray-800">
								<TableCell>
									{user.avatar ? (
										// biome-ignore lint/performance/noImgElement: <explanation>
										<img
											src={user.avatar}
											alt={user.pseudo}
											className="w-10 h-10 rounded-full object-cover"
										/>
									) : (
										<div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
											{user.pseudo[0]?.toUpperCase()}
										</div>
									)}
								</TableCell>
								<TableCell className="text-white font-medium">
									{user.pseudo}
								</TableCell>
								<TableCell className="text-gray-400">{user.email}</TableCell>
								<TableCell>
									<span
										className={`px-2 py-1 rounded-full text-xs ${
											user.is_admin
												? "bg-red-900 text-red-300"
												: "bg-gray-700 text-gray-300"
										}`}
									>
										{user.is_admin ? "Admin" : "Utilisateur"}
									</span>
								</TableCell>
								<TableCell className="text-right space-x-2">
									<Button
										variant="outline"
										size="sm"
										onClick={() => router.push(`/admin/users/${user.id}/edit`)}
										className="text-white border-gray-600 hover:bg-green-700"
									>
										Modifier
									</Button>
									<Button
										variant="destructive"
										size="sm"							className="text-white border-gray-600 hover:bg-red-900"
									
										onClick={() => handleDelete(user.id, user.pseudo)}
										disabled={deletingId === user.id}
									>
										{deletingId === user.id ? "Suppression..." : "Supprimer"}
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="flex items-center justify-center gap-4 mt-6">
						<Button
							variant="outline"
							size="sm"
							onClick={goToPreviousPage}
							disabled={currentPage === 1}
							className="text-white border-gray-600 hover:bg-gray-700 disabled:opacity-50"
						>
							<ChevronLeft className="w-4 h-4 mr-1" />
							Précédent
						</Button>
						<span className="text-white">
							Page {currentPage} sur {totalPages}
						</span>
						<Button
							variant="outline"
							size="sm"
							onClick={goToNextPage}
							disabled={currentPage === totalPages}
							className="text-white border-gray-600 hover:bg-gray-700 disabled:opacity-50"
						>
							Suivant
							<ChevronRight className="w-4 h-4 ml-1" />
						</Button>
					</div>
				)}
			</CardContent>		
		</Card>
	);
}
