"use client";

import Section from "@/components/Section";
import getProducts from "@/data/products";

import Gallery from "@/components/product/Gallery";
import { H2, H3 } from "@/theme/typography";

import Footer from "@/components/product/Footer";

import { ComponentWithChildren, Product } from "@/types";

import { faker } from "@faker-js/faker";

const product: Product = {
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  intro: faker.commerce.productDescription(),
  link: `/shop/${faker.lorem.slug()}/${faker.lorem.slug()}`,
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

type Props = {
  params: {
    cat_slug: string;
    product_id: string;
  };
};

export default function ProductPage({ params }: Props) {
  // const product = getProduct(params.product_id);

  return (
    <>
      {/* HEADER */}
      <Section>
        <Title>
          <H2>{product.name}</H2>
        </Title>
      </Section>

      {/* BODY */}
      <Body>
        <Col>
          <Section>
            <GalleryWrapper>
              <Gallery
                images={product.images}
                mainImageID={product.mainImageID}
              />
            </GalleryWrapper>
          </Section>
        </Col>

        {/* FOOTER */}
        <Col>
          <Section>
            <Content>
              <SubHeader>
                <H3>Product Details</H3>
              </SubHeader>
              <p>{product.description}</p>
            </Content>
          </Section>
          <Section>
            <Footer unitPrice={product.price} />
          </Section>
        </Col>
      </Body>
    </>
  );
}

/**********************
 * Styles
 */
const Body: ComponentWithChildren = ({ children }) => {
  return <div className="lg:flex">{children}</div>;
};

const Col: ComponentWithChildren = ({ children }) => {
  return (
    <div className="lg:flex lg:flex-col lg:justify-between">{children}</div>
  );
};

const Title: ComponentWithChildren = ({ children }) => {
  return (
    <div className="inline-block px-5 ml-4 font-semibold border-b-4 border-red-400">
      {children}
    </div>
  );
};

const GalleryWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="px-5">{children}</div>;
};

const Content: ComponentWithChildren = ({ children }) => {
  return <div className="px-5">{children}</div>;
};

const SubHeader: ComponentWithChildren = ({ children }) => {
  return (
    <div className="inline-block p-1 mb-4 border-b-2 border-red-300">
      {children}
    </div>
  );
};

/**********************
 * Utils
 */

function getProduct(id: string) {
  const products = getProducts();
  const product = products.find((product) => product.id === id);

  if (!product) {
    throw new Error(`Product with id "${id}" not found`);
  }

  return product;
}
