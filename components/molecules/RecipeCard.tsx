import Button from '../atoms/Button';

interface RecipeCardProps {
  mealName: string,
  mealDescription: string
};

const RecipeCard = ({ mealName, mealDescription }: RecipeCardProps ) => {
  return (
    <article>
      <h3>{mealName}</h3>

      <p>
        {mealDescription}
      </p>

      <Button
        buttonType='button'
        buttonName='view recipe'
      />
    </article>
  );
};

export default RecipeCard;
