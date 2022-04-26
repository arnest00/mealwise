import IRecipe from '../../interfaces/IRecipe';
import RecipeCard from '../molecules/RecipeCard';

type RecipeBookCategoryProps = {
  categoryName: string,
  categoryRecipes?: IRecipe[]
};

const RecipeBookCategory = ({ categoryName, categoryRecipes }: RecipeBookCategoryProps ) => {
  return (
    <section>
      <h2 className="section">{categoryName}</h2>

      {categoryRecipes?.map(({ id, name, description }) => (
        <RecipeCard
          key={id}
          name={name}
          description={description}
        />
      ))}
    </section>
  );
};

export default RecipeBookCategory;
