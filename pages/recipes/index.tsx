import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../../components/organisms/Layout';
import RecipeBookCategory from '../../components/organisms/RecipeBookCategory';

const RecipesPage: NextPage = () => {
  const seedBreakfastRecipes = [
    {
      name: 'Breakfast of Champions',
      description: 'A Red Bull and a cigarette.'
    },
    {
      name: 'Scrambled Eggs',
      description: 'A deconstructed, crustless quiche.'
    },
    {
      name: 'Fried Chicken and Waffles',
      description: 'When you have time to cook dinner and breakfast at the same time.'
    },
  ];
  
  const seedDinnerRecipes = [
    {
      name: 'Toast Sandwich',
      description: 'A slice of bread between two slices of bread.'
    },
    {
      name: 'Busy Day at Work',
      description: 'The number to the local Chinese takeout place is 555-0106.'
    },
  ];

  return (
    <Layout>
      <h1 className="text-align-center">Recipe Book</h1>

      <ul>
        <li>
          <Link href="/recipes/add">Add Recipe</Link>
        </li>
      </ul>

      <RecipeBookCategory
        categoryName='breakfast'
        categoryRecipes={seedBreakfastRecipes}
      />

      <RecipeBookCategory
        categoryName='lunch'
      />

      <RecipeBookCategory
        categoryName='dinner'
        categoryRecipes={seedDinnerRecipes}
      />
    </Layout>
  );
};

export default RecipesPage;
