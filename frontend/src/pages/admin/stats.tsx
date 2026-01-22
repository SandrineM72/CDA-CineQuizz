import Layout from "@/components/Layout";
import { AdminSidebar } from "@/components/admin/admin";
import StatsData from "@/components/admin/StatsData";

export default function StatsPage() {
  return (
    <Layout pageTitle="Statistiques - Admin">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8 overflow-auto bg-black">
          <div className="w-full">
            <h1 className="text-3xl font-bold text-white mb-6">
              Statistiques globales
            </h1>
            <StatsData />
          </div>
        </main>
      </div>
    </Layout>
  );
}
