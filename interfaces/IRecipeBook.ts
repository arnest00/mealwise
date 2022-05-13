import IRecipe from './IRecipe';

export default interface RecipeBook {
  breakfast: IRecipe[],
  lunch: IRecipe[],
  dinner: IRecipe[],
}
