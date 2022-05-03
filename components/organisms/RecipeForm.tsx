import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { nanoid } from 'nanoid';
import { addRecipe } from '../../services/dbService';

import InputGroup from '../atoms/InputGroup';
import SelectGroup from '../atoms/SelectGroup';
import Button from '../atoms/Button';

import IngredientInputs from '../molecules/IngredientInputs';

const RecipeForm = () => {
  const formBottomRef = useRef<null | HTMLDivElement>(null);

  const [status, setStatus] = useState('');
  const [ingredientsList, setIngredientsList] = useState([
    {
      id: nanoid(),
      content: '',
    },
  ]);

  useEffect(() => {
    formBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [ingredientsList]);

  const handleAddIngredient = () => {
    const newIngredientsList = [...ingredientsList];

    newIngredientsList.push({
      id: nanoid(),
      content: '',
    });

    setIngredientsList(newIngredientsList);
  };

  const handleRemoveIngredient = (id: string) => {
    const newIngredientsList = [...ingredientsList]
      .filter((ingredient) => ingredient.id !== id);

    setIngredientsList(newIngredientsList);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const newIngredientsList = [...ingredientsList];
    const changedIngredientIdx = ingredientsList
      .findIndex((ingredient) => ingredient.id === id);

    newIngredientsList[changedIngredientIdx].content = e.currentTarget.value;

    setIngredientsList(newIngredientsList);
  };

  const handleSubmit = async (
    e: { preventDefault: () => void; currentTarget: any; target: any; },
  ) => {
    e.preventDefault();

    const { result, message } = await addRecipe(e);

    if (result !== 'error') e.target.reset();
    setStatus(message);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>{status}</p>

      <fieldset className="form__fieldset">
        <legend className="bigger">Recipe Information</legend>

        <InputGroup
          inputName="recipe name"
          inputType="text"
          isRequired
        />

        <InputGroup
          inputName="recipe description (optional)"
          inputType="text"
          isRequired={false}
        />

        <InputGroup
          inputName="link to recipe (optional)"
          inputType="url"
          isRequired={false}
        />

        <div className="grid-two-col">
          <SelectGroup
            selectName="category"
            isRequired
            options={[
              'Breakfast',
              'Lunch',
              'Dinner',
            ]}
          />

          <InputGroup
            inputName="servings (optional)"
            inputType="number"
            isRequired={false}
          />
        </div>
      </fieldset>

      <fieldset className="form__fieldset">
        <legend className="bigger">Ingredient Information</legend>

        <p className="smaller">
          Add ingredients by denoting quantity, unit, and type of ingredient.
          {' '}
          Just the quantity and type of ingredient would also be sufficient. For example, &quot;1
          {' '}
          <abbr title="tablespoon">
            tbsp
          </abbr>
          {' '}
          olive oil&quot; or &quot;3 apples&quot;.
        </p>

        {ingredientsList.map(({ id, content }) => (
          <IngredientInputs
            key={id}
            onClick={() => handleRemoveIngredient(id)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e, id)}
            value={content}
          />
        ))}

        <Button
          buttonType="button"
          buttonName="add ingredient"
          onClick={handleAddIngredient}
        />
      </fieldset>

      <div className="grid-two-col">
        <Button
          buttonType="submit"
          buttonName="save"
          modifier="--good-job"
        />
        <Button
          buttonType="reset"
          buttonName="clear"
          modifier="--bad-job"
        />
      </div>

      <div ref={formBottomRef} />
    </form>
  );
};

export default RecipeForm;
