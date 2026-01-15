import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useUsersQuery } from "@/graphql/generated/schema";
import { Image } from "lucide-react";

export default function UsersTable() {
  const { data, loading, error } = useUsersQuery();

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
          <p className="text-red-500 text-center">
            Erreur : {error.message}
          </p>
        </CardContent>
      </Card>
    );
  }

  const users = data?.users || [];

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Liste des utilisateurs</CardTitle>
        <CardDescription className="text-gray-400">
          Gérez les utilisateurs de la plateforme ({users.length} utilisateur{users.length > 1 ? 's' : ''})
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
              <TableHead className="text-gray-300">Tranche d'âge</TableHead>
              <TableHead className="text-gray-300">Rôle</TableHead>
              <TableHead className="text-gray-300 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
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
                <TableCell className="text-white font-medium">{user.pseudo}</TableCell>
                <TableCell className="text-gray-400">{user.email}</TableCell>
                <TableCell className="text-gray-300">
                  {user.age_range.replace(/_/g, " ")}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.is_admin
                        ? "bg-purple-900 text-purple-300"
                        : "bg-blue-900 text-blue-300"
                    }`}
                  >
                    {user.is_admin ? "Admin" : "Utilisateur"}
                  </span>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm" className="text-white">
                    Modifier
                  </Button>
                  <Button variant="destructive" size="sm">
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}