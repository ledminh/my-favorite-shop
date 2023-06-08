import { ComponentWithChildren } from "@/types";
import ProductItem from "./ProductItem";

type Props = {
  products: any[];
};

export default function ProductList({ products }: Props) {
  return (
    <Wrapper>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Wrapper>
  );
}

/************************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {children}
    </div>
  );
};
