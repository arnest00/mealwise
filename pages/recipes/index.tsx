import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { getAllRecipes } from '../../services/dbService';

import IRecipe from '../../interfaces/IRecipe';
import Layout from '../../components/organisms/Layout';
import RecipeBookCategory from '../../components/organisms/RecipeBookCategory';

interface RecipeBook {
  breakfast: IRecipe[],
  lunch: IRecipe[],
  dinner: IRecipe[],
}

const RecipesPage: NextPage = () => {
  const [ recipes, setRecipes ] = useState<RecipeBook>();

  useEffect(() => {
    const getAndSetData = async () => {
      try {
        const allRecipes = await getAllRecipes();

        const breakfastRecipes = allRecipes.filter((recipe: IRecipe) => recipe.category === 'Breakfast');
        const lunchRecipes = allRecipes.filter((recipe: IRecipe) => recipe.category === 'Lunch');
        const dinnerRecipes = allRecipes.filter((recipe: IRecipe) => recipe.category === 'Dinner');

        const newRecipesState = {
          breakfast: [...breakfastRecipes],
          lunch: [...lunchRecipes],
          dinner: [...dinnerRecipes],
        };
        
        setRecipes(newRecipesState);
      } catch (err) {};
    };

    getAndSetData();
  });

  return (
    <Layout>
      <h1 className="title text-align-center">Recipe Book</h1>

      <ul>
        <li>
          <Link href="/recipes/add">Add Recipe</Link>
        </li>
      </ul>

      {recipes && (
        <>
          <RecipeBookCategory
            categoryName='breakfast'
            categoryRecipes={recipes.breakfast}
          />

          <RecipeBookCategory
            categoryName='lunch'
            categoryRecipes={recipes.lunch}
          />

          <RecipeBookCategory
            categoryName='dinner'
            categoryRecipes={recipes.dinner}
          />
        </>
      )}
    </Layout>
  );
};

export default RecipesPage;
