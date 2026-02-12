import { Theme } from "../../entities/Theme";

export async function createThemes() {
  const phishingTheme = await Theme.create({ 
    name: "Phishing" 
  }).save();
  
  const passwordTheme = await Theme.create({ 
    name: "Mots de passe" 
  }).save();
  
  const wifiTheme = await Theme.create({ 
    name: "Réseaux WiFi publics" 
  }).save();

  return {
    phishingTheme,
    passwordTheme,
    wifiTheme,
  };
}
