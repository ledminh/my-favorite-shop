"use client";

import {
  ComponentWithChildren,
  Product as ProductType,
  Variant as VariantType,
} from "@/types";

import Variant from "./Variant";
import VariantListModal from "./VariantListModal";
import VariantModal from "./VariantModal";

import useVariant from "@/utils/useVariant";

import { useEffect, useState } from "react";

type Props = {
  product: ProductType;
};

export default function Variants({ product }: Props) {
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);

  const { getSelectedVariant } = useVariant();

  const [currentVariant, setCurrentVariant] = useState<
    VariantType | undefined
  >();

  useEffect(() => {
    setCurrentVariant(getSelectedVariant(product.id));
  }, [product]);

  if (!product.variants) {
    return null;
  }

  const { variants, id: productID } = product;

  return (
    <>
      <Wrapper>
        {variants.map((variant) => (
          <Item key={variant.id}>
            <Variant
              variant={variant}
              selectedVariant={getSelectedVariant(productID)}
              setIsVariantModalOpen={setIsVariantModalOpen}
              setCurrentVariant={setCurrentVariant}
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
        selectedVariant={getSelectedVariant(productID)}
        setCurrentVariant={setCurrentVariant}
        setIsVariantModalOpen={setIsVariantModalOpen}
      />
      <VariantModal
        isOpen={isVariantModalOpen}
        currentVariant={currentVariant}
        setIsOpen={setIsVariantModalOpen}
        setIsListModalOpen={setIsListModalOpen}
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
