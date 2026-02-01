import { Category } from "../../entities/Category";

export async function createCategories() {
  const comedieCategory = await Category.create({ 
    name: "Comédie" 
  }).save();
  
  const drameCategory = await Category.create({ 
    name: "Drame" 
  }).save();
  
  const actionCategory = await Category.create({ 
    name: "Action" 
  }).save();

  return {
    comedieCategory,
    drameCategory,
    actionCategory,
  };
}

