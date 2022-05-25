type ShoppingListProps = {
  name: string,
  id: string,
};

const ShoppingListItem = ({ name, id }: ShoppingListProps) => (
  <div className="shopping-list-item">
    <input type="checkbox" name={id} className="shopping-list-item__checkbox" />
    <label htmlFor={id} className="shopping-list-item__label">{name}</label>
  </div>
);

export default ShoppingListItem;
