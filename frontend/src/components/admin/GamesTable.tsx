import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAllQuizzesQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/navigation";

export default function GamesTable() {
  const router = useRouter();
  const { data, loading, error } = useAllQuizzesQuery();

  if (loading) {
    return (
      <Card className="bg-gray-900 border-gray-700">
        <CardContent className="p-8">
          <p className="text-white text-center">Chargement des quiz...</p>
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


  const quizzes = data?.allQuizzes || []; // on met un tableau vide pour utiliser la prop length malgré tout
  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Liste des quiz ({quizzes.length} quiz)</CardTitle>
        <CardDescription className="text-gray-400">
          Cliquer sur un quiz pour accéder à ses détails
        </CardDescription>
      </CardHeader>
      <CardContent>
        {quizzes.length === 0 ? <h2 className="text-2xl text-white">Aucun quiz actuellement</h2> : 
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700 bg-gray-800">
              <TableHead className="text-gray-300 border-2 text-center border-gray-400">Titre</TableHead>
              <TableHead className="text-gray-300 border-2 text-center border-gray-400">Description</TableHead>
              <TableHead className="text-gray-300 text-center border-2 border-gray-400">Tranche d'âge</TableHead>
              <TableHead className="text-gray-300 text-center border-2 border-gray-400">Limite</TableHead>
              <TableHead className="text-gray-300 text-center border-2 border-gray-400">Public</TableHead>
              <TableHead className="text-gray-300 text-center border-2 border-gray-400">Brouillon</TableHead>
              <TableHead className="text-gray-300 text-center border-2 border-gray-400">Categorie</TableHead>
              <TableHead className="text-gray-300 text-center border-2 border-gray-400">Décennie</TableHead>
              <TableHead className="text-gray-300 text-center border-2 border-gray-400">Questions</TableHead>
              <TableHead className="text-gray-300 text-center border-2 border-gray-400">Likes</TableHead>

              {/* <TableHead className="text-gray-300 text-center" colSpan={2}>Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {quizzes.map((quiz,index) => (
              <TableRow key={quiz.id+index} className="border-gray-700 font-[Arial] hover:bg-gray-600 cursor-pointer" onClick={() => router.push(`/admin/games/${quiz.id}`)}>
                <TableCell className="text-gray-300 font-medium p-5 border-2 border-gray-500">{quiz.title}</TableCell>
                <TableCell className="text-gray-300 font-medium p-5 border-2 border-gray-500">{quiz.description}</TableCell>
                <TableCell className="text-gray-300 text-right p-5 border-2 border-gray-500">{quiz.age_range}</TableCell>
                <TableCell className="text-gray-300 text-right p-5 border-2 border-gray-500">{quiz.time_limit}</TableCell>
                <TableCell className="text-gray-300 text-right p-5 border-2 border-gray-500">{quiz.is_public ? "oui" : "non"}</TableCell>
                <TableCell className="text-gray-300 text-right p-5 border-2 border-gray-500">{quiz.is_draft ? "oui" : "non"}</TableCell>
                <TableCell className="text-gray-300 text-right p-5 border-2 border-gray-500">{quiz.category.name}</TableCell>
                <TableCell className="text-gray-300 text-right p-5 border-2 border-gray-500">{quiz.decade.name}</TableCell>
                <TableCell className="text-gray-300 text-right p-5 border-2 border-gray-500">{quiz.questions.length}</TableCell>
                <TableCell className="text-gray-300 text-right p-5 border-2 border-gray-500">{quiz.liked_by.length}</TableCell>
              </TableRow>              
            ))}
          </TableBody>
        </Table>
        }
      </CardContent>
    </Card>
  );
}