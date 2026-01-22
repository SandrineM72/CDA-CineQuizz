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

export default function LoginForm() {
  const router = useRouter();

  // GraphQL login mutation
  const [login, { loading: isSubmitting, error }] = useLoginMutation();

  // Form state
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  // UI state for password visibility
  const [showPassword, setShowPassword] = useState(false);

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
    } catch (err) {
 
      console.error(err);
    }
  };

  return (
    <div className="flex w-full items-start justify-center px-6 md:px-10">
      <div className="w-full max-w-md space-y-2">
        {/* Header image */}
        <div className="flex justify-center">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-sky-200">
              <Image
                src="/films/forest_gump_assis.png"
                alt="Character illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
        </div>

        {/* Login form */}
        <Card className="bg-black border-gray-700">
          <CardContent className="pt-2">
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                {/* Pseudo field */}
                <Field>
                  <FieldLabel htmlFor="pseudo" className="text-white">
                    Username
                  </FieldLabel>
                  <Input
                    id="pseudo"
                    type="text"
                    placeholder="Tom Cruise"
                    required
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                    className="bg-transparent border-white text-white placeholder:text-gray-400"
                  />
                  <FieldDescription className="text-xs text-gray-400">
                    Your username will be displayed on screen.
                  </FieldDescription>
                </Field>

                {/* Password field with visibility toggle */}
                <Field>
                  <FieldLabel htmlFor="password" className="text-white">
                    Password
                  </FieldLabel>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-transparent border-white text-white pr-10"
                    />

                    {/* Toggle password visibility */}
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
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

                <FieldGroup>
                  <Field>
                    <Button
                      type="submit"
                      variant="outline"
                      className="cursor-pointer mb-4 w-full border-white text-white hover:bg-white hover:text-black"
                    >
                      Se connecter
                    </Button>
                    <FieldDescription className="px-6 text-center text-gray-400">
                      Pas encore de compte ?{" "}
                      <a href={"/signup"} className="text-white hover:underline">
                        S'inscrire
                      </a>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
                {/* Error message */}
                {error && (
                  <p className="text-sm text-red-400 text-center">
                    {error.message}
                  </p>
                )}



              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
  }

