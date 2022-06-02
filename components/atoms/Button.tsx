/* eslint-disable react/button-has-type */
import { MouseEventHandler } from 'react';

type ButtonProps = {
  buttonType: 'button' | 'submit' | 'reset',
  buttonName: string,
  modifier?: string,
  onClick?: MouseEventHandler,
  disabled?: boolean,
};

const Button = ({
  buttonType,
  buttonName,
  modifier,
  onClick,
  disabled,
}: ButtonProps) => {
  const classes = modifier ? `button button${modifier}` : 'button';

  return (
    <button
      type={buttonType}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
};

Button.defaultProps = {
  modifier: '',
  onClick: null,
  disabled: false,
};

export default Button;
