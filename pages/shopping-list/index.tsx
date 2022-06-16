import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { createShoppingList, getShoppingList, deleteShoppingList } from '../../services/dbService';

import Button from '../../components/atoms/Button';
import Modal from '../../components/atoms/Modal';
import PageHeader from '../../components/atoms/PageHeader';
import Layout from '../../components/organisms/Layout';
import ShoppingList from '../../components/organisms/ShoppingList';

type ShoppingListType = {
  items: { id: string, itemName: string }[] | [],
  misc: { id: string, itemName: string }[] | [],
};

const ShoppingListPage: NextPage = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingListType>({ items: [], misc: [] });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const checkDeleteShoppingList = () => {
    setModalIsOpen(true);
  };

  const handleDeleteShoppingList = () => {
    setShoppingList({ items: [], misc: [] });
    deleteShoppingList();
    setModalIsOpen(false);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const getAndSetShoppingList = async () => {
      try {
        let shoppingListItems;

        shoppingListItems = await getShoppingList();
        if (!shoppingListItems) {
          await createShoppingList({
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
          });
          shoppingListItems = await getShoppingList();
        }

        setShoppingList(shoppingListItems);
      } catch (err) {
        setShoppingList({ items: [], misc: [] });
      }
    };

    getAndSetShoppingList();
  }, [shoppingList]);

  return (
    <Layout>
      <PageHeader>
        <h1 className="title text-align-center">Shopping List</h1>
      </PageHeader>

      <div className="obj-page-content">
        <Button
          buttonType="button"
          buttonName="delete shopping list"
          modifier="destructive"
          onClick={checkDeleteShoppingList}
        />

        <ShoppingList
          items={shoppingList.items}
          misc={shoppingList.misc}
        />
      </div>

      {modalIsOpen && (
        <Modal
          onClick={handleCloseModal}
        >
          <p>Delete shopping list?</p>
          <div className="obj-grid-two-cols">
            <Button
              buttonType="button"
              buttonName="yes, delete it"
              modifier="destructive"
              onClick={handleDeleteShoppingList}
            />
            <Button
              buttonType="button"
              buttonName="no, keep it"
              onClick={handleCloseModal}
            />
          </div>
        </Modal>
      )}
    </Layout>
  );
};

export default ShoppingListPage;
