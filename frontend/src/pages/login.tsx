import Layout from "@/components/Layout";
import LoginForm from "@/components/login/login-form";

export default function LoginPage() {
  return (
    <Layout pageTitle="login">
      <div className="flex w-full items-center justify-center p-2 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
}
