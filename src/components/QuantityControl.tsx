import { ComponentWithChildren } from "@/types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  size?: "sm" | "md";
  quantity: number;
  min?: number;
  max?: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
};

export default function QuantityControl({
  quantity,
  setQuantity,
  min = 0,
  max,
  size = "sm",
  disabled = false,
}: Props) {
  const increase = () =>
    setQuantity((prev) => {
      if (max && prev === max) return prev;

      return prev + 1;
    });
  const decrease = () =>
    setQuantity((prev) => {
      if (prev === min) return prev;
      return prev - 1;
    });

  return (
    <Wrapper>
      {disabled ? (
        <>
          <div className="w-6 h-6 text-xl text-gray-500">+</div>
          <div className="w-8 font-bold text-center text-gray-500">0</div>
          <div className="w-6 h-6 text-xl text-gray-500">-</div>
        </>
      ) : (
        <>
          <Button onClick={increase} size={size}>
            +
          </Button>
          <Value size={size}>{quantity}</Value>
          <Button onClick={decrease} size={size}>
            -
          </Button>
        </>
      )}
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
  size: "sm" | "md";
};

const Button = ({ children, onClick, size }: ButtonProps) => {
  const buttonSize = size === "sm" ? "w-6 h-6 text-xl" : "w-8 h-8 text-2xl";

  return (
    <button
      className={
        "flex items-center justify-center font-bold text-blue-950 hover:scale-125 hover:-translate-y-0.5 transition-all active:text-blue-700 active:scale-125 active:-translate-y-0.5 " +
        buttonSize
      }
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

type ValueProps = {
  children: React.ReactNode;
  size: "sm" | "md";
};

const Value = ({ children, size }: ValueProps) => {
  const fontSize = size === "sm" ? "text-lg" : "text-2xl";

  return (
    <div
      className={
        "flex items-center justify-center w-8 font-bold text-center text-blue-950 " +
        fontSize
      }
    >
      {children}
    </div>
  );
};
