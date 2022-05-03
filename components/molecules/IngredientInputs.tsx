import { ChangeEventHandler, MouseEventHandler } from 'react';

import InputGroup from '../atoms/InputGroup';
import IconButton from '../atoms/IconButton';

type IngredientInputsProps = {
  onClick: MouseEventHandler,
  onChange?: ChangeEventHandler,
  value: string,
};

const IngredientInputs = ({ onClick, onChange, value }: IngredientInputsProps) => (
  <div className="grid-end-button">
    <InputGroup
      inputName="ingredient"
      inputType="text"
      isRequired
      value={value}
      onChange={onChange}
    />

    <IconButton
      minus
      onClick={onClick}
    />
  </div>
);

IngredientInputs.defaultProps = {
  onChange: null,
};

export default IngredientInputs;
