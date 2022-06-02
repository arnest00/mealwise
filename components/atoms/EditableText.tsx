import {
  ChangeEvent, FocusEvent, KeyboardEvent, useState,
} from 'react';

type EditableTextProps = {
  text: string,
  textId: string,
  setText: Function,
};

const EditableText = ({ text, textId, setText }: EditableTextProps) => {
  const [editValue, setEditValue] = useState(text);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setEditValue(e.target.value);

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter') && (document.activeElement instanceof HTMLElement)) {
      document.activeElement.blur();
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => setText(textId, e.target.value);

  return (
    <div>
      <label htmlFor={textId}>
        Previous value:
        {' '}
        {text}
      </label>
      <input
        id={textId}
        type="text"
        value={editValue}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleOnKeyDown(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </div>
  );
};

export default EditableText;
