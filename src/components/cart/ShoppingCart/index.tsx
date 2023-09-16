"use client";

import { ComponentWithChildren } from "@/types";

import Section from "@/theme/Section";
import { H2 } from "@/theme/typography";
import OrderedProduct from "@/components/cart/OrderedProduct";
import useShoppingCart from "./hooks";
import { shippingFee } from "@/theme/metadata";

export default function ShoppingCart() {
  const { totalPrice, cart } = useShoppingCart();

  return (
    <Wrapper>
      <Title>
        <H2>Shopping Cart</H2>
      </Title>
      {cart.length === 0 && (
        <div className="flex items-center justify-center h-96">
          <p className="text-2xl text-gray-500">Your cart is empty</p>
        </div>
      )}

      {cart.length !== 0 && (
        <>
          <Section>
            <List>
              {cart.map((orderedProduct) => (
                <Item key={orderedProduct.id}>
                  <OrderedProduct orderedProduct={orderedProduct} />
                </Item>
              ))}
            </List>
          </Section>
          <Section>
            <Total>
              <TotalLabel>Total</TotalLabel>
              <TotalPrice>${totalPrice.toLocaleString()}</TotalPrice>
            </Total>
          </Section>
          <Section>
            <span className="mx-5 text-sm italic font-semibold">
              Shipping fee (${shippingFee}) and taxes will be added at Checkout
              page
            </span>
          </Section>
        </>
      )}
    </Wrapper>
  );
}

/********************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => (
  <div className="w-full py-6 bg-gray-300 md:shadow-md md:rounded-xl md:shadow-black">
    {children}
  </div>
);

const Title: ComponentWithChildren = ({ children }) => (
  <div className="px-5 font-semibold">{children}</div>
);

const List: ComponentWithChildren = ({ children }) => (
  <ul className="flex flex-col gap-8 px-5">{children}</ul>
);

const Item: ComponentWithChildren = ({ children }) => (
  <li className="">{children}</li>
);

const Total: ComponentWithChildren = ({ children }) => (
  <div className="flex justify-between px-5 text-2xl font-semibold">
    {children}
  </div>
);

const TotalLabel: ComponentWithChildren = ({ children }) => (
  <div>{children}</div>
);

const TotalPrice: ComponentWithChildren = ({ children }) => (
  <div className="text-red-700">{children}</div>
);
