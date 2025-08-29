interface ButtonProps {
  type: "submit" | "button";
  disabled?: boolean;
}

const Button = ({ type, disabled }: ButtonProps): React.JSX.Element => {
  return <div>
    <button
        type={type}
        disabled={disabled}
    ></button>
  </div>;
};

export default Button;
