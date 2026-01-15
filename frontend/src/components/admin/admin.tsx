import Link from "next/link";
import { CircleUserRound, GamepadDirectional, Heart, ChartArea } from "lucide-react";
import { useRouter } from "next/router";

const items = [
  {
    title: "Utilisateurs",
    url: "/admin/users",
    icon: CircleUserRound,
  },
  {
    title: "Jeux",
    url: "/admin/games",
    icon: GamepadDirectional,
  },
  {
    title: "Retours",
    url: "/admin/feedback",
    icon: Heart,
  },
  {
    title: "Statistiques",
    url: "/admin/stats",
    icon: ChartArea,
  },
];

export function AdminSidebar() {
  const router = useRouter();
  
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white font-semibold">Administration</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {items.map((item) => {
            const isActive = router.pathname === item.url;
            return (
              <li key={item.title}>
                <Link
                  href={item.url}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default function AdminPage() {
  return (
    <div className="flex h-screen w-full">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-auto bg-black">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">
            Tableau de bord administrateur
          </h1>
          <p className="text-gray-400">
            Sélectionnez une section dans le menu latéral pour commencer.
          </p>
        </div>
      </main>
    </div>
  );
}