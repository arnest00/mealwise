import IRecipe from '../../interfaces/IRecipe';

import RecipeCard from '../molecules/RecipeCard';

type RecipeBookCategoryProps = {
  categoryName: string,
  categoryRecipes?: IRecipe[]
};

const RecipeBookCategory = ({ categoryName, categoryRecipes }: RecipeBookCategoryProps) => (
  <section>
    <h2 className="section">{categoryName}</h2>

    {categoryRecipes?.map(({
      id, name, category, description,
    }) => (
      <RecipeCard
        key={id}
        id={id}
        name={name}
        category={category}
        description={description}
        ingredients={[]}
      />
    ))}
  </section>
);

RecipeBookCategory.defaultProps = {
  categoryRecipes: [],
};

export default RecipeBookCategory;
