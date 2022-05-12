import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import IRecipe from '../../interfaces/IRecipe';
import { getAllRecipes } from '../../services/dbService';

import MealsList from '../../components/molecules/MealsList';

import Layout from '../../components/organisms/Layout';

interface MealBook {
  meals: IRecipe[],
}

const AddMealPage: NextPage = () => {
  const [meals, setMeals] = useState<MealBook>();
  const router = useRouter();
  const { id, day } = router.query;

  useEffect(() => {
    const getAndSetData = async () => {
      try {
        const allMeals = await getAllRecipes();

        const newMealsState = {
          meals: [...allMeals],
        };

        setMeals(newMealsState);
      } catch (err) {
        setMeals({
          meals: [],
        });
      }
    };

    getAndSetData();
  });

  return (
    <Layout>
      <h1 className="title text-align-center">
        Add Meal to
        {' '}
        {day}
      </h1>

      {meals && (
        <MealsList
          meals={meals.meals}
          dayId={id}
        />
      )}
    </Layout>
  );
};

export default AddMealPage;
