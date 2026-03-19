import { expect, test } from "@playwright/test";
import { clearDB, connectDB, disconnectDB } from "./dbHelpers";
import { hash } from "argon2";
import { User } from "../../backend/src/entities/User";

test.beforeAll(connectDB);
test.beforeEach(clearDB);
test.afterAll(disconnectDB);

test('should be able to connect as admin with correct credentials', async ({ page }) => {
    const pseudo = "Admincq";
    const email = "admin@cyberquiz.com";
    const password = "Password123!";

    await User.create({
        pseudo,
        email, 
        hashedPassword: await hash(password),
        is_admin: true
    }).save();

    await page.goto('/login-page');

    await page.getByTestId('login-pseudo').fill(pseudo);
    await page.getByTestId('login-password').fill(password);

    await page.getByRole('button', { name: "Se connecter" }).click();
});

test('should not be able to connect with incorrect password', async ({ page }) => {
    const pseudo = "Admincq";
    const email = "admin@cyberquiz.com"; 
    const password = "Password123!";

    await User.create({
        pseudo,
        email,
        hashedPassword: await hash(password),
        is_admin: true
    }).save();

    await page.goto('/login-page');

    await page.getByTestId('login-pseudo').fill(pseudo);
    await page.getByTestId('login-password').fill(password + "g");

    await page.getByRole('button', { name: "Se connecter" }).click();
    

    await expect(page.getByTestId('login-error')).toBeVisible();

    const errorText = await page.getByTestId('login-error').textContent();
    expect(errorText).toBeTruthy();
});