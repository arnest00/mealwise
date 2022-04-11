import InputGroup from '../atoms/InputGroup';
import SelectGroup from '../atoms/SelectGroup';
import Button from '../atoms/Button';

import IngredientInputs from '../molecules/IngredientInputs';

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

        <InputGroup
          inputName='servings'
          inputType='number'
          isRequired={false}
        />

        <SelectGroup
          selectName='category'
          isRequired={true}
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

      <div>
        <Button
          buttonType='submit'
          buttonName='save'
          modifier='--good-job'
        />
        <Button
          buttonType='reset'
          buttonName='cancel'
          modifier='--bad-job'
        />
      </div>
    </form>
  );
};

export default RecipeForm;
