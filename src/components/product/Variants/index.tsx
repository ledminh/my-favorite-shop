"use client";

import { ComponentWithChildren } from "@/types";
import { Variant as VariantType } from "@/types";
import Variant from "./Variant";
import VariantListModal from "./VariantListModal";
import VariantModal from "./VariantModal";

import { useState } from "react";

type Props = {
  productID: string;
  variants: VariantType[];
};

export default function Variants({ variants, productID }: Props) {
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);

  const [currentVariant, setCurrentVariant] = useState<VariantType | undefined>(
    undefined
  );

  return (
    <>
      <Wrapper>
        {variants.map((variant) => (
          <Item key={variant.id}>
            <Variant
              variant={variant}
              productID={productID}
              setCurrentVariant={setCurrentVariant}
              setIsVariantModalOpen={setIsVariantModalOpen}
            />
          </Item>
        ))}
        <Item>
          <Button onClick={() => setIsListModalOpen(true)}>MORE ...</Button>
        </Item>
      </Wrapper>
      <VariantListModal
        setIsOpen={setIsListModalOpen}
        isOpen={isListModalOpen}
        variants={variants}
        productID={productID}
        setIsVariantModalOpen={setIsVariantModalOpen}
        setCurrentVariant={setCurrentVariant}
      />
      <VariantModal
        setIsOpen={setIsVariantModalOpen}
        setIsListModalOpen={setIsListModalOpen}
        isOpen={isVariantModalOpen}
        variant={currentVariant}
        productID={productID}
      />
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
