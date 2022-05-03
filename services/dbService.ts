import Dexie, { Table } from 'dexie';
import { nanoid } from 'nanoid';

import IRecipe from '../interfaces/IRecipe';

export class MealwiseDexie extends Dexie {
  recipes!: Table<IRecipe>;

  constructor() {
    super('mealwiseDB');
    this.version(1).stores({
      recipes: 'id, name, category, description',
    });
  }
}

export const db = new MealwiseDexie();

export const addRecipe = async (e: { currentTarget: any; }) => {
  const form = e.currentTarget;

  try {
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    const newRecipe = {
      id: nanoid(),
      name: formDataObject['recipe name'].toString(),
      description: formDataObject['recipe description (optional)'].toString(),
      category: formDataObject.category.toString(),
      ingredients: [],
    };

    await db.recipes.add(newRecipe);

    return {
      result: 'success',
      message: `Recipe "${newRecipe.name}" added!`,
    };
  } catch (err) {
    return {
      result: 'error',
      message: 'The recipe could not be added.',
    };
  }
};

export const getAllRecipes = async () => {
  const recipes = await db.recipes.toArray();

  return recipes;
};
