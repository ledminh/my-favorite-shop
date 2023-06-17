import { ComponentWithChildren, Product as ProductType } from "@/types";
import { faker } from "@faker-js/faker";

import Section from "@/theme/Section";
import { H2 } from "@/theme/typography";
import Product from "@/components/cart/Product";

const id = faker.string.uuid();
const product: ProductType = {
  id,
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  intro: faker.commerce.productDescription(),
  link: `/shop/${faker.lorem.slug()}/${id}`,
  images: [
    {
      id: "main_image_id",
      src: "https://picsum.photos/seed/1/600/600",
      alt: faker.commerce.productName(),
    },
    {
      id: faker.string.uuid(),
      src: "https://picsum.photos/seed/2/600/600",
      alt: faker.commerce.productName(),
    },
    {
      id: faker.string.uuid(),
      src: "https://picsum.photos/seed/3/600/600",
      alt: faker.commerce.productName(),
    },
    {
      id: faker.string.uuid(),
      src: "https://picsum.photos/seed/4/600/600",
      alt: faker.commerce.productName(),
    },
    {
      id: faker.string.uuid(),
      src: "https://picsum.photos/seed/5/600/600",
      alt: faker.commerce.productName(),
    },
  ],
  mainImageID: "main_image_id",
  price: Number(faker.commerce.price()) / 10,
};

export default function ShoppingCart() {
  return (
    <Wrapper>
      <Title>
        <H2>Shopping Cart</H2>
      </Title>
      <Section>
        <List>
          <Item>
            <Product product={product} />
          </Item>
          <Item>
            <Product product={product} />
          </Item>
          <Item>
            <Product product={product} />
          </Item>
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
