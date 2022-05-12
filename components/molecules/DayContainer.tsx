import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getRecipeById, getMeals } from '../../services/dbService';

import Button from '../atoms/Button';

type DayContainerProps = {
  dayId: number,
  dayName: string
};

const DayContainer = ({ dayName, dayId }: DayContainerProps) => {
  const dayIdAsString = dayId.toString();
  const [meals, setMeals] = useState<{ id: string, recipeName: string }[]>();
  const router = useRouter();

  const handleAddMeal = () => {
    router.push(
      {
        pathname: '/planner/add',
        query: { id: dayId, day: dayName },
      },
      '/planner/add',
    );
  };

  useEffect(() => {
    const getAndSetData = async () => {
      try {
        const dayMeals = await getMeals(dayIdAsString);
        const newMealsState = await Promise.all(dayMeals.map(async (meal) => {
          const recipe = await getRecipeById(meal.recipeId);

          return { id: meal.id, recipeName: recipe.name };
        }));

        setMeals(newMealsState);
      } catch (err) {
        setMeals([]);
      }
    };

    getAndSetData();
  }, [dayIdAsString]);

  return (
    <section>
      <h3 className="bigger text-align-center">{dayName}</h3>

      <ul>
        {meals && meals.map((meal: { id: string, recipeName: string }) => (
          <li key={meal.id}>{meal.recipeName}</li>
        ))}
      </ul>

      <Button
        buttonType="button"
        buttonName="add meal"
        modifier="--link"
        onClick={handleAddMeal}
      />
    </section>
  );
};

export default DayContainer;
