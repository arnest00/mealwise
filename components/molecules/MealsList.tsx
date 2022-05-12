/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';

import IRecipe from '../../interfaces/IRecipe';
import { addMealToPlan } from '../../services/dbService';

import IconButton from '../atoms/IconButton';

type MealsListProps = {
  dayId: string | string[] | undefined,
  meals: IRecipe[],
};

const MealsList = ({ dayId, meals }: MealsListProps) => {
  const router = useRouter();

  const handleClick = async (id: string | string[] | undefined, mealId: string) => {
    await addMealToPlan(id, mealId);

    router.push('/planner');
  };

  return (
    <>
      {meals.map((meal) => (
        <div key={meal.id} className="grid-end-button">
          <Link href={`/recipes/${meal.id}`}>
            <a>{meal.name}</a>
          </Link>

          <IconButton
            plus
            onClick={() => handleClick(dayId, meal.id)}
          />
        </div>
      ))}
    </>
  );
};

export default MealsList;
