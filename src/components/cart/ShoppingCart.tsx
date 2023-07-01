"use client";

import { ComponentWithChildren } from "@/types";

import useCart from "@/utils/useCart";
import Section from "@/theme/Section";
import { H2 } from "@/theme/typography";
import OrderedProduct from "@/components/cart/OrderedProduct";

import getProducts from "@/data/products";

import type { OrderedProduct as OrderedProductType, Variant } from "@/types";
import { faker } from "@faker-js/faker";
import { getPrice } from "@/utils/getPrice";

import useVariant from "@/utils/useVariant";

export default function ShoppingCart() {
  const { cart } = useCart();

  const { getSelectedVariant } = useVariant();

  const totalPrice = cart.reduce((total, orderedProduct) => {
    if (orderedProduct.selectedVariant) {
      return (
        total +
        getPrice(orderedProduct.selectedVariant) * orderedProduct.quantity
      );
    }

    return total + getPrice(orderedProduct) * orderedProduct.quantity;
  }, 0);

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
              <TotalPrice>${totalPrice.toFixed(2)}</TotalPrice>
            </Total>
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
