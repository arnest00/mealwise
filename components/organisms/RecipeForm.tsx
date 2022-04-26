import { useState } from 'react';
import { addRecipe } from '../../services/dbService';

import InputGroup from '../atoms/InputGroup';
import SelectGroup from '../atoms/SelectGroup';
import Button from '../atoms/Button';

import IngredientInputs from '../molecules/IngredientInputs';

const RecipeForm = () => {
  const [ status, setStatus ] = useState("");

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
    </form>
  );
};

export default RecipeForm;
