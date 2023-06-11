import { ComponentWithChildren } from "@/types";
import { useState, Dispatch, SetStateAction } from "react";

type Props = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

export default function QuantityControl({ quantity, setQuantity }: Props) {
  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () =>
    setQuantity((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });

  return (
    <Wrapper>
      <Button onClick={increase}>+</Button>
      <Value>{quantity}</Value>
      <Button onClick={decrease}>-</Button>
    </Wrapper>
  );
}

/****************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-2 p-1 bg-white rounded-full">
      {children}
    </div>
  );
};

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="flex items-center justify-center w-8 text-xl font-bold text-blue-950 hover:scale-125 hover:-translate-y-0.5 transition-all active:text-blue-700 active:scale-125 active:-translate-y-0.5"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

const Value: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-8 text-lg font-bold text-center text-blue-950">
      {children}
    </div>
  );
};
