import { NextPage } from 'next';

import Layout from '../../components/organisms/Layout';
import RecipeForm from '../../components/organisms/RecipeForm';

const AddRecipePage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-align-center">Add Recipe</h1>

      <RecipeForm />
    </Layout>
  );
};

export default AddRecipePage;
