type ButtonProps = {
  buttonType: 'button' | 'submit' | 'reset',
  buttonName: string,
  modifier?: string
};

const Button = ({ buttonType, buttonName, modifier }: ButtonProps ) => {
  const classes = modifier ? `button button${modifier}` : `button`;

  return (
    <button
      type={buttonType}
      className={classes}>
      {buttonName}
    </button>
  );
};

export default Button;
