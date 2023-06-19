import Section from "@/theme/Section";
import getProducts from "@/data/products";

import Gallery from "@/components/product/Gallery";
import { H2, H3 } from "@/theme/typography";

import Footer from "@/components/product/Footer";

import { ComponentWithChildren } from "@/types";

export default function Loading() {
  // const product = getProduct(params.product_id);

  return (
    <>
      {/* HEADER */}
      <Section>
        <Title>
          {/* skelekon */}
          <div className="w-1/3 h-5 mb-4 bg-gray-300 rounded" />
        </Title>
      </Section>

      {/* BODY */}
      <Body>
        <Col>
          <Section>
            <GalleryWrapper>
              {/* skelekon */}
              <div className="w-1/3 h-5 mb-4 bg-gray-300 rounded" />
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
              {/* skelekon */}
              <div className="w-1/3 h-5 mb-4 bg-gray-300 rounded" />
            </Content>
          </Section>
          <Section>
            {/* skelekon */}
            <div className="w-1/3 h-5 mb-4 bg-gray-300 rounded" />
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
