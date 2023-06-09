import type { ComponentWithChildren, Product as ProductType } from "@/types";
import Product from "./Product";

type Props = {
  products: ProductType[];
};

export default function ProductList({ products }: Props) {
  return (
    <List>
      {products.map((product) => (
        <Item key={product.id}>
          <Product key={product.id} product={product} />
        </Item>
      ))}
    </List>
  );
}

/************************
 * Styles
 */
const List: ComponentWithChildren = ({ children }) => {
  return <ul className="w-11/12 mx-auto">{children}</ul>;
};

const Item: ComponentWithChildren = ({ children }) => {
  return <li className="">{children}</li>;
};
