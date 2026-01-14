import { Decade } from "../../entities/Decade";

export async function createDecades() {
  const decade80 = await Decade.create({ 
    name: "Années 80" 
  }).save();
  
  const decade90 = await Decade.create({ 
    name: "Années 90" 
  }).save();
  
  const decade2000 = await Decade.create({ 
    name: "Années 2000" 
  }).save();

  return {
    decade80,
    decade90,
    decade2000,
  };
}

