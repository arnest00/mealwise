import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import IRecipe from '../../interfaces/IRecipe';
import IRecipeBook from '../../interfaces/IRecipeBook';
import { getAllRecipes } from '../../services/dbService';

import Button from '../../components/atoms/Button';
import Layout from '../../components/organisms/Layout';
import RecipeBookCategory from '../../components/organisms/RecipeBookCategory';

const RecipesPage: NextPage = () => {
  const [recipes, setRecipes] = useState<IRecipeBook>();
  const router = useRouter();

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
      } catch (err) {
        setRecipes({
          breakfast: [],
          lunch: [],
          dinner: [],
        });
      }
    };

    getAndSetData();
  });

  const handleNavigateToRecipeForm = () => {
    router.push('/recipes/add');
  };

  return (
    <Layout>
      <h1 className="title text-align-center">Recipe Book</h1>

      <Button
        buttonType="button"
        buttonName="add recipe"
        onClick={handleNavigateToRecipeForm}
      />

      {recipes && (
        <>
          <RecipeBookCategory
            categoryName="breakfast"
            categoryRecipes={recipes.breakfast}
          />

          <RecipeBookCategory
            categoryName="lunch"
            categoryRecipes={recipes.lunch}
          />

          <RecipeBookCategory
            categoryName="dinner"
            categoryRecipes={recipes.dinner}
          />
        </>
      )}
    </Layout>
  );
};

export default RecipesPage;
