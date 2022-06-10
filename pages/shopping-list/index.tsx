import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { getShoppingList, deleteShoppingList } from '../../services/dbService';

import Button from '../../components/atoms/Button';
import Layout from '../../components/organisms/Layout';
import ShoppingList from '../../components/organisms/ShoppingList';

const ShoppingListPage: NextPage = () => {
  const [shoppingList, setShoppingList] = useState<{ id: string, itemName: string }[] | []>([]);

  const handleDeleteShoppingList = () => {
    deleteShoppingList();
  };

  useEffect(() => {
    const getAndSetShoppingList = async () => {
      try {
        const shoppingListItems = await getShoppingList();

        setShoppingList(shoppingListItems);
      } catch (err) {
        setShoppingList([]);
      }
    };

    getAndSetShoppingList();
  }, [shoppingList]);

  return (
    <Layout>
      <h1 className="title text-align-center">
        Shopping List
      </h1>

      <Button
        buttonType="button"
        buttonName="delete shopping list"
        modifier="--bad-job"
        onClick={handleDeleteShoppingList}
      />

      <ShoppingList
        shoppingList={shoppingList}
      />
    </Layout>
  );
};

export default ShoppingListPage;
