import Layout from "@/components/Layout";
import GamesTable from "@/components/admin/GamesTable";
import { AdminSidebar } from "@/components/admin/admin";
import { useRouter } from "next/router";



export default function GamesPage() {
  const router = useRouter();

  return (
    <Layout pageTitle="Quiz - Admin">
      <div className="flex">
        <AdminSidebar />
            <main className="flex-1 p-8 overflow-auto bg-black">
            <div className="w-full">
                <h1 className="text-3xl font-bold text-white mb-6">
                Gestion des quiz
                </h1>
                <GamesTable />
            </div>
            </main>
      </div>
    </Layout>
  );
}