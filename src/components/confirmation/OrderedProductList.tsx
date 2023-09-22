import { ComponentWithChildren, WithID } from "@/types";
import { OrderedProduct as OrderedProductType } from "@/types";
import OrderedProduct from "./OrderedProduct";

type Props = {
  orderedProducts: WithID<OrderedProductType>[];
};

export default function OrderedProductList({ orderedProducts }: Props) {
  return (
    <List>
      {orderedProducts.map((orderedProduct) => (
        <Item key={orderedProduct.id}>
          <OrderedProduct orderedProduct={orderedProduct} />
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
