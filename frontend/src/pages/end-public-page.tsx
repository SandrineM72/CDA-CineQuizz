// biome-ignore assist/source/organizeImports: <explanation>
import Layout from "@/components/Layout";
import EndPage from "@/components/user/end";

export default function Home() {
  return (
    <Layout pageTitle="Accueil">
      <div className="flex w-full items-center justify-center p-2 md:p-10">
        <div className="w-full max-w-sm">
          <EndPage />
        </div>
      </div>
    </Layout>
  );
}
