import RecipeCard from '../molecules/RecipeCard';

interface Recipe {
  name: string,
  description: string
}

interface RecipeBookCategoryProps {
  categoryName: string,
  categoryRecipes?: Recipe[]
};

const RecipeBookCategory = ({ categoryName, categoryRecipes }: RecipeBookCategoryProps ) => {
  return (
    <section>
      <h2>{categoryName}</h2>

      {categoryRecipes?.map((recipe, idx) => (
        <RecipeCard
          key={idx}
          mealName={recipe.name}
          mealDescription={recipe.description}
        />
      ))}
  </section>
  );
};

export default RecipeBookCategory;
