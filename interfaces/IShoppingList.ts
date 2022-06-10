export default interface IShoppingList {
  id: number,
  items: { id: string, itemName: string }[] | [],
  misc: { id: string, itemName: string }[] | [],
}
