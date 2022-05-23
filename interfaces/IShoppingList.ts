export default interface IShoppingList {
  id: number,
  items: { id: string, itemName: string }[] | []
}
