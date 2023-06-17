import { ComponentWithChildren, Category as CategoryType } from "@/types";

import Category from "@/components/shop/Category";

type CategoryListProps =
  | {
      type: "loaded";
      categories: CategoryType[];
    }
  | {
      type: "loading";
      categories?: undefined;
    };

export default function CategoryList({ categories, type }: CategoryListProps) {
  if (type === "loading") {
    return (
      <Wrapper>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Item key={index}>
              <Category type="Card" skeleton={true} />
            </Item>
          ))}
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category type="Card" category={category} />
        </Item>
      ))}
    </Wrapper>
  );
}

/************************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <ul className="grid w-11/12 gap-4 mx-auto mb-10 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </ul>
  );
};

const Item: ComponentWithChildren = ({ children }) => {
  return <li className="">{children}</li>;
};
