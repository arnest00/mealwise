import Dexie, { Table } from 'dexie';
import { nanoid } from 'nanoid';

import IFormData from '../interfaces/IFormData';
import IIngredient from '../interfaces/IIngredient';
import IMealPlan from '../interfaces/IMealPlan';
import IPlanNotes from '../interfaces/IPlanNotes';
import IRecipe from '../interfaces/IRecipe';
import IShoppingList from '../interfaces/IShoppingList';

export class MealwiseDexie extends Dexie {
  recipes!: Table<IRecipe>;

  shoppingDay!: Table;

  mealPlan!:Table<IMealPlan>;

  shoppingList!: Table<IShoppingList>;

  planNotes!:Table<IPlanNotes>;

  constructor() {
    super('mealwiseDB');
    this.version(1).stores({
      recipes: 'id',
      shoppingDay: 'id',
      mealPlan: 'id',
      shoppingList: 'id',
      planNotes: 'id',
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

export const getRecipeNameById = async (id: string) => {
  const recipe = await db.recipes
    .where('id')
    .equals(id)
    .toArray();

  return recipe[0].name;
};

export const getRecipeIngredientsById = async (id: string) => {
  const recipe = await db.recipes
    .where('id')
    .equals(id)
    .toArray();

  const recipeIngredientsIds = recipe[0].ingredients.map((ingredient) => (
    { id: nanoid(), itemName: ingredient.content }
  ));

  return recipeIngredientsIds;
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
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
      },
    });
  }
};

export const addMealToPlan = async (dayId: string | string[] | undefined, mealId: string) => {
  const dayIdAsNum = Number(dayId);
  const currentMealPlan = await db.mealPlan
    .where('id')
    .equals(1)
    .toArray();
  const newMealPlan = { ...currentMealPlan[0].meals };
  const currentDayMeals = newMealPlan[dayIdAsNum];
  const chosenMeal = await getRecipeById(mealId);

  currentDayMeals.push({
    id: nanoid(),
    recipeId: chosenMeal.id,
  });

  await db.mealPlan.update(1, {
    id: 1,
    meals: newMealPlan,
  });
};

export const getAllPlannedMeals = async () => {
  const mealPlan = await db.mealPlan
    .where('id')
    .equals(1)
    .toArray();
  const mealPlanMeals = mealPlan[0].meals;
  const plannedMealsPerDay = Object.values(mealPlanMeals);

  const plannedMealsPerDayWithName = await Promise.all(plannedMealsPerDay.map(async (dayMeals) => {
    const dayMealsWithName = await Promise.all(dayMeals.map(async (plannedMeal) => {
      const recipeName = await getRecipeNameById(plannedMeal.recipeId);

      return { id: plannedMeal.id, recipeId: plannedMeal.recipeId, recipeName };
    }));

    return dayMealsWithName;
  }));

  return { ...plannedMealsPerDayWithName };
};

export const deletePlannedMeal = async (dayId: number, id: string) => {
  const mealPlan = await db.mealPlan
    .where('id')
    .equals(1)
    .toArray();

  const newPlannedMealsOfDay = [...mealPlan[0].meals[dayId]].filter(
    (meal) => meal.id !== id,
  );

  const newPlannedMeals = { ...mealPlan[0].meals };
  newPlannedMeals[dayId] = newPlannedMealsOfDay;

  await db.mealPlan.update(1, {
    id: 1,
    meals: newPlannedMeals,
  });
};

export const deleteMealPlan = async () => {
  await db.mealPlan.update(1, {
    id: 1,
    meals: {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
    },
  });
};

// shoppingList
export const createShoppingList = async (plannedMeals: {
  [key: number]: { id: string, recipeId: string, recipeName: string }[]
}) => {
  const previousShoppingList = db.shoppingList
    .where('id')
    .equals(1);
  if (previousShoppingList) await db.shoppingList.delete(1);
  const plannedMealsPerDay = Object.values(plannedMeals);

  const plannedMealsIngredients = await Promise.all(plannedMealsPerDay.map(async (dayMeals) => {
    const dayMealsIngredients = await Promise.all(dayMeals.map(async (plannedMeal) => {
      const recipeIngredients = await getRecipeIngredientsById(plannedMeal.recipeId);

      return recipeIngredients;
    }));

    const concatDayMealsIngredients: { id: string, itemName: string }[] = [];
    return concatDayMealsIngredients.concat(...dayMealsIngredients);
  }));

  const concatPlannedMealsIngredients: { id: string, itemName: string }[] = [];
  await db.shoppingList.add({
    id: 1,
    items: concatPlannedMealsIngredients.concat(...plannedMealsIngredients),
  });
};

export const getShoppingList = async () => {
  const shoppingList = await db.shoppingList
    .where('id')
    .equals(1)
    .toArray();
  const shoppingListItems = shoppingList[0].items;

  return shoppingListItems;
};

export const deleteShoppingListItem = async (id: string) => {
  const shoppingList = await db.shoppingList
    .where('id')
    .equals(1)
    .toArray();

  const newShoppingList = [...shoppingList[0].items].filter(
    (item) => item.id !== id,
  );

  await db.shoppingList.update(1, {
    id: 1,
    items: newShoppingList,
  });
};

export const editShoppingListItem = async (id: string, editedValue: string) => {
  const shoppingList = await db.shoppingList
    .where('id')
    .equals(1)
    .toArray();

  const newShoppingList = [...shoppingList[0].items].map((item) => {
    if (item.id === id) {
      return { ...item, itemName: editedValue };
    }

    return item;
  });

  await db.shoppingList.update(1, {
    id: 1,
    items: newShoppingList,
  });
};

// planNotes
export const createPlanNotes = async () => {
  const previousPlanNotes = await db.planNotes
    .where('id')
    .equals(1)
    .toArray();

  if (!previousPlanNotes[0]) {
    await db.planNotes.add({
      id: 1,
      notes: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
      },
    });
  }
};

export const getAllPlannerNotes = async () => {
  const plannerNotes = await db.planNotes
    .where('id')
    .equals(1)
    .toArray();

  return plannerNotes[0].notes;
};

export const addNoteToPlan = async (
  dayId: string | string[] | number | undefined,
  noteId: string,
  noteContent: string,
) => {
  const dayIdAsNum = Number(dayId);
  const currentPlanNotes = await db.planNotes
    .where('id')
    .equals(1)
    .toArray();
  const newPlanNotes = { ...currentPlanNotes[0].notes };
  const currentDayNotes = newPlanNotes[dayIdAsNum];

  currentDayNotes.push({
    id: noteId,
    content: noteContent,
  });

  await db.planNotes.update(1, {
    id: 1,
    notes: newPlanNotes,
  });
};

export const deletePlannerNote = async (dayId: number, id: string) => {
  const planNotes = await db.planNotes
    .where('id')
    .equals(1)
    .toArray();

  const newPlannerNotesOfTheDay = [...planNotes[0].notes[dayId]].filter(
    (note) => note.id !== id,
  );

  const newPlannerNotes = { ...planNotes[0].notes };
  newPlannerNotes[dayId] = newPlannerNotesOfTheDay;

  await db.planNotes.update(1, {
    id: 1,
    notes: newPlannerNotes,
  });
};

export const editPlannerNote = async (id: string, editedValue: string, dayId: number) => {
  const planNotes = await db.planNotes
    .where('id')
    .equals(1)
    .toArray();

  const newPlannerNotesOfTheDay = [...planNotes[0].notes[dayId]].map((note) => {
    if (note.id === id) {
      return { id, content: editedValue };
    }

    return note;
  });

  const newPlannerNotes = { ...planNotes[0].notes };
  newPlannerNotes[dayId] = newPlannerNotesOfTheDay;

  await db.planNotes.update(1, {
    id: 1,
    notes: newPlannerNotes,
  });
};

export const deletePlanNotes = async () => {
  await db.planNotes.update(1, {
    id: 1,
    notes: {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
    },
  });
};
