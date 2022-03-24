import { Fragment } from 'react';

import InputGroup from '../atoms/InputGroup';
import SelectGroup from '../atoms/SelectGroup';

const IngredientInputs = () => {
  return (
    <Fragment>
      <InputGroup
        inputName='name'
        inputType='text'
        isRequired={true}
      />
      <InputGroup
        inputName='quantity'
        inputType='number'
        isRequired={true}
      />
      <SelectGroup
        selectName='unit'
        isRequired={false}
        options={[
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
