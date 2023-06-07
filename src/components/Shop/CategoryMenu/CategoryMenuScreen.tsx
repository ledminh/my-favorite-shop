import categories from "@/data/categories";
import { ComponentWithChildren } from "@/types";
import { Dialog } from "@headlessui/react";

import Category from "@/components/shop/Category";
import { CloseIcon } from "@/theme/Icons";

type Props = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  currentCategory: {
    id: string;
  };
};

export default function CategoryMenuScreen({
  isOpen,
  setIsOpen,
  currentCategory,
}: Props) {
  return (
    <Dialog
      className="absolute z-50 bg-white h-full w-full flex justify-center items-center"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <CloseButton />
      <Dialog.Panel
        as="div"
        className="container flex justify-center items-start py-4 overflow-hidden border-y-8 border-red-950 border-double overflow-y-auto w-full h-[80vh]"
      >
        <List>
          {categories.map((category) => (
            <Item key={category.id}>
              <Category
                {...category}
                type="Button"
                isCurrent={currentCategory.id === category.id}
              />
            </Item>
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
    <button className="absolute top-2 right-2 w-[50px] h-[50px] hover:bg-blue-950/40 hover:text-white rounded-full ">
      <CloseIcon />
    </button>
  );
};

/****************************
 * Styles
 */
const List: ComponentWithChildren = ({ children }) => {
  return <ul className="flex flex-row flex-wrap gap-5 w-10/12">{children}</ul>;
};

const Item: ComponentWithChildren = ({ children }) => {
  return <li className="">{children}</li>;
};
