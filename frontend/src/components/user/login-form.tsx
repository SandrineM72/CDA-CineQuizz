import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/graphql/generated/schema";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();

  // GraphQL login mutation
  const [login, { loading: isSubmitting, error }] = useLoginMutation();

  // Form state
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  // UI state for password visibility
  const [showPassword, setShowPassword] = useState(false);
  
  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * Handle form submission
   * - Calls the login mutation
   * - Redirects the user on success
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await login({
        variables: {
          data: {
            pseudo,
            password,
          },
        },
      });
      
      // Vérifier si l'utilisateur est admin
      if (result.data?.login?.is_admin) {
        alert("Connexion réussie en tant qu'administrateur !");
        router.push("/admin");
      } else {
        alert("Connexion réussie en tant que joueur !");
        router.push("/connected-user-page");
      }
    } catch (err:any) {
      console.error(err);
      const message =
        err.graphQLErrors?.[0]?.message ||
        err.networkError?.message  ||
        err.errors?.[0]?.extensions.validationErrors?.[0]?.constraints.isStrongPassword ||
        err.message || "Une erreur est survenue lors de la connexion";
			setErrorMessage(message);
    }
  };

  return (
    <div className="flex w-full items-start justify-center px-6 py-2 md:px-10">
      <div className="w-full max-w-md space-y-4">
        {/* Header image */}
        <div className="flex justify-center">
          <div className="relative w-full aspect-[4/3] overflow-hidden border-4 border-[#00bb0d]">
            <Image
              src="/illustrations/keyboard_with_locks.jpg"
              alt="keyboard and locks"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Login form */}
        <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
          <CardContent className="px-4">
            <form onSubmit={handleSubmit}>
              <FieldGroup className="gap-4">
                {/* Pseudo field */}
                <Field>
                  <FieldLabel htmlFor="pseudo" className="text-white text-base mb-2">
                    Pseudo
                  </FieldLabel>
                  <Input
                    id="pseudo"
                    type="text"
                    placeholder="Ada Lovelace"
                    required
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                    className="bg-[#565656] border-[#00bb0d] border-2 text-white placeholder:text-[#a5a5a5] rounded-none h-12"
                  />
                </Field>

                {/* Password field with visibility toggle */}
                <Field>
                  <FieldLabel htmlFor="password" className="text-white text-base mb-2">
                    Mot de passe
                  </FieldLabel>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-[#565656] border-[#00bb0d] border-2 text-white rounded-none h-12 pr-10"
                    />

                    {/* Toggle password visibility */}
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a5a5a5] hover:text-white"
                      aria-label={
                        showPassword
                          ? "Masquer le mot de passe"
                          : "Afficher le mot de passe"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </Field>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white border-4 border-[#00bb0d] hover:bg-[#00bb0d] hover:text-black rounded-full h-12 text-base font-semibold mt-4"
                >
                  Se connecter
                </Button>

                {/* Error message */}
                {error && (
                  <p className="text-sm text-[#c00f00] text-center">
                    {errorMessage || error?.message}
                  </p>
                )}

                {/* Sign up link section */}
                <div className="text-center space-y-3">
                  <p className="text-white text-sm">
                    Pas encore de compte ?
                  </p>
                  <Link href="/signup" className="block">
                    <Button
                      type="button"
                      className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-12 text-base font-semibold"
                    >
                      S'inscrire
                    </Button>
                  </Link>
                </div>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
