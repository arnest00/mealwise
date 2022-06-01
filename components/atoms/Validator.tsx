import getValidatorMessages from '../../utils/getValidatorMessages';

type ValidatorProps = {
  ingredientsList: {
    id: string,
    content: string,
  }[],
};

const Validator = ({ ingredientsList }: ValidatorProps) => {
  const ingredients = ingredientsList.map((ingredient) => ingredient.content);
  const errors = getValidatorMessages(ingredients);

  return (
    <div>
      {errors.map((error: string | null) => (
        <span key={error}>{error}</span>
      ))}
    </div>
  );
};

export default Validator;
