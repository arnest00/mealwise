interface ButtonProps {
  buttonType: 'button' | 'submit',
  buttonName: string
};

const Button = ({ buttonType, buttonName }: ButtonProps ) => {
  return (
    <button
      type={buttonType}>
      {buttonName}
    </button>
  );
};

export default Button;
