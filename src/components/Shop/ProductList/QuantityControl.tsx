import { ComponentWithChildren } from "@/types";
import { useState } from "react";
export default function QuantityControl() {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => prev - 1);

  return (
    <Wrapper>
      <Button onClick={increase}>+</Button>
      <span>{quantity}</span>
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
      className="flex items-center justify-center w-8 text-xl font-bold text-blue-950 hover:scale-125 hover:-translate-y-0.5 transition-all active:text-blue-800"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
};
