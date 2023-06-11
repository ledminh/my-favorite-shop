import type { ComponentWithChildren, Product as ProductType } from "@/types";
import Product from "./Product";

type Props = {
  products: ProductType[];
};

export default function ProductList({ products }: Props) {
  return (
    <List>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </List>
  );
}

/************************
 * Styles
 */
const List: ComponentWithChildren = ({ children }) => {
  return (
    <ul className="grid w-11/12 mx-auto mb-5 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
};
