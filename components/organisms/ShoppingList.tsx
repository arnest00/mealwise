import {
  ChangeEvent, useEffect, useRef, useState,
} from 'react';
import { nanoid } from 'nanoid';

import { addShoppingListMisc } from '../../services/dbService';

import Button from '../atoms/Button';
import IconButton from '../atoms/IconButton';
import InputGroup from '../atoms/InputGroup';
import MiscListItem from '../molecules/MiscListItem';
import ShoppingListItem from '../molecules/ShopplingListItem';

type ShoppingListProps = {
  items: { id: string, itemName: string }[] | [],
  misc: { id: string, itemName: string }[] | [],
};

const ShoppingList = ({ items, misc }: ShoppingListProps) => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItemValue, setNewItemValue] = useState('');

  const handleAddMiscItem = () => {
    setIsAddingItem(true);
  };

  const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItemValue(e.currentTarget.value);
  };

  const handleAddShoppingListMisc = (id: string, content: string) => {
    addShoppingListMisc(id, content);
    setIsAddingItem(false);
    setNewItemValue('');
  };

  useEffect(() => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 250);
  }, [isAddingItem]);

  return (
    <article>
      {items.map((item) => (
        <ShoppingListItem
          key={item.id}
          id={item.id}
          name={item.itemName}
        />
      ))}

      <h2 className="section">Other Items</h2>

      <section>
        {misc.map((item) => (
          <MiscListItem
            key={item.id}
            id={item.id}
            name={item.itemName}
          />
        ))}

        {isAddingItem && (
          <div className="grid-end-button">
            <InputGroup
              inputName="new item"
              inputType="text"
              isRequired
              onChange={handleItemChange}
              value={newItemValue}
            />
            <IconButton
              plus
              onClick={() => handleAddShoppingListMisc(nanoid(), newItemValue)}
            />
          </div>
        )}

        {!isAddingItem && (
          <Button
            buttonType="button"
            buttonName="add item"
            onClick={handleAddMiscItem}
          />
        )}
      </section>

      <div ref={bottomRef} />
    </article>
  );
};

export default ShoppingList;
