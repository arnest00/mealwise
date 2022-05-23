type ShoppingListProps = {
  shoppingList: { id: string, itemName: string }[] | []
};

const ShoppingList = ({ shoppingList }: ShoppingListProps) => (
  <article>
    <ul>
      {shoppingList.map((item) => (
        <li key={item.id}>{item.itemName}</li>
      ))}
    </ul>
  </article>
);

export default ShoppingList;
