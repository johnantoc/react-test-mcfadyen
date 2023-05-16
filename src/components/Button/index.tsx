import { MouseEventHandler } from "react";
import Image from "next/image";

type ButtonProps = {
  text: string;
  name?: string;
  size?: "small" | "medium" | "large";
  onClick: MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
  disabled?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  iconStyle?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button = (props: ButtonProps) => {
  const {
    text,
    type,
    name,
    size,
    selected,
    onClick,
    disabled,
    leftIcon,
    rightIcon,
    iconStyle,
    className,
  } = props;

  let buttonSizeStyle = "w-full h-[30px]";
  if (size === "small") {
    buttonSizeStyle = "w-[78px] h-[30px]";
  } else if (size === "medium") {
    buttonSizeStyle = "w-[100px] h-[30px]";
  }

  return (
    <button
      type={type}
      name={name}
      disabled={disabled}
      className={`rounded-full flex justify-center items-center border ${className} ${buttonSizeStyle} ${
        selected ? "bg-black text-white" : ""
      }`}
      onClick={onClick}
    >
      {leftIcon && (
        <span className={iconStyle}>
          <Image src={leftIcon} alt="left Icon" width={30} height={30} />
        </span>
      )}
      {text}
      {rightIcon && (
        <span className={iconStyle}>
          <Image src={rightIcon} alt="right Icon" width={30} height={30} />
        </span>
      )}
    </button>
  );
};

Button.defaultProps = {
  text: "",
  name: "",
  size: "large",
  selected: false,
  disabled: false,
  leftIcon: "",
  rightIcon: "",
  onClick: () => {},
  className: "",
  iconStyle: "",
  type: "button",
};

export default Button;
