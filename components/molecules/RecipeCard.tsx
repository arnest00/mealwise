import IRecipe from '../../interfaces/IRecipe';
import Button from '../atoms/Button';

const RecipeCard = ({ name, description }: IRecipe ) => {
  return (
    <article>
      <h3>{name}</h3>

      <p>
        {description}
      </p>

      <Button
        buttonType='button'
        buttonName='view recipe'
      />
    </article>
  );
};

export default RecipeCard;
