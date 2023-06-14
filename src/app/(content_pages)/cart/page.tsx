import { ComponentWithChildren, Product as ProductType } from "@/types";

import ShoppingCart from "@/components/cart/ShoppingCart";
import ShippingAddress from "@/components/cart/ShippingAddress";

export default function CartPage() {
  return (
    <Wrapper>
      <Box>
        <ShoppingCart />
      </Box>
      <Box>
        <ShippingAddress />
      </Box>
    </Wrapper>
  );
}

/********************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => (
  <div className="flex flex-wrap justify-center gap-8 md:justify-between md:items-start md:flex-nowrap">
    {children}
  </div>
);

const Box: ComponentWithChildren = ({ children }) => (
  <div className="flex justify-center basis-full md:basis-1/2 md:p-5">
    {children}
  </div>
);
