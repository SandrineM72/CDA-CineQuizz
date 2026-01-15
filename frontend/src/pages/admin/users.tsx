import Layout from "@/components/Layout";
import { AdminSidebar } from "@/components/admin/admin";
import UsersTable from "@/components/admin/UsersTable";

export default function UsersPage() {
  return (
    <Layout pageTitle="Utilisateurs - Admin">
      <div className="flex" 
      >
        <AdminSidebar />
            <main className="flex-1 p-8 overflow-auto bg-black">
            <div className="w-full">
                <h1 className="text-3xl font-bold text-white mb-6">
                Gestion des utilisateurs
                </h1>
                <UsersTable />
            </div>
            </main>
      </div>
    </Layout>
  );
}