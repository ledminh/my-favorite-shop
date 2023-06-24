import categories from "@/data/categories";
import { ComponentWithChildren } from "@/types";
import { Dialog } from "@headlessui/react";

import Category from "@/components/shop/Category";
import { CloseIcon } from "@/theme/Icons";

type Props = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
};

export default function VariantListModal({ isOpen, setIsOpen }: Props) {
  return (
    <Dialog
      className="absolute z-50 flex items-center justify-center w-full h-full bg-white"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <CloseButton />
      <Dialog.Panel
        as="div"
        className="container flex justify-center items-start py-4 overflow-hidden border-y-8 border-red-950 border-double overflow-y-auto w-full h-[calc(80vh-80px)] mt-[30px]"
      >
        <List>
          {[...Array(10)].map((_, index) => (
            <Item key={index}>Variant {index}</Item>
          ))}
        </List>
      </Dialog.Panel>
    </Dialog>
  );
}

/**************************
 * Components
 */
const CloseButton = () => {
  return (
    <button className="absolute top-0 right-1 w-[50px] h-[50px] hover:bg-blue-950/40 hover:text-white rounded-full ">
      <CloseIcon />
    </button>
  );
};

/****************************
 * Styles
 */
const List: ComponentWithChildren = ({ children }) => {
  return <ul className="flex flex-row flex-wrap w-10/12 gap-5">{children}</ul>;
};

const Item: ComponentWithChildren = ({ children }) => {
  return <li className="">{children}</li>;
};
