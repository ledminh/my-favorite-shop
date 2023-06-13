"use client";

import Section from "@/components/Section";
import products from "@/data/products";

import Gallery from "@/components/product/Gallery";
import { H2, H3 } from "@/theme/typography";

import Footer from "@/components/product/Footer";

import { ComponentWithChildren } from "@/types";

type Props = {
  params: {
    cat_slug: string;
    product_id: string;
  };
};

export default function ProductPage({ params }: Props) {
  //   const product = getProduct(params.product_id);

  const images: { id: string; src: string; alt: string }[] = [];

  for (let j = 0; j < 4; j++) {
    images.push({
      id: `image-${j}`,
      src: `https://picsum.photos/seed/${j}/300/300`,
      alt: `Nail Polish ${j + 1}`,
    });
  }

  return (
    <>
      {/* HEADER */}
      <Section>
        <Title>
          <H2>Nail Polish 1</H2>
        </Title>
      </Section>

      {/* BODY */}
      <Body>
        <Col>
          <Section>
            <GalleryWrapper>
              <Gallery images={images} mainImageID="image-0" />
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
              <p>
                This is the detail of the product. Add something to make it
                longer. Add a little bit more to make it even longer.
              </p>
            </Content>
          </Section>
          <Section>
            <Footer />
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
  const product = products.find((product) => product.id === id);

  if (!product) {
    throw new Error(`Product with id "${id}" not found`);
  }

  return product;
}
