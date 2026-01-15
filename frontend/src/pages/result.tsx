import Layout from "@/components/Layout";
import QuizResultForm from "@/components/resultQuizz/resultQuizz-form";



export default function resultPage(){
  return (
    <Layout pageTitle="Resultat">
      <div className="flex w-full items-center justify-center p-2 md:p-10">
        <div className="w-full max-w-sm">
                <QuizResultForm />
            </div>
        </div>
    </Layout>
  )
}