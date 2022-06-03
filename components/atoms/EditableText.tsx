import {
  ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, useState,
} from 'react';

type EditableTextProps = {
  text: string,
  textId: string,
  setText: Function,
};

const EditableText = ({ text, textId, setText }: EditableTextProps) => {
  const [editValue, setEditValue] = useState(text);

  const handleClick = (e: MouseEvent<HTMLInputElement>) => e.currentTarget.select();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setEditValue(e.currentTarget.value);

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    setText(textId, e.currentTarget.value);
  };

  return (
    <div className="editable-text">
      <label htmlFor={textId} className="editable-text__label">
        Previous value:
        {' '}
        {text}
      </label>
      <input
        id={textId}
        className="editable-text__input"
        type="text"
        value={editValue}
        onClick={(e) => handleClick(e)}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleOnKeyDown(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </div>
  );
};

export default EditableText;
