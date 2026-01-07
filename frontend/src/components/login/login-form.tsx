import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { useState } from "react";


export default function LoginForm(){

    const router = useRouter();
      const [login, {loading: isSubmitting, error}] = useLoginMutation();
      const [pseudo, setPseudo] = useState("");
      const [password, setPassword] = useState("");
    
      const handleSubmit = async (e: React.FormEvent) => {
        try {
          e.preventDefault();
          const result = await login({
            variables: {
              data: {
                pseudo,
                password
              },
            },
          });
          alert("Connexion réussie !");
          router.push("/");
          } catch(err) {
            console.error(err);
          }
      }

    return(
        // Image inside the card
        <div className="max-w-sm max-auto justify-center px-4 py-8 space-y-6">
            <Card>
                <img 
                    src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto'
                    alt='Banner'
                    className='aspect-video h-70 rounded-t-xl object-cover'
                />
            </Card>

            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                    <FieldGroup>
                        <Field>
                        <FieldLabel htmlFor="pseudo">Pseudo</FieldLabel>
                            <Input id="pseudo" type="text" placeholder="Tom Cruise" required onChange={(e) => setPseudo(e.target.value)}/>
                        <FieldDescription className="text-xs">
                            Votre pseudo aparaîtra à l'écran.
                        </FieldDescription>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="password">Mot de passe</FieldLabel>
                                <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
                            </Field>
                        <FieldGroup>
                        <Field>
                            <Button type="submit" variant="outline" className="cursor-pointer mb-4">Connecter</Button>
                            <FieldDescription className="px-6 text-center">
                            Pas encore de compte ? <a href="#">S'inscrire</a>
                            </FieldDescription>
                        </Field>
                        </FieldGroup>
                        
                    </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}