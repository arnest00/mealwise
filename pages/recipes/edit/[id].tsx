import { NextPage } from 'next';

import PageHeader from '../../../components/atoms/PageHeader';
import Layout from '../../../components/organisms/Layout';
import RecipeForm from '../../../components/organisms/RecipeForm';

const EditRecipePage: NextPage = () => (
  <Layout>
    <PageHeader>
      <h1 className="title text-align-center">Edit Recipe</h1>
    </PageHeader>

    <div className="obj-page-content">
      <RecipeForm isEditing />
    </div>
  </Layout>
);

export default EditRecipePage;
