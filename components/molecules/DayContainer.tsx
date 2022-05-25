/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { deletePlannedMeal } from '../../services/dbService';

import Button from '../atoms/Button';
import IconButton from '../atoms/IconButton';

type DayContainerProps = {
  dayId: number,
  dayName: string,
  dayMeals: { id: string, recipeId: string, recipeName: string }[] | undefined
};

const DayContainer = ({ dayName, dayId, dayMeals }: DayContainerProps) => {
  const [meals, setMeals] = useState<{ id: string, recipeId: string, recipeName: string }[]>();
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

  const handleDeletePlannedMeal = (dayOfMeal: number, id: string) => {
    deletePlannedMeal(dayOfMeal, id);
  };

  useEffect(() => {
    setMeals(dayMeals);
  }, [dayMeals]);

  return (
    <section>
      <h3 className="bigger text-align-center">{dayName}</h3>

      {meals?.map((meal: { id: string, recipeId: string, recipeName: string }) => (
        <div key={meal.id} className="grid-end-button">
          <Link href={`/recipes/${meal.recipeId}`}>
            <a>{meal.recipeName}</a>
          </Link>
          <IconButton
            minus
            onClick={() => handleDeletePlannedMeal(dayId, meal.id)}
          />
        </div>
      ))}

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
