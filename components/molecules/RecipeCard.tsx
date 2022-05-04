import { useRouter } from 'next/router';

import IRecipe from '../../interfaces/IRecipe';

import Button from '../atoms/Button';

const RecipeCard = ({ name, description, id }: IRecipe) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/recipes/${id}`);
  };

  return (
    <article className="card">
      <h3 className="bigger card__title">{name}</h3>

      <p className="card__description">
        {description}
      </p>

      <Button
        buttonType="button"
        buttonName="view recipe"
        modifier="--link"
        onClick={handleClick}
      />
    </article>
  );
};

export default RecipeCard;
