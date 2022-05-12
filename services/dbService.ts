import Dexie, { Table } from 'dexie';
import { nanoid } from 'nanoid';

import IFormData from '../interfaces/IFormData';
import IIngredient from '../interfaces/IIngredient';
import IMealPlan from '../interfaces/IMealPlan';
import IRecipe from '../interfaces/IRecipe';

export class MealwiseDexie extends Dexie {
  recipes!: Table<IRecipe>;

  shoppingDay!: Table;

  mealPlan!:Table<IMealPlan>;

  constructor() {
    super('mealwiseDB');
    this.version(1).stores({
      recipes: 'id',
      shoppingDay: 'id',
      mealPlan: 'id',
    });
  }
}

export const db = new MealwiseDexie();

// recipes
export const addRecipe = async (formData: IFormData, ingredientsList: IIngredient[]) => {
  try {
    const newRecipe = {
      id: nanoid(),
      name: formData.name,
      description: formData.description,
      link: formData.link,
      category: formData.category,
      servings: formData.servings,
      ingredients: [...ingredientsList],
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

export const getRecipeById = async (id: string) => {
  const recipe = await db.recipes
    .where('id')
    .equals(id)
    .toArray();

  return recipe[0];
};

// shoppingDay
export const selectShoppingDay = async (day: string) => {
  const previousDay = db.shoppingDay
    .where('id')
    .equals(1);

  if (previousDay) await db.shoppingDay.delete(1);

  await db.shoppingDay
    .add({ id: 1, day });
};

export const getShoppingDay = async () => {
  const chosenDay = await db.shoppingDay
    .where('id')
    .equals(1)
    .toArray();

  if (!chosenDay[0]) return '';

  return chosenDay[0].day;
};

// mealPlan
export const createMealPlan = async () => {
  const previousMealPlan = await db.mealPlan
    .where('id')
    .equals(1)
    .toArray();

  if (!previousMealPlan[0]) {
    await db.mealPlan.add({
      id: 1,
      meals: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
      },
    });
  }
};
