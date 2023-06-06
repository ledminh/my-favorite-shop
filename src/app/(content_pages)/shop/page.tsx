import { H2 } from "@/theme/typography";
import { ComponentWithChildren } from "@/types";

import { Category } from "@/components/Shop/Category";
import Banner from "@/theme/Banner";

import categories from "@/data/categories";

function getCategories() {
  return categories;
}

export default function Shop() {
  const categories = getCategories();

  return (
    <>
      <Intro>
        <Banner>
          <H2>Explore our wide range of nail care categories</H2>
        </Banner>
      </Intro>
      <List>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category
              name={category.name}
              description={category.description}
              link={category.link}
              image={category.image}
            />
          </Item>
        ))}
      </List>
    </>
  );
}

/************************
 * Styles
 */

const Intro: ComponentWithChildren = ({ children }) => {
  return <div className="my-12">{children}</div>;
};

const List: ComponentWithChildren = ({ children }) => {
  return (
    <ul className="grid w-11/12 gap-4 mx-auto mb-10 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </ul>
  );
};

const Item: ComponentWithChildren = ({ children }) => {
  return <li className="">{children}</li>;
};
