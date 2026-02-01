import Layout from "@/components/Layout";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Contacts = () => {
  return(
    <Layout pageTitle="Contacts">
        <div className="flex w-full items-center justify-center p-5 md:p-10">
            <div className="w-full max-w-sm">
                <Card className="border-5 border-zinc-500 m-0 p-0 text-white">
                    <CardHeader className="bg-red-700 rounded-t-lg py-1 border-b-5 border-zinc-500">
                        <h1 className="text-2xl text-center">Contacts</h1>
                    </CardHeader>
                    <CardContent>
                        <ul className="py-3 px-5 list-disc">
                            <li>Un problème ?</li>
                            <li>Une question ?</li>
                            <li>Un avis ?</li>
                        </ul>
                        <p className="py-3">L’équipe de CyberQuiz vous répondra dans les plus brefs délais.</p>
                        <div className='py-3'>
                            <Link href="mailto: cyberquiz@gmail.com" className="flex justify-start gap-5 py-3">
                                <Button type="submit" variant="outline" className="cursor-pointer mb-4 w-full border-white text-white hover:bg-white hover:text-black">
                                    <Mail />
                                    <span>cyberquiz@gmail.com</span>    
                                </Button>
                            </Link>
                        </div>
                    </CardContent>    
                </Card>                                
            </div>
        </div>
    </Layout>
  );
};

export default Contacts;
