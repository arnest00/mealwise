import { ChangeEventHandler, KeyboardEvent, MouseEventHandler } from 'react';

import IconButton from '../atoms/IconButton';
import InputGroup from '../atoms/InputGroup';

type IngredientInputsProps = {
  onClick: MouseEventHandler,
  onChange: ChangeEventHandler,
  onKeyDownFunction: Function,
  value: string,
};

const IngredientInputs = ({
  onClick, onChange, onKeyDownFunction, value,
}: IngredientInputsProps) => {
  const handlePressEnter = (e: KeyboardEvent<Element>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onKeyDownFunction();
    }
  };

  return (
    <div className="obj-grid-end-button">
      <InputGroup
        inputName="ingredient"
        inputType="text"
        isRequired
        onChange={onChange}
        onKeyDown={(e) => handlePressEnter(e)}
        value={value}
      />

      <IconButton
        minus
        onClick={onClick}
      />
    </div>
  );
};

export default IngredientInputs;
