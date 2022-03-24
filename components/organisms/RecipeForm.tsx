import InputGroup from '../atoms/InputGroup';
import SelectGroup from '../atoms/SelectGroup';
import Button from '../atoms/Button';

import IngredientInputs from '../molecules/IngredientInputs';
import RecipeStepInputs from '../molecules/RecipeStepInputs';

const RecipeForm = () => {
  return (
    <form>
      <fieldset>
        <legend>Recipe</legend>

        <InputGroup
          inputName='name'
          inputType='text'
          isRequired={true}
        />
        
        <InputGroup
          inputName='description'
          inputType='text'
          isRequired={false}
        />

        <InputGroup
          inputName='link'
          inputType='text'
          isRequired={false}
        />

        <SelectGroup
          selectName='category'
          isRequired={false}
          options={[
            'breakfast',
            'lunch',
            'dinner'
          ]}
        />
      </fieldset>

      <fieldset>
        <legend>Ingredients</legend>

        <IngredientInputs />

        <Button
          buttonType='button'
          buttonName='add ingredient'
        />
      </fieldset>

      <fieldset>
        <legend>Directions</legend>

        <ol>
          <RecipeStepInputs />
        </ol>

        <Button
          buttonType='button'
          buttonName='add step'
        />
      </fieldset>

      <div>
        <Button
          buttonType='submit'
          buttonName='save'
        />
        <Button
          buttonType='button'
          buttonName='cancel'
        />
      </div>
    </form>
  );
};

export default RecipeForm;
