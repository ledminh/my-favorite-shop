import Link from "next/link";

import * as Type from "./basics.type";

const buttonColor = {
  attention: "ring-red-600 bg-red-300 hover:bg-red-400 active:bg-red-500",
  primary: "ring-blue-950 bg-white hover:bg-gray-300 active:bg-gray-400",
};

export const Button: Type.Button = ({
  children,
  color = "primary",
  type = "normal",
  href = "/",
  onClick,
}) => {
  const _color = buttonColor[color];

  const classNames = `block text-center rounded-full px-4 py-2.5 text-lg font-semibold text-blue-950 ring-2 ring-inset w-full ${_color}`;

  return type === "link" ? (
    <Link className={classNames} href={href}>
      {children}
    </Link>
  ) : (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export const Input: Type.Input = ({ placeholder = "Search" }) => {
  return (
    <input
      className="block rounded-full px-4 py-2.5 text-lg font-semibold text-blue-950 ring-2 ring-inset w-full ring-blue-400"
      placeholder={placeholder}
    />
  );
};
