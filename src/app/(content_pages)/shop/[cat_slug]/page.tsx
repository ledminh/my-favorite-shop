import CategoryMenu from "@/components/shop/CategoryMenu";
import FilterPanel from "@/components/shop/FilterPanel";
import Banner from "@/theme/Banner";
import { H2 } from "@/theme/typography";
import { ComponentWithChildren } from "@/types";

import Section from "@/theme/Section";

import { getProducts } from "@/data/products";

import ProductList from "@/components/shop/ProductList";

import { getCategories } from "@/data/categories";

import { itemsPerPage } from "@/theme/metadata";

type Props = {
  params: {
    cat_slug: string;
  };
  searchParams: {
    sortBy?: "name" | "price";
    order?: "asc" | "desc";
  };
};

export default async function ShopCategoryPage({
  params,
  searchParams,
}: Props) {
  const categories = await getCategories();
  const currentCategory = categories.find(
    (cat) => cat.link === "/shop/" + params.cat_slug
  );

  if (!currentCategory) {
    throw new Error("Category not found");
  }

  const sortBy = searchParams.sortBy || "name";
  const order = searchParams.order || "asc";

  const products = await getProducts({
    catID: currentCategory.id,
    sortBy,
    order,
    offset: 0,
    limit: itemsPerPage,
  });

  return (
    <>
      {/* HEADER */}
      <Section>
        <CategoryMenu categories={categories} />
      </Section>
      <Section>
        <Banner>
          <H2>{currentCategory.name}</H2>
          <Description>{currentCategory.description}</Description>
        </Banner>
      </Section>

      {/* CONTENT */}
      <Section>
        <FilterPanel sortByInit={sortBy} orderInit={order} />
      </Section>
      <ProductList
        productsInit={products}
        sortBy={sortBy}
        order={order}
        catID={currentCategory.id}
      />
    </>
  );
}

/************************
 * Styles
 */

const Description: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <p className="text-lg font-semibold text-center text-red-500">
        {children}
      </p>
    </div>
  );
};

const LoadMore: ComponentWithChildren = ({ children }) => {
  return <div className="w-[200px] mx-auto">{children}</div>;
};
