import { NextPage } from 'next';

import PageHeader from '../../components/atoms/PageHeader';
import Layout from '../../components/organisms/Layout';
import RecipeForm from '../../components/organisms/RecipeForm';

const AddRecipePage: NextPage = () => (
  <Layout>
    <PageHeader>
      <h1 className="title text-align-center">Add Recipe</h1>
    </PageHeader>

    <RecipeForm />
  </Layout>
);

export default AddRecipePage;
