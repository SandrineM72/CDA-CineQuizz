import Layout from "@/components/Layout";
import { AdminSidebar } from "@/components/admin/admin";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useAllQuizzesQuery, useDeleteQuizzMutation, useQuizQuery } from "@/graphql/generated/schema";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/router";

export default function GamePage() {
    const router= useRouter();
    const id = Number(router.query.id);

    const [deleteQuizz, {loading: isLoading, error }] = useDeleteQuizzMutation();
    
    const {refetch} = useAllQuizzesQuery(); // pour la mise à jour des quiz après suppression

    const {data, loading} = useQuizQuery({ variables: { id: id }, skip: !id });
    const quiz = data?.quiz || undefined;
    console.log(quiz);

    if(isNaN(id) || !quiz) {
        return (
            <Layout pageTitle={`Quiz n °${router.query.id} - Admin`}>
                <div className="flex">
                <AdminSidebar />
                    <main className="flex-1 p-8 bg-black text-white">
                        Quiz inexistant           
                    </main>
                </div>
            </Layout>
        );
    } else {
        const handleDeleteQuizz = async () => {
            console.log("cliqué !");
            const confirmation = confirm(`Voulez-vous supprimer le quizz "${quiz.title}"`);
            if(confirmation) {
                await deleteQuizz({variables : {id: quiz.id}});
                console.log("supprimé");
                await refetch(); // recharge les quizz dispo
                router.push("/admin/games");
            }
        };

        return (
            <Layout pageTitle={`Quiz n °${router.query.id} - Admin`}>
            <div className="flex">
                <AdminSidebar />
                    <main className="flex-1 p-8 bg-black text-white">
                        <Card className="w-full border-gray-700 bg-gray-900 p-5">
                            <h1 className="text-3xl font-bold mb-6">
                                Quiz n° {quiz.id} <Trash2 color="white" size={40} className="inline-block bg-red-600 p-1 rounded-4xl cursor-pointer hover:bg-red-400" onClick={handleDeleteQuizz} />
                            </h1>
                            <ul className="p-3">
                                <li className="m-3">Titre: {quiz.title}</li>
                                <li className="m-3">Description : {quiz.description}</li>
                                <li className="m-3">Tranche d'âge : {quiz.age_range}</li>
                                <li className="m-3">Catégorie : {quiz.category.name}</li>
                                <li className="m-3">Décennie : {quiz.decade.name}</li>
                                <li className="m-3">Limite de temps (secondes) : {quiz?.time_limit}</li>
                                <li className="m-3">Brouillon : {quiz.is_draft ? "oui" : "non" }</li>
                                <li className="m-3">Public : {quiz.is_public ? "oui" : "non" }</li>
                                <li className="m-3">
                                    Image : <img src={quiz.image} className="w-[400px]" />
                                </li>
                            </ul>

                            <h2 className="text-2xl bg-red-800 px-1 py-2 rounded-md text-center">Questions</h2>
                            {quiz.questions.map(question =>
                                <Card key={question.id}>
                                    <CardTitle className="p-3 bg-gray-500 text-white">Question {question.id} : {question.title}</CardTitle>
                                    <CardContent className="m-5">
                                        <ul className="list-decimal">  {/* attention ce n'est pas l'id du choice */}
                                        {question.choices.map(choice => 
                                            <li key={choice.id}>
                                                <span className={choice.is_correct ? "bg-green-400 p-1 rounded-md" : ""}>{choice.description}</span>
                                            </li>
                                            
                                        )}
                                        </ul>
                                    </CardContent> 
                                </Card>
                            )}
                        </Card>
                    </main>
            </div>
            </Layout>
        );
    }
}