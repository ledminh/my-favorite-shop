import { ComponentWithChildren } from "@/types";
import { Product as ProductType } from "@/types";
import OrderedProduct from "./OrderedProduct";

type Props = {
  products: ProductType[];
};

export default function OrderedProductList({ products }: Props) {
  return (
    <List>
      {products.map((product) => (
        <Item key={product.id}>
          <OrderedProduct product={product} />
        </Item>
      ))}
    </List>
  );
}

/****************
 * Styles
 */

const List: ComponentWithChildren = ({ children }) => (
  <ul
    role="list"
    className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200"
  >
    {children}
  </ul>
);

const Item: ComponentWithChildren = ({ children }) => <li>{children}</li>;
