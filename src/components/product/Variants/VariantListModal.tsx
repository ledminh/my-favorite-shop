import { ComponentWithChildren, Variant as VariantType } from "@/types";

import Modal from "@/theme/Modal";
import Variant from "./Variant";

type Props = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  variants: VariantType[];
};

export default function VariantListModal({
  isOpen,
  setIsOpen,
  variants,
}: Props) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} size="full">
      <List>
        {variants.map((variant) => (
          <Item key={variant.id}>
            <Variant variant={variant} />
          </Item>
        ))}
      </List>
    </Modal>
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
