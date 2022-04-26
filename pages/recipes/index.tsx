import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../../components/organisms/Layout';
import RecipeBookCategory from '../../components/organisms/RecipeBookCategory';

const RecipesPage: NextPage = () => {
  return (
    <Layout>
      <h1 className="title text-align-center">Recipe Book</h1>

      <ul>
        <li>
          <Link href="/recipes/add">Add Recipe</Link>
        </li>
      </ul>

      <RecipeBookCategory
        categoryName='breakfast'
      />

      <RecipeBookCategory
        categoryName='lunch'
      />

      <RecipeBookCategory
        categoryName='dinner'
      />
    </Layout>
  );
};

export default RecipesPage;
