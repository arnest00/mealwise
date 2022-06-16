import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import IRecipe from '../../interfaces/IRecipe';
import IRecipeBook from '../../interfaces/IRecipeBook';
import { getAllRecipes } from '../../services/dbService';

import PageHeader from '../../components/atoms/PageHeader';
import MealsList from '../../components/molecules/MealsList';
import Layout from '../../components/organisms/Layout';

const AddMealPage: NextPage = () => {
  const [meals, setMeals] = useState<IRecipeBook>();
  const router = useRouter();
  const { id, day } = router.query;

  useEffect(() => {
    const getAndSetData = async () => {
      try {
        const allRecipes = await getAllRecipes();

        const breakfastRecipes = allRecipes.filter((recipe: IRecipe) => recipe.category === 'Breakfast');
        const lunchRecipes = allRecipes.filter((recipe: IRecipe) => recipe.category === 'Lunch');
        const dinnerRecipes = allRecipes.filter((recipe: IRecipe) => recipe.category === 'Dinner');

        const newMealsState = {
          breakfast: [...breakfastRecipes],
          lunch: [...lunchRecipes],
          dinner: [...dinnerRecipes],
        };

        setMeals(newMealsState);
      } catch (err) {
        setMeals({
          breakfast: [],
          lunch: [],
          dinner: [],
        });
      }
    };

    getAndSetData();
  });

  return (
    <Layout>
      <PageHeader>
        <h1 className="section text-align-center">{`Add Meal to ${day}`}</h1>
      </PageHeader>

      <div className="obj-page-content">
        {meals && (
          <>
            <MealsList
              dayId={id}
              categoryName="Breakfast"
              meals={meals.breakfast}
            />

            <MealsList
              dayId={id}
              categoryName="Lunch"
              meals={meals.lunch}
            />

            <MealsList
              dayId={id}
              categoryName="Dinner"
              meals={meals.dinner}
            />
          </>
        )}
      </div>
    </Layout>
  );
};

export default AddMealPage;
