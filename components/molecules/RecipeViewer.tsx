/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import IRecipe from '../../interfaces/IRecipe';

const RecipeViewer = ({
  name,
  description,
  link,
  category,
  ingredients,
}: IRecipe) => (
  <article>
    <h3>{name}</h3>

    <h4>{category}</h4>

    <p>{description}</p>

    {link && (
      <Link href={link}>
        <a>Link to recipe</a>
      </Link>
    )}

    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.id}>{ingredient.content}</li>
      ))}
    </ul>
  </article>
);

export default RecipeViewer;
