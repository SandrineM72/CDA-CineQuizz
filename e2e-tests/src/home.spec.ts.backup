import { test, expect } from "@playwright/test";
import { clearDB, connectDB, disconnectDB } from "./dbHelpers";

test.beforeAll(connectDB);
test.beforeEach(clearDB);
test.afterAll(disconnectDB);

test("not connected user should have burger menu with correct sections", async ({ page }) => {
    // Aller sur la page d'accueil
    await page.goto('/home-page');
    
    // Attendre que la page soit chargée
    await page.waitForLoadState('networkidle');
    
    // Faire une capture d'écran pour voir ce qui s'affiche
    await page.screenshot({ path: 'debug-homepage.png' });
    
    // Afficher le contenu de la page dans la console
    const content = await page.content();
    console.log(content);
    
    // Cliquer sur le bouton du menu burger
    await page.getByTestId("menu-burger-button").click();
    
    // Attendre que le menu soit visible
    await expect(page.getByTestId("menu-dropdown")).toBeVisible();
    
    // Vérifier que tous les éléments du menu visiteur sont présents
    await expect(page.getByTestId("menu-contacts")).toBeVisible();
    await expect(page.getByTestId("menu-contacts")).toHaveText("Contacts");
    
    await expect(page.getByTestId("menu-about")).toBeVisible();
    await expect(page.getByTestId("menu-about")).toHaveText("A propos");
    
    await expect(page.getByTestId("menu-personal-data")).toBeVisible();
    await expect(page.getByTestId("menu-personal-data")).toHaveText("Protection des données");
    
    await expect(page.getByTestId("menu-legal-notices")).toBeVisible();
    await expect(page.getByTestId("menu-legal-notices")).toHaveText("Mentions légales");
    
    await expect(page.getByTestId("menu-home")).toBeVisible();
    await expect(page.getByTestId("menu-home")).toHaveText("Retour accueil");
});