/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../atoms/Button';

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

  useEffect(() => {
    setMeals(dayMeals);
  }, [dayMeals]);

  return (
    <section>
      <h3 className="bigger text-align-center">{dayName}</h3>

      {meals?.map((meal: { id: string, recipeId: string, recipeName: string }) => (
        <div key={meal.id}>
          <Link href={`/recipes/${meal.recipeId}`}>
            <a>{meal.recipeName}</a>
          </Link>
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
