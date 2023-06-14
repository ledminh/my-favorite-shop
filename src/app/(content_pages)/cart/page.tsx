import { ComponentWithChildren, Product as ProductType } from "@/types";

import ShoppingCart from "@/components/cart/ShoppingCart";
import ContactForm from "@/components/cart/ContactForm";

export default function CartPage() {
  return (
    <Wrapper>
      <Box>
        <ShoppingCart />
      </Box>
      <Box>
        <ContactForm />
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
