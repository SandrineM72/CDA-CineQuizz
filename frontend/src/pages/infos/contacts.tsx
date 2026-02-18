import Layout from "@/components/Layout";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Contacts = () => {
  return(
    <Layout pageTitle="Contacts">
        <div className="flex w-full items-center justify-center p-5 md:p-10">
            <div className="w-full max-w-sm">
                <Card className="border-2 border-[#00bb0d] m-0 p-0 text-white bg-black rounded-none">
                    <CardHeader className="bg-[#565656] rounded-none py-3 border-b-4 border-[#00bb0d]">
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
