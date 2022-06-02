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
        <p key={error} className="smaller bad-job">{error}</p>
      ))}
    </div>
  );
};

export default Validator;
