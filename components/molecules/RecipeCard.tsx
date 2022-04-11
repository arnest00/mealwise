import IRecipe from '../../interfaces/IRecipe';
import Button from '../atoms/Button';

const RecipeCard = ({ name, description }: IRecipe ) => {
  return (
    <article>
      <h3 className="bigger">{name}</h3>

      <p>
        {description}
      </p>

      <Button
        buttonType='button'
        buttonName='view recipe'
        modifier='--link'
      />
    </article>
  );
};

export default RecipeCard;
