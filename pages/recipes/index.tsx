import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../../components/organisms/Layout';

const RecipesPage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-align-center">Recipe Book</h1>

      <ul>
        <li>
          <Link href="/recipes/add">Add Recipe</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default RecipesPage;
