import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const LegalNotices = () => {
    return(
        <Layout pageTitle="Mentions légales">
            <div className="flex w-full items-center justify-center p-5 md:p-10">
                <div className="w-full max-w-sm">
                        <Card className="border-2 border-[#00bb0d] m-0 p-0 text-white bg-black rounded-none">
                            <CardHeader className="bg-[#565656] rounded-none py-3 border-b-4 border-[#00bb0d]">
                                <h1 className="text-2xl text-center">Mentions légales</h1>
                            </CardHeader>
                            <CardContent className="p-0 m-0">
                                <div className="p-2">
                                    <p className="mb-3">
                                        <span className="underline">Nom de l'entreprise</span> : CyberQuiz
                                    </p>  
                                    <p className="mb-3">
                                        <span className="underline">Forme juridique</span> : EURL
                                    </p>
                                    <p className="mb-3">
                                        <span className="underline">Adresse</span> : 30 rue du Paradis
                                    </p>
                                    <p className="mb-3">
                                        <span className="underline">Téléphone</span> : 01.23.45.67.89
                                    </p>
                                    <p className="mb-3">
                                        <span className="underline">E-mail</span> : <Link href="mailto:cyberquiz@gmail.com" className="cursor-pointer hover:underline">cyberquiz@gmail.com</Link>
                                    </p>  
                                    <p className="mb-3">
                                        <span className="underline">Numéro d'immatriculation RCS</span> : 123 456 789
                                    </p>
                                    <p className="mb-3">
                                        <span className="underline">Capital social</span> : 1000 €
                                    </p>  
                                </div>

                                <h2 className="text-xl #00bb0d p-3 mb-5">Hébergement</h2>
                                <div className="px-4 mb-7">
                                    <p>HAPPYQUIZ</p>
                                    <p>50 bd de la petite vitesse</p>
                                    <p>72000 Le Mans</p>
                                    <p>Tél. : 02 43 18 00 00</p>
                                </div>

                                <h2 className="text-xl #00bb0d p-3 mb-5">Contact</h2>
                                <div className="px-4 mb-7">
                                    <Link href="mailto: cyberquiz@gmail.com" className="cursor-pointer hover:underline">cyberquiz@gmail.com</Link>
                                </div>

                                <h2 className="text-xl #00bb0d p-3 mb-5">Propriété intellectuelle</h2>
                                <div className="px-4 mb-7">
                                    <p>
                                        Textes, code source et logos : propriété exclusive des auteurs du projet. Toute reproduction, adaptation ou diffusion, en tout ou partie, est interdite sans autorisation écrite préalable.
                                        Images : issues de banques libres de droits ; leur utilisation sur ce site est conforme aux licences libres de droits associées.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>                                  
                </div>
            </div>
        </Layout>
    );
};

export default LegalNotices;
