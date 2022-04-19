import { useState } from 'react';
import { nanoid } from 'nanoid';
import { db } from '../../lib/db';

import InputGroup from '../atoms/InputGroup';
import SelectGroup from '../atoms/SelectGroup';
import Button from '../atoms/Button';

import IngredientInputs from '../molecules/IngredientInputs';

const RecipeForm = () => {
  const [ status, setStatus ] = useState("");

  const addRecipe = async (e) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    
    try {
      const formData = new FormData(form);
      const formDataObject = Object.fromEntries(formData.entries());

      const newRecipe = {
        id: nanoid(),
        name: formDataObject['recipe name'],
        category: formDataObject['category'],
      };

      await db.recipes.add(newRecipe);

      setStatus(`Recipe "${newRecipe.name}" added!`);
    } catch (err) {
      console.error(err);
    };
  };

  return (
    <form className="form" onSubmit={addRecipe}>
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

        <IngredientInputs />

        <Button
          buttonType='button'
          buttonName='add ingredient'
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

      <p>{status}</p>
    </form>
  );
};

export default RecipeForm;
