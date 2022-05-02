import { MouseEventHandler } from 'react';

import InputGroup from '../atoms/InputGroup';
import IconButton from '../atoms/IconButton';

type IngredientInputsProps = {
  onClick: MouseEventHandler,
}

const IngredientInputs = ({ onClick }: IngredientInputsProps) => {
  return (
    <div className='grid-end-button'>
      <InputGroup
        inputName='ingredient'
        inputType='text'
        isRequired={true}
      />
      
      <IconButton
        minus={true}
        onClick={onClick}
      />
    </div>
  );
};

export default IngredientInputs;
