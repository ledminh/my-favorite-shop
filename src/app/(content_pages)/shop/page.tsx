import { H2 } from "@/theme/typography";
import { ComponentWithChildren, Category as CategoryType } from "@/types";

import Category from "@/components/shop/Category";
import Banner from "@/theme/Banner";
import Section from "@/theme/Section";

import categories from "@/data/categories";
import CategoryList from "@/components/shop/CategoryList";

type GetCategories = () => Promise<CategoryType[]>;

const getCategories: GetCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 2000);
  });
};

export default async function Shop() {
  const categories = await getCategories();

  return (
    <>
      <Section>
        <Banner>
          <H2>Explore our wide range of nail care categories</H2>
        </Banner>
      </Section>
      <Section>
        <CategoryList categories={categories} />
      </Section>
    </>
  );
}

/************************
 * Styles
 */

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
