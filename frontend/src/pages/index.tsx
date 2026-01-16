// biome-ignore assist/source/organizeImports: <explanation>
import Layout from "@/components/Layout";
import HomePage from "@/components/home/home";

export default function Home() {
  return (
    <Layout pageTitle="Accueil">
      <div className="flex w-full items-center justify-center p-2 md:p-10">
        <div className="w-full max-w-sm">
          <HomePage />
        </div>
      </div>
    </Layout>
  );
}
