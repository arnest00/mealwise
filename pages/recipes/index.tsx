import { NextPage } from 'next';
import Link from 'next/link';

const RecipesPage: NextPage = () => (
  <div>
    <h1>Recipe Book</h1>

    <ul>
      <li>
        <Link href="/recipes/add">Add Recipe</Link>
      </li>
    </ul>
  </div>
);

export default RecipesPage;
