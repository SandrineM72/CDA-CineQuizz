import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSignupMutation } from "@/graphql/generated/schema";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const [signup, { loading: isSubmitting, error }] = useSignupMutation();
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [age_range, setAgeRange] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const result = await signup({
        variables: {
          data: {
            email,
            pseudo,
            password,
            age_range,
          },
        },
      });
      alert("Inscription réussie !");
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Créez votre compte</CardTitle>
        <CardDescription>Entrez vos informations pour créer votre compte</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FieldDescription className="text-xs">
                Nous utiliserons cet email pour vous contacter, nous ne le partagerons pas.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="pseudo">Pseudo</FieldLabel>
              <Input
                id="pseudo"
                type="text"
                placeholder="Tom Cruise"
                required
                onChange={(e) => setPseudo(e.target.value)}
              />
              <FieldDescription className="text-xs">
                Votre pseudo aparaîtra à l'écran.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel>Tranche d'âge</FieldLabel>
              <RadioGroup
                defaultValue="moins_12"
                className="flex gap-4"
                onValueChange={(val) => setAgeRange(val)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="moins_12" id="moins_12" />
                  <Label htmlFor="moins_12">Moins de 12 ans</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="12_16" id="12_16" />
                  <Label htmlFor="12_16">12-16 ans</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="plus_16" id="plus_16" />
                  <Label htmlFor="plus_16">Plus de 16 ans</Label>
                </div>
              </RadioGroup>
              <FieldDescription className="text-xs">
                Merci de renseigner votre tranche d'âge. Cette information est utilisée pour vous
                proposer des films correspondant à votre âge.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Mot de passe</FieldLabel>
              <Input
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FieldDescription className="text-xs">
                Le mot de passe doit contenir un minimum de 8 caractères, dont une minuscule, une
                majuscule, un chiffre et un caractère spécial.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" variant="outline" className="cursor-pointer mb-4">
                  Créer compte
                </Button>
                <FieldDescription className="px-6 text-center">
                  Avez-vous déjà un compte ? <a href="#">Connexion</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
