import Link from "next/link";

import * as Type from "./basics.type";

const buttonColor = {
  attention:
    "ring-red-900 bg-red-400 hover:bg-red-300 active:bg-red-500 focus:ring-red-500 text-black",
  primary:
    "ring-blue-950 bg-white hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-400 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white",
  secondary:
    "ring-blue-950 bg-gray-300 hover:bg-gray-400 active:bg-gray-500 focus:ring-gray-500",
};

const borderShape = {
  rounded: "rounded-full",
  square: "rounded-none",
};

const buttonSize = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-1.5 text-md",
  lg: "px-4 py-2.5 text-lg",
};

export const Button: Type.Button = ({
  children,
  color = "primary",
  type = "normal",
  size = "lg",
  border = "rounded",
  href = "/",
  onClick,
  buttonType,
  disabled,
}) => {
  const classNames = `block text-center font-semibold text-blue-950 ring-2 ring-inset w-full ${buttonColor[color]} ${buttonSize[size]} ${borderShape[border]}`;

  return type === "link" ? (
    <Link className={classNames} href={href}>
      {children}
    </Link>
  ) : (
    <button
      className={classNames}
      onClick={onClick}
      type={buttonType}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const Input: Type.Input = ({
  placeholder = "Search",
  size = "lg",
  onChange,
  onKeyDown,
  value,
}) => {
  if (size === "md") {
    return (
      <input
        className="block w-full px-3 py-1.5 text-sm font-semibold rounded-full text-blue-950 ring-1 ring-inset ring-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 border-0 focus:outline-none"
        placeholder={placeholder}
        onChange={onChange ? onChange : () => console.log("onChange")}
        onKeyDown={onKeyDown ? onKeyDown : () => console.log("onKeyDown")}
        value={value}
      />
    );
  }

  return (
    <input
      className="block rounded-full px-4 py-2.5 text-lg font-semibold text-blue-950 w-full ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 border-0 focus:outline-none"
      placeholder={placeholder}
      onChange={onChange ? onChange : () => console.log("onChange")}
      onKeyDown={onKeyDown ? onKeyDown : () => console.log("onKeyDown")}
      value={value}
    />
  );
};
