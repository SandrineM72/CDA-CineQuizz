import Layout from "@/components/Layout";
import { SignupForm } from "@/components/signup/signup-form";

export default function Page() {
  return (
    <Layout pageTitle="Inscription">
      <div className="flex w-full items-center justify-center p-2 md:p-10">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    </Layout>
  );
}
