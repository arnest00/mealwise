import { deleteShoppingListItem } from '../../services/dbService';

import IconButton from '../atoms/IconButton';

type ShoppingListProps = {
  name: string,
  id: string,
};

const ShoppingListItem = ({ name, id }: ShoppingListProps) => {
  const handleDeleteListItem = (itemId: string) => {
    deleteShoppingListItem(itemId);
  };

  return (
    <div className="grid-end-button shopping-list-item">
      <div>
        <input type="checkbox" name={id} className="shopping-list-item__checkbox" />
        <label htmlFor={id} className="shopping-list-item__label">{name}</label>
      </div>
      <IconButton
        minus
        onClick={() => handleDeleteListItem(id)}
      />
    </div>
  );
};

export default ShoppingListItem;
