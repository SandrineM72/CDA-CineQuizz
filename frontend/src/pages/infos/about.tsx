import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const About = () => {
    return(
        <Layout pageTitle="A propos">
            <div className="flex w-full items-center justify-center p-5 md:p-10">
                <div className="w-full max-w-sm">
                        <Card className="border-2 border-[#00bb0d] m-0 p-0 text-white bg-black rounded-none">
                            <CardHeader className="bg-[#565656] rounded-none py-3 border-b-4 border-[#00bb0d]">
                                <h1 className="text-2xl text-center">A propos</h1>
                            </CardHeader>
                            <CardContent className="p-0 m-0">
                                <p className="p-3">
                                    Envie de tester vos connaissances en cybersécurité et de mieux comprendre les enjeux du numérique : voici le leitmotiv de CyberQuiz !
                                </p>
                                <p className="p-3">
                                    Les quiz que nous proposons vous permettent de consolider vos bases en cybersécurité tout en développant des réflexes essentiels face aux menaces informatiques, le tout de manière ludique et accessible.
                                </p>
                                <p className="p-3 mb-7">
                                    Nous proposons différentes thématiques (phishing, mots de passe, protection des données, réseaux, bonnes pratiques, etc.) et niveaux de difficulté afin de renforcer progressivement vos compétences et d'élargir au maximum votre culture numérique et votre vigilance au quotidien.
                                </p>
                                <div className="flex flex-col items-center gap-3 pb-6">
                                    <p className="text-white text-center">Envie de jouer ?</p>
                                    <Link href="/signup-page" className="w-3/4">
                                        <button type="button" className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-12 text-base font-semibold flex items-center justify-center">
                                            S'inscrire
                                        </button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>                                  
                </div>
            </div>
        </Layout>
    );
};

export default About;
