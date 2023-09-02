import { H2 } from "@/theme/typography";
import { ComponentWithChildren } from "@/types";

import Banner from "@/theme/Banner";
import Section from "@/theme/Section";

import CategoryList from "@/components/shop/CategoryList";

import { getCategories } from "@/data/categories";

export default async function Shop() {
  return <>Shop</>;
  // const { items: categories, total } = await getCategories({
  //   sortBy: "name",
  //   order: "asc",
  // });

  // return (
  //   <>
  //     <Section>
  //       <Banner>
  //         <H2>Explore our wide range of nail care categories</H2>
  //       </Banner>
  //     </Section>
  //     <Section>
  //       <CategoryList categories={categories} />
  //     </Section>
  //   </>
  // );
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
