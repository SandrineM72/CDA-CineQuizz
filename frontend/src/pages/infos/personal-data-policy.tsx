import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PersonalDataPolicy = () => {
    return(
        <Layout pageTitle="Protection des données">
            <div className="flex w-full items-center justify-center p-5 md:p-10">
                <div className="w-full max-w-sm">
                        <Card className="border-2 border-[#00bb0d] m-0 p-0 text-white bg-black rounded-none">
                            <CardHeader className="bg-[#565656] rounded-none py-3 border-b-4 border-[#00bb0d]">
                                <h1 className="text-2xl text-center">Protection des données</h1>
                            </CardHeader>
                            <CardContent className="p-0 m-0">
                                <h2 className="text-xl bg-[#565656] p-3 my-5 mx-0">Données personnelles (RGPD)</h2>
                                <p className="px-4 text-white">
                                    Aucune donnée sensible n'est conservée ni exploitée. les informations saisies sont uniquement simulées pour démonstration.
                                    Vous pouvez néanmoins demander la suppression de toute donnée test à l'adresse : cyberquiz@gmail.com.
                                </p>

                                <h2 className="text-xl bg-[#565656] p-3 my-5 mx-0">Cookies</h2>
                                <p className="px-4 text-white">
                                    Cookies techniques uniquement, utilisés pour la navigation et la démonstration. Vous pouvez les refuser via votre navigateur.
                                </p>

                                <h2 className="text-xl bg-[#565656] p-3 my-5 mx-0">Liens hypertextes</h2>
                                <p className="px-4 text-white">
                                    Les liens externes sont fournis à titre d'exemple. Les auteurs n'exercent aucun contrôle sur leur contenu.
                                </p>

                                <h2 className="text-xl bg-[#565656] p-3 my-5 mx-0">Politique de confidentialité</h2>
                                <p className="px-4 text-white">
                                    HappyQuiz respecte la vie privée de ses utilisateurs. Aucune donnée personnelle n'est collectée à des fins commerciales ou publicitaires.
                                    Les seules informations susceptibles d'être enregistrées sont celles saisies volontairement dans le cadre de la démonstration pédagogique du site.
                                    Ces données ne sont ni transmises à des tiers, ni utilisées à d'autres fins que la simulation de fonctionnalités.
                                    Vous pouvez demander la suppression de toute donnée test vous concernant en écrivant à contact@fetchmehome.org.
                                    Pour toute question relative à la confidentialité, contactez-nous à la même adresse.
                                </p>

                                <h2 className="text-xl bg-[#565656] p-3 my-5 mx-0">Médiation et litiges</h2>
                                <p className="px-4 mb-3 text-white">
                                    En cas de question ou de réclamation, écrivez-nous à cyberquiz@gmail.com.
                                </p>
                            </CardContent>
                        </Card>                                  
                </div>
            </div>
        </Layout>
    );
};

export default PersonalDataPolicy;
