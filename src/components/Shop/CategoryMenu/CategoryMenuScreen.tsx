import categories from "@/data/categories";
import { ComponentWithChildren } from "@/types";

import Category from "@/components/shop/Category";
import Modal from "@/theme/Modal";

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
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} size="full">
      <List>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category
              type="Button"
              isCurrent={currentCategory.id === category.id}
              category={category}
            />
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
  return <li className="">{children}</li>;
};
