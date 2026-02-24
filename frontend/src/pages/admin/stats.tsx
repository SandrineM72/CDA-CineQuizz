import AdminLayout from "@/components/AdminLayout";
import AdminSidebar from "@/components/admin/AdminSidebar";
import StatsCards from "@/components/admin/StatsCards";

export default function StatsPage() {
	return (
		<AdminLayout pageTitle="Statistiques - Admin">
			<div className="flex">
				<AdminSidebar />
				<main className="flex-1 p-8 overflow-auto bg-black">
					<div className="w-full">
						<h1 className="text-3xl font-bold text-white mb-6">
							Statistiques globales
						</h1>
						<StatsCards />
					</div>
				</main>
			</div>
		</AdminLayout>
	);
}
