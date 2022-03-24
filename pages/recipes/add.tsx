import { Fragment } from 'react';
import { NextPage } from 'next';

import RecipeForm from '../../components/organisms/RecipeForm';

const AddRecipePage: NextPage = () => {
  return (
    <Fragment>
      <h1>Add Recipe</h1>

      <RecipeForm />
    </Fragment>
  );
};

export default AddRecipePage;
