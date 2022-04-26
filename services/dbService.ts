import Dexie from 'dexie';
import { nanoid } from 'nanoid';

export const db = new Dexie('mealwiseDB');

db.version(1).stores({
  recipes: 'id, name, category, description'
});

export const addRecipe = async (e: { preventDefault: () => void; currentTarget: any; }) => {
  e.preventDefault();
  
  const form = e.currentTarget;
  
  try {
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    const newRecipe = {
      id: nanoid(),
      name: formDataObject['recipe name'],
      description: formDataObject['recipe description (optional)'],
      category: formDataObject['category'],
    };

    await db.recipes.add(newRecipe);

    return {
      message: `Recipe "${newRecipe.name}" added!`,
    }
  } catch (err) {
    return {
      message: 'The recipe could not be added.',
    }
  };
};
