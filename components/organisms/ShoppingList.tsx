import ShoppingListItem from '../molecules/ShopplingListItem';

type ShoppingListProps = {
  shoppingList: { id: string, itemName: string }[] | []
};

const ShoppingList = ({ shoppingList }: ShoppingListProps) => (
  <article>
    {shoppingList.map((item) => (
      <ShoppingListItem
        key={item.id}
        id={item.id}
        name={item.itemName}
      />
    ))}
  </article>
);

export default ShoppingList;
