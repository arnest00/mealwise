const errorMessages = {
  START_NUMBER: 'An ingredient must begin with a number for quantity.',
};

const startsWithANumber = (ingredient: string) => {
  const regex = /^(\d)+[ ]?/g;
  const errorMessage = errorMessages.START_NUMBER;

  const isMatch = regex.test(ingredient);

  if (isMatch) return null;
  return errorMessage;
};

const getValidatorMessages = (ingredients: string[]) => {
  const errors = ingredients.map((ingredient) => startsWithANumber(ingredient));

  return Array.from(new Set(errors));
};

export default getValidatorMessages;
