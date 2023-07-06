import Section from "@/theme/Section";
import { H2 } from "@/theme/typography";
import ProductList from "@/components/shop/ProductList";
import { ComponentWithChildren, Product as ProductType } from "@/types";

import { NotFoundIcon } from "@/theme/Icons";
import { getProducts } from "@/data/products";
import { itemsPerPage } from "@/theme/metadata";

type Props = {
  params: {
    term: string;
  };
};

export default async function SearchPage({ params }: Props) {
  const { term } = params;

  const products = await getProducts({
    searchTerm: term,
    sortBy: "name",
    order: "asc",
    offset: 0,
    limit: itemsPerPage,
  });

  return (
    <>
      {/* HEADER */}
      <Section>
        <Title>
          <H2>
            Search results for: <Term>{term}</Term>
          </H2>
        </Title>
      </Section>

      {/* CONTENT */}
      <Section>
        {products.length === 0 && (
          <NoProduct>
            <NotFoundIcon />
            <span>No product found!</span>
          </NoProduct>
        )}
        {products.length > 0 && (
          <ProductList
            productsInit={products}
            searchTerm={term}
            sortBy="name"
            order="asc"
          />
        )}
      </Section>
    </>
  );
}

/*************************
 * Styles
 */
const Title: ComponentWithChildren = ({ children }) => {
  return <div className="pl-5">{children}</div>;
};

const Term: ComponentWithChildren = ({ children }) => {
  return <span className="px-3 bg-blue-300">{children}</span>;
};

const NoProduct: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-5 text-xl font-bold text-white bg-gray-600 border-y-2 border-red-950">
      {children}
    </div>
  );
};
