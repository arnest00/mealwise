import { NextPage } from 'next';

import Layout from '../../components/organisms/Layout';
import ShoppingList from '../../components/organisms/ShoppingList';

const ShoppingListPage: NextPage = () => (
  <Layout>
    <h1 className="title text-align-center">
      Shopping List
    </h1>

    <ShoppingList />
  </Layout>
);

export default ShoppingListPage;
