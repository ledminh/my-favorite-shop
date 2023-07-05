import CategoryMenu from "@/components/shop/CategoryMenu";
import FilterPanel from "@/components/shop/FilterPanel";
import Banner from "@/theme/Banner";
import { H2 } from "@/theme/typography";
import { ComponentWithChildren, Product } from "@/types";

import Section from "@/theme/Section";
import getDBProducts from "@/data/products";

import ProductList from "@/components/shop/ProductList";
import { Button } from "@/theme/basics";

import { getCategories, getCategory } from "@/data/categories";

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
  const currentCategory = await getCategory({ slug: params.cat_slug });

  const sortBy = searchParams.sortBy || "name";
  const order = searchParams.order || "asc";

  const categories = await getCategories();

  const products = await getProducts(currentCategory.id, sortBy, order);

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
      <Section>
        <ProductList products={products} />
      </Section>
      <Section>
        <LoadMore>
          <Button>Load more</Button>
        </LoadMore>
      </Section>
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

/************************************************
 * Utils
 ************************************************/

type GetProducts = (
  catID: string,
  sortBy: "name" | "price",
  order: "asc" | "desc"
) => Promise<Product[]>;

const getProducts: GetProducts = (
  catID: string,
  sortBy: "name" | "price",
  order: "asc" | "desc"
) => {
  return new Promise((resolve, reject) => {
    const products = getDBProducts();
    resolve(products);
  });
};
