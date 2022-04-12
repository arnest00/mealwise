import InputGroup from '../atoms/InputGroup';
import SelectGroup from '../atoms/SelectGroup';
import Button from '../atoms/Button';

import IngredientInputs from '../molecules/IngredientInputs';

const RecipeForm = () => {
  return (
    <form>
      <fieldset>
        <legend>Recipe Information</legend>

        <InputGroup
          inputName='recipe name'
          inputType='text'
          isRequired={true}
          placeholder='Name'
        />
        
        <InputGroup
          inputName='recipe description'
          inputType='text'
          isRequired={false}
          placeholder='Description (optional)'
        />

        <InputGroup
          inputName='link to recipe'
          inputType='url'
          isRequired={false}
          placeholder='Link (optional)'
        />

        <InputGroup
          inputName='number of servings'
          inputType='number'
          isRequired={false}
          placeholder='Servings (optional)'
        />

        <SelectGroup
          selectName='category'
          isRequired={true}
          options={[
            'Breakfast',
            'Lunch',
            'Dinner'
          ]}
        />
      </fieldset>

      <fieldset>
        <legend>Ingredient Information</legend>

        <IngredientInputs />

        <Button
          buttonType='button'
          buttonName='add ingredient'
        />
      </fieldset>

      <div>
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
