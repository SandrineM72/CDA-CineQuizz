import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const PersonalDataPolicy = () => {
    return(
        <Layout pageTitle="Protection des données">
            <div className="flex w-full items-center justify-center p-5 md:p-10">
                <div className="w-full max-w-sm">
                        <Card className="border-5 border-zinc-500 m-0 p-0 text-white">
                            <CardHeader className="bg-red-700 rounded-t-lg py-1 border-b-5 border-zinc-500">
                                <h1 className="text-2xl text-center rounded-t-md">Protection données</h1>
                            </CardHeader>
                            <CardContent className="p-0 m-0">
                                <h2 className="text-xl bg-red-700 p-3 my-5">Données personnelles (RGPD)</h2>
                                <p className="px-4 font-[arial]">Aucune donnée sensible n’est conservée ni exploitée; les informations saisies sont uniquement simulées pour démonstration.
                                Vous pouvez néanmoins demander la suppression de toute donnée test à l’adresse : cinequizz@gmail.com.</p>

                                <h2 className="text-xl bg-red-700 p-3 my-5">Cookies</h2>
                                <p className="px-4 font-[arial]"> Cookies techniques uniquement, utilisés pour la navigation et la démonstration. Vous pouvez les refuser via votre navigateur.</p>

                                <h2 className="text-xl bg-red-700 p-3 my-5">Liens hypertextes</h2>
                                <p className="px-4 font-[arial]">Les liens externes sont fournis à titre d’exemple ; les auteurs n’exercent aucun contrôle sur leur contenu.</p>

                                <h2 className="text-xl bg-red-700 p-3 my-5">Politique de confidentialité</h2>
                                <p className="px-4 font-[arial]">
                                    FetchMeHome respecte la vie privée de ses utilisateurs. Aucune donnée personnelle n’est collectée à des fins commerciales ou publicitaires.
                                    Les seules informations susceptibles d’être enregistrées sont celles saisies volontairement dans le cadre de la démonstration pédagogique du site.
                                    Ces données ne sont ni transmises à des tiers, ni utilisées à d’autres fins que la simulation de fonctionnalités.
                                    Vous pouvez demander la suppression de toute donnée test vous concernant en écrivant à contact@fetchmehome.org.
                                    Pour toute question relative à la confidentialité, contactez-nous à la même adresse.
                                </p>

                                <h2 className="text-xl bg-red-700 p-3 my-5">Médiation et litiges</h2>
                                <p className="px-4 mb-3 font-[arial]">En cas de question ou de réclamation, écrivez-nous à cinequizz@gmail.com.</p>
                            </CardContent>
                        </Card>                                  
                </div>
            </div>
        </Layout>
    );
};

export default PersonalDataPolicy;

