"use client";

import { ComponentWithChildren } from "@/types";
import { Variant as VariantType } from "@/types";
import Variant from "./Variant";
import VariantListModal from "./VariantListModal";

import { useState } from "react";

type Props = {
  productID: string;
  variants: VariantType[];
};

export default function Variants({ productID, variants }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Wrapper>
        {variants.map((variant) => (
          <Item key={variant.id}>
            <Variant productID={productID} variant={variant} />
          </Item>
        ))}
        <Item>
          <Button onClick={() => setIsModalOpen(true)}>MORE ...</Button>
        </Item>
      </Wrapper>
      <VariantListModal setIsOpen={setIsModalOpen} isOpen={isModalOpen} />
    </>
  );
}

/***********************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => {
  return <ul className="flex justify-center gap-3 ">{children}</ul>;
};

const Item: ComponentWithChildren = ({ children }) => {
  return (
    <li className="transition duration-150 ease-in-out border border-gray-600 border-dashed rounded-md hover:bg-gray-100">
      {children}
    </li>
  );
};

type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="flex flex-col items-center justify-center h-full p-2 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
