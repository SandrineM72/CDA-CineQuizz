import Layout from "@/components/Layout";
import ResultContainer from "@/components/result/result-container";

export default function ResultPage() {
  return (
    <Layout pageTitle="Résultat">
      <div className="flex w-full items-center justify-center p-2 md:p-10">
        <div className="w-full max-w-sm">
          <ResultContainer />
        </div>
      </div>
    </Layout>
  );
}
