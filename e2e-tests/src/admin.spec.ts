import { expect, test } from "@playwright/test";
import { clearDB, connectDB, disconnectDB } from "./dbHelpers";
import { hash } from "argon2";
import { User } from "../../backend/src/entities/User";

test.beforeAll(connectDB);
test.beforeEach(clearDB);
test.afterAll(disconnectDB);

test('admin user should be redirected to admin page after login', async ({ page }) => {
    const pseudo = "Admincq";
    const email = "admin@cyberquiz.com";
    const password = "Password123!";

    await User.create({
        pseudo,
        email,
        hashedPassword: await hash(password),
        is_admin: true,
        avatar: "https://i.pravatar.cc/150?img=1"
    }).save();

    await page.goto('/login-page');
    await page.waitForLoadState('networkidle');

    // Gérer l'alert qui s'affiche après connexion
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    await page.getByTestId('login-pseudo').fill(pseudo);
    await page.getByTestId('login-password').fill(password);
    await page.getByRole('button', { name: "Se connecter" }).click();

    // Vérifier la redirection vers la page admin
    await expect(page).toHaveURL('http://localhost:3002/admin', { timeout: 10000 });
    await expect(page.getByText("Bienvenue sur l'écran de l'administration CyberQuiz !")).toBeVisible();
});