import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/graphql/generated/schema";

export default function LoginForm() {
  const router = useRouter();
  const [login, { loading: isSubmitting, error }] = useLoginMutation();
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const result = await login({
        variables: {
          data: {
            pseudo,
            password,
          },
        },
      });
      alert("Connexion réussie !");
      router.push("/connected-user-page");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex w-full items-start justify-center px-6 md:px-10">
      <div className="w-full max-w-md space-y-2">
        <div className="flex justify-center">
          <div className="relative w-full rounded-2xl overflow-hidden bg-sky-200">
            <img
              src="/forest_gump_assis.png"
              alt="Personnage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Formulaire de connexion */}

        <Card className="bg-black border-gray-700">
          <CardContent className="pt-2">
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="pseudo" className="text-white">
                    Pseudo
                  </FieldLabel>
                  <Input
                    id="pseudo"
                    type="text"
                    placeholder="Tom Cruise"
                    required
                    onChange={(e) => setPseudo(e.target.value)}
                    className="bg-transparent border-white text-white placeholder:text-gray-400"
                  />
                  <FieldDescription className="text-xs text-gray-400">
                    Votre pseudo aparaîtra à l'écran.
                  </FieldDescription>
                </Field>

                <Field>
                  <FieldLabel htmlFor="password" className="text-white">
                    Mot de passe
                  </FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent border-white text-white"
                  />
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
                      <a href="#" className="text-white hover:underline">
                        S'inscrire
                      </a>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
