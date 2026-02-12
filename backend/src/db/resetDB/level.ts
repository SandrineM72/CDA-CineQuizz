import { Level } from "../../entities/Level";

export async function createLevels() {
  const beginnerLevel = await Level.create({ 
    name: "Débutant" 
  }).save();
  
  const advancedLevel = await Level.create({ 
    name: "Avancé" 
  }).save();
  
  const expertLevel = await Level.create({ 
    name: "Expert" 
  }).save();

  return {
    beginnerLevel,
    advancedLevel,
    expertLevel,
  };
}
