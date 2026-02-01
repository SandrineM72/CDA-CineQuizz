import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Trophy } from "lucide-react"

const About = () => {
    return(
        <Layout pageTitle="A propos">
            <div className="flex w-full items-center justify-center p-5 md:p-10">
                <div className="w-full max-w-sm">
                        <Card className="border-5 border-zinc-500 m-0 p-0 text-white">
                            <CardHeader className="bg-red-700 rounded-t-lg py-1 border-b-5 border-zinc-500">
                                <h1 className="text-2xl text-center rounded-t-md">A propos</h1>
                            </CardHeader>
                            <CardContent>
                                <p className="p-3">
                                    Envie de tester votre culture générale sur le cinéma et d'approfondir vos connaissances : voici le leitmotiv de CinéQuizz !
                                </p>
                                <p className="p-3">
                                    Les quizz que nous proposons permettent de consolider votre culture cinématographique tout en s'amusant.
                                </p>
                                <p className="p-3 mb-7">
                                    Nous proposons différentes catégories et décennies, afin de pouvoir élargir au maximum vos connaissances cinématographiques.
                                </p>
                                <p className="flex justify-end items-baseline">
                                    <Trophy size={30} className="mr-1"/> Envie de jouer ? 
                                    <Link href={"/signup"}>
                                        <button type="button" className="text-white bg-red-800 border-3 border-stone-600 ml-3 mb-5 px-1 py-1 rounded-lg left-0 bottom-0 text-sm cursor-pointer hover:bg-red-600">
                                            S'inscrire
                                        </button>
                                    </Link>
                                </p>
                            </CardContent>
                        </Card>                                  
                </div>
            </div>
        </Layout>
    );
};

export default About;
