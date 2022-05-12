export default interface IMealPlan {
  id: number,
  meals: {
    [key: string | number]: { id: string, recipeId: string }[],
  }
}
