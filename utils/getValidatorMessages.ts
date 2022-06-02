import { errorMessages } from '../context/ValidatorContext';

const startsWithANumber = (ingredient: string) => {
  const regex = /^(\d)+[ ]?/g;
  const errorMessage = errorMessages.START_NUMBER;

  const isMatch = regex.test(ingredient);

  if (isMatch) return null;
  return errorMessage;
};

const getValidatorMessages = (ingredients: string[]) => {
  const errors = ingredients.map((ingredient) => {
    if (!ingredient) return null;
    return startsWithANumber(ingredient);
  });

  return Array.from(new Set(errors));
};

export default getValidatorMessages;
