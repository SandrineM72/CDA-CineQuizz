import { hash } from "argon2";
import type { Page } from "@playwright/test";
import { createJWT, cookieName } from "../../backend/src/auth";
import { User } from "../../backend/src/entities/User";

type LoginUserInput = {
  email: string;
  pseudo: string;
  password: string;
  is_admin?: boolean;
};

// Fonction helper pour créer un utilisateur et le connecter directement sans passer par l'interface de connexion. Utile pour les tests qui nécessitent un utilisateur déjà connecté.

export async function loginAs(page: Page, { email, pseudo, password, is_admin }: LoginUserInput) {
  const user = await User.create({
    email,
    pseudo,
    hashedPassword: await hash(password),
    is_admin: is_admin ?? false,
    avatar: "https://i.pravatar.cc/150?img=1",
  }).save();

  const token = await createJWT(user);
  const baseUrl = process.env.BASE_URL || "http://localhost:3002";
  const cookieDomain = new URL(baseUrl).hostname;

  await page.context().addCookies([
    {
      name: cookieName,
      value: token,
      domain: cookieDomain,
      path: "/",
    },
  ]);

  return user;
}
