import Section from "@/theme/Section";
import { H2 } from "@/theme/typography";
import ProductList from "@/components/shop/ProductList";
import { ComponentWithChildren, Product as ProductType } from "@/types";

import getProducts from "@/data/products";
import { NotFoundIcon } from "@/theme/Icons";

type Props = {
  params: {
    term: string;
  };
};

export default async function SearchPage({ params }: Props) {
  const { term } = params;

  const products = await getSearchedProducts(term);

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
        {products.length > 0 && <ProductList products={products} />}
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
  return <span className="bg-blue-300 px-3">{children}</span>;
};

const NoProduct: ComponentWithChildren = ({ children }) => {
  return (
    <div className="font-bold text-xl flex flex-col justify-center items-center w-full h-full border-y-2 border-red-950 py-5 bg-gray-600 text-white">
      {children}
    </div>
  );
};

/******************
 * Utils
 */
function getSearchedProducts(term: string): Promise<ProductType[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getProducts(2)), 1000);
  });
}
