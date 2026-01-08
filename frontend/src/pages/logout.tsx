import { useRouter } from "next/router";
import { useLogoutMutation, useProfileQuery } from "@/graphql/generated/schema";
import Layout from "@/components/Layout";

export default function Logout() {
  const { data, refetch } = useProfileQuery({
    fetchPolicy: "cache-and-network",
  });

  const user = data?.me || null;
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      await refetch();
      router.push("/home");
    } catch (error) {
      console.error("La déconnexion a échoué", error);
    }
  };
  return (
    <Layout pageTitle="logout">
      <div className="flex w-full items-center justify-center p-2 md:p-10">
        <div className="w-full max-w-sm"></div>
      </div>
    </Layout>
  );
}
