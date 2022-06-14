import { ChangeEventHandler, MouseEventHandler } from 'react';

import IconButton from '../atoms/IconButton';
import InputGroup from '../atoms/InputGroup';

type IngredientInputsProps = {
  onClick: MouseEventHandler,
  onChange: ChangeEventHandler,
  value: string,
};

const IngredientInputs = ({ onClick, onChange, value }: IngredientInputsProps) => (
  <div className="obj-grid-end-button">
    <InputGroup
      inputName="ingredient"
      inputType="text"
      isRequired
      onChange={onChange}
      value={value}
    />

    <IconButton
      minus
      onClick={onClick}
    />
  </div>
);

export default IngredientInputs;
