import { Fragment } from 'react';

import InputGroup from '../atoms/InputGroup';
import SelectGroup from '../atoms/SelectGroup';

const IngredientInputs = () => {
  return (
    <Fragment>
      <InputGroup
        inputName='ingredient name'
        inputType='text'
        isRequired={true}
        placeholder='Name'
      />
      <InputGroup
        inputName='quantity'
        inputType='number'
        isRequired={true}
        placeholder="1"
      />
      <SelectGroup
        selectName='unit'
        isRequired={false}
        options={[
          '',
          'teaspoon (t)',
          'tablespoon (tbsp)',
          'fluid ounce (fl oz)',
          'cup (c)',
          'milliliter (mL)',
          'liter (L)',
          'pound (lb)',
          'ounce (oz)',
          'gram (g)',
        ]}
      />
    </Fragment>
  );
};

export default IngredientInputs;
