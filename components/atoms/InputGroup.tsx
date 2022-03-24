interface InputProps {
  inputName: string,
  inputType: 'text' | 'number',
  isRequired: boolean
};

const InputGroup = ({ inputName, inputType, isRequired }: InputProps ) => {
  return (
    <div>
      <label htmlFor={inputName}>
        {inputName}
      </label>
      <input type={inputType} name={inputName} required={isRequired} />
    </div>
  );
};

export default InputGroup;
