"use client";

import { ComponentWithChildren, Variant as VariantType } from "@/types";

import { useState } from "react";

import VariantModal from "./VariantModal";

import Modal from "@/theme/Modal";
import Variant from "./Variant";

type Props = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  variants: VariantType[];
  selectedVariant?: VariantType;
  setCurrentVariant: (arg: VariantType) => void;
  currentVariant?: VariantType;
  productID: string;
};

export default function VariantListModal({
  isOpen,
  setIsOpen,
  variants,
  selectedVariant,
  setCurrentVariant,
  currentVariant,
  productID,
}: Props) {
  const [isVariantModalOpen, setIsVariantModalOpen] = useState(true);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} size="full">
        <List>
          {variants.map((variant) => (
            <Item key={variant.id}>
              <Variant
                variant={variant}
                setIsVariantModalOpen={setIsVariantModalOpen}
                selectedVariant={selectedVariant}
                setCurrentVariant={setCurrentVariant}
              />
            </Item>
          ))}
        </List>
        <VariantModal
          isOpen={isVariantModalOpen}
          currentVariant={currentVariant}
          setIsOpen={setIsVariantModalOpen}
          productID={productID}
        />
      </Modal>
    </>
  );
}

/****************************
 * Styles
 */
const List: ComponentWithChildren = ({ children }) => {
  return (
    <ul className="flex flex-row flex-wrap w-10/12 gap-5 mx-auto">
      {children}
    </ul>
  );
};

const Item: ComponentWithChildren = ({ children }) => {
  return (
    <li className="transition duration-150 ease-in-out border border-gray-600 border-dashed rounded-md hover:bg-gray-100">
      {children}
    </li>
  );
};
