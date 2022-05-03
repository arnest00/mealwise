import IIngredient from './IIngredient';

export default interface IRecipe {
  id: string,
  name: string,
  description?: string,
  link?: string,
  category: string,
  servings?: number,
  ingredients: IIngredient[],
}
