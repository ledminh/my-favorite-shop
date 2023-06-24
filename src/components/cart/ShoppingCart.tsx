"use client";

import { ComponentWithChildren } from "@/types";

import useCart from "@/utils/useCart";
import Section from "@/theme/Section";
import { H2 } from "@/theme/typography";
import OrderedProduct from "@/components/cart/OrderedProduct";

import getProducts from "@/data/products";

import type { OrderedProduct as OrderedProductType } from "@/types";
import { faker } from "@faker-js/faker";

export default function ShoppingCart() {
  const { cart } = useCart();

  return (
    <Wrapper>
      <Title>
        <H2>Shopping Cart</H2>
      </Title>
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
          <TotalPrice>$100</TotalPrice>
        </Total>
      </Section>
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

/*********************
 * Utils
 */

const getOrderedProducts = (count: number): OrderedProductType[] => {
  const products = getProducts(count);
  const orderedProducts: OrderedProductType[] = [];

  for (let i = 0; i < count; i++) {
    const product = products[i];
    orderedProducts.push({
      ...product,
      quantity: faker.number.int({ min: 1, max: 10 }),
    });
  }

  return orderedProducts;
};
