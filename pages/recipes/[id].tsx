import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import IRecipe from '../../interfaces/IRecipe';
import { getRecipeById } from '../../services/dbService';

import RecipeViewer from '../../components/molecules/RecipeViewer';

import Layout from '../../components/organisms/Layout';

const RecipeView: NextPage = () => {
  const [recipe, setRecipe] = useState<IRecipe | undefined>();
  const router = useRouter();
  const id = router.query.id ? router.query.id.toString() : '';

  useEffect(() => {
    const getAndSetData = async (recipeId: string) => {
      try {
        const fetchedRecipe = await getRecipeById(recipeId);

        if (!fetchedRecipe) return await router.replace('/404');

        return setRecipe(fetchedRecipe);
      } catch (err) {
        return await router.replace('/404');
      }
    };

    getAndSetData(id);
  }, [id, router]);

  return (
    <Layout>
      {recipe && (
        <RecipeViewer
          id={recipe.id}
          name={recipe.name}
          description={recipe.description}
          link={recipe.link}
          category={recipe.category}
          ingredients={recipe.ingredients}
        />
      )}
    </Layout>
  );
};

export default RecipeView;
