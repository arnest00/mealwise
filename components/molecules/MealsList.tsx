/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';

import IRecipe from '../../interfaces/IRecipe';
import { addMealToPlan } from '../../services/dbService';

import IconButton from '../atoms/IconButton';

type MealsListProps = {
  dayId: string | string[] | undefined,
  categoryName: string,
  meals: IRecipe[],
};

const MealsList = ({ dayId, categoryName, meals }: MealsListProps) => {
  const router = useRouter();

  const handleClick = async (id: string | string[] | undefined, mealId: string) => {
    await addMealToPlan(id, mealId);

    router.push('/planner');
  };

  return (
    <section>
      <h2 className="section">{categoryName}</h2>

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
    </section>
  );
};

export default MealsList;
