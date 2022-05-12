export default interface IMealPlan {
  id: number,
  meals: {
    [key: string | number]: { recipeId: string }[] | [],
  }
}
