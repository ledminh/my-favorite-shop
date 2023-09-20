"use client";

import {
  ComponentWithChildren,
  WithID,
  Product as ProductType,
  Variant as VariantType,
} from "@/types";

import Variant from "./Variant";
import VariantListModal from "./VariantListModal";
import VariantModal from "./VariantModal";

import { useEffect, useState } from "react";

type Props = {
  product: WithID<ProductType>;
  selectedVariantID?: string;
};

export default function Variants({
  product,
  selectedVariantID: _selectedVariantID,
}: Props) {
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);

  const [currentVariant, setCurrentVariant] = useState<
    WithID<VariantType> | undefined
  >();

  const [selectedVariantID, setSelectedVariantID] = useState<
    string | undefined
  >();

  useEffect(() => {
    setSelectedVariantID(_selectedVariantID);
  }, [_selectedVariantID]);

  useEffect(() => {
    if (product.variants) {
      setCurrentVariant(
        product.variants.find((variant) => variant.id === selectedVariantID)
      );
    }
  }, [selectedVariantID, product]);

  if (!product.variants || product.variants.length === 0) {
    return null;
  }

  const { variants, id: productID } = product;

  return (
    <>
      <Wrapper>
        {variants.map(
          (variant) =>
            (variant.shown || variant.id === selectedVariantID) && (
              <Item key={variant.id}>
                <Variant
                  variant={variant}
                  selectedVariantID={selectedVariantID}
                  setIsVariantModalOpen={setIsVariantModalOpen}
                  setCurrentVariant={setCurrentVariant} // currentVariant is the variant that is currently shown on modal
                />
              </Item>
            )
        )}
        {variants.some(
          (variant) => !variant.shown && variant.id !== selectedVariantID
        ) && (
          <Item>
            <Button onClick={() => setIsListModalOpen(true)}>MORE ...</Button>
          </Item>
        )}
      </Wrapper>
      <VariantListModal
        setIsOpen={setIsListModalOpen}
        isOpen={isListModalOpen}
        variants={variants}
        selectedVariantID={selectedVariantID}
        setCurrentVariant={setCurrentVariant}
        currentVariant={currentVariant}
        productID={productID}
      />
      <VariantModal
        isOpen={isVariantModalOpen}
        currentVariant={currentVariant}
        setIsOpen={setIsVariantModalOpen}
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
