import { useState } from 'react';

import { deleteMiscListItem, editShoppingListMisc } from '../../services/dbService';

import EditableText from '../atoms/EditableText';
import IconButton from '../atoms/IconButton';

type ShoppingListProps = {
  name: string,
  id: string,
};

const ShoppingListItem = ({ name, id }: ShoppingListProps) => {
  const [editing, setEditing] = useState(false);

  const handleEditListItem = (itemId: string, editedValue: string) => {
    editShoppingListMisc(itemId, editedValue);
    setEditing(false);
  };

  const handleStartEditing = () => {
    setEditing(true);
  };

  const handleDeleteListItem = (itemId: string) => {
    deleteMiscListItem(itemId);
  };

  return (
    <div className="obj-grid-end-two-buttons cmp-shopping-list-item">
      {!editing && (
        <div>
          <input type="checkbox" name={id} className="cmp-shopping-list-item__checkbox" />
          <label
            htmlFor={id}
            className="cmp-shopping-list-item__label"
          >
            {!editing && name}
          </label>
        </div>
      )}
      {editing && (
        <EditableText
          text={name}
          textId={id}
          setText={handleEditListItem}
        />
      )}
      {!editing && (
        <IconButton
          pencil
          onClick={handleStartEditing}
        />
      )}
      <IconButton
        minus
        onClick={() => handleDeleteListItem(id)}
      />
    </div>
  );
};

export default ShoppingListItem;
