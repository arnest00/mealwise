import { useEffect, useRef, useState } from 'react';
import { addRecipe } from '../../services/dbService';

import InputGroup from '../atoms/InputGroup';
import SelectGroup from '../atoms/SelectGroup';
import Button from '../atoms/Button';

import IngredientInputs from '../molecules/IngredientInputs';

const RecipeForm = () => {
  const formBottomRef = useRef();
  const [ status, setStatus ] = useState("");
  const [ ingredientCounter, setIngredientCounter ] = useState(1);

  useEffect(() => {
    formBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [ingredientCounter]);

  const handleModifyIngredientCounter = (modifier : number) => {
    const newIngredientCounter = ingredientCounter + modifier;

    setIngredientCounter(newIngredientCounter);
  };

  const handleSubmit = async (e: { preventDefault: () => void; currentTarget: any; target: any; }) => {
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
          inputName='recipe name'
          inputType='text'
          isRequired={true}
        />
        
        <InputGroup
          inputName='recipe description (optional)'
          inputType='text'
          isRequired={false}
        />

        <InputGroup
          inputName='link to recipe (optional)'
          inputType='url'
          isRequired={false}
        />

        <div className="grid-two-col">
          <SelectGroup
            selectName='category'
            isRequired={true}
            options={[
              'Breakfast',
              'Lunch',
              'Dinner'
            ]}
          />

          <InputGroup
            inputName='servings (optional)'
            inputType='number'
            isRequired={false}
          />
        </div>
      </fieldset>

      <fieldset className="form__fieldset">
        <legend className="bigger">Ingredient Information</legend>

        <p className='smaller'>
          Add ingredients by denoting quantity, unit, and type of ingredient. Just the quantity and type of ingredient would also be sufficient. For example, "1 <abbr title='tablespoon'>tbsp</abbr> olive oil" or "3 apples".
        </p>

        {[...Array(ingredientCounter)].map((_, idx) => (
          <IngredientInputs
            key={idx}
            onClick={() => handleModifyIngredientCounter(-1)}
          />
        ))}

        <Button
          buttonType='button'
          buttonName='add ingredient'
          onClick={() => handleModifyIngredientCounter(1)}
        />
      </fieldset>

      <div className="grid-two-col">
        <Button
          buttonType='submit'
          buttonName='save'
          modifier='--good-job'
        />
        <Button
          buttonType='reset'
          buttonName='clear'
          modifier='--bad-job'
        />
      </div>

      <div ref={formBottomRef}></div>
    </form>
  );
};

export default RecipeForm;
