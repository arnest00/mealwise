import { ChangeEventHandler, MouseEventHandler } from 'react';

import InputGroup from '../atoms/InputGroup';
import IconButton from '../atoms/IconButton';

type IngredientInputsProps = {
  onClick: MouseEventHandler,
  onChange?: ChangeEventHandler,
  value: string,
}

const IngredientInputs = ({ onClick, onChange, value }: IngredientInputsProps) => {
  return (
    <div className='grid-end-button'>
      <InputGroup
        inputName='ingredient'
        inputType='text'
        isRequired={true}
        value={value}
        onChange={onChange}
      />
      
      <IconButton
        minus={true}
        onClick={onClick}
      />
    </div>
  );
};

export default IngredientInputs;
