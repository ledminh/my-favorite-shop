import Section from "@/theme/Section";
import getProducts from "@/data/products";

import Gallery from "@/components/product/Gallery";
import { H2, H3 } from "@/theme/typography";

import Footer from "@/components/product/Footer";

import { ComponentWithChildren, Product } from "@/types";
import Variants from "@/components/product/Variants";

type Props = {
  params: {
    product_id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.product_id);

  return (
    <>
      {/* HEADER */}
      <Section>Go back to Category</Section>
      <Section>
        <Title>
          <H2>{product.name}</H2>
        </Title>
      </Section>
      {/* BODY */}
      <Body>
        <Col2>
          <Section>
            <GalleryWrapper>
              <Gallery
                images={product.images}
                mainImageID={product.mainImageID}
              />
            </GalleryWrapper>
          </Section>
        </Col2>

        {/* FOOTER */}
        <Col3>
          <Section>
            <Content>
              <SubHeader>
                <H3>Product Details</H3>
              </SubHeader>
              <SubSection>
                <p>{product.description}</p>
              </SubSection>

              {product.variants && (
                <SubSection>
                  <Variants
                    productID={product.id}
                    variants={product.variants}
                  />
                </SubSection>
              )}
              {product.promotion && (
                <SubSection>
                  <Promotion>{product.promotion.description}</Promotion>
                </SubSection>
              )}
            </Content>
          </Section>
          <Section>
            <Footer unitPrice={product.price} promotion={product.promotion} />
          </Section>
        </Col3>
      </Body>
    </>
  );
}

/**********************
 * Styles
 */
const Body: ComponentWithChildren = ({ children }) => {
  return <div className="lg:grid lg:grid-cols-5">{children}</div>;
};

const Col2: ComponentWithChildren = ({ children }) => {
  return (
    <div className="lg:col-start-1 lg:col-span-2 lg:flex lg:flex-col lg:justify-between ">
      {children}
    </div>
  );
};

const Col3: ComponentWithChildren = ({ children }) => {
  return (
    <div className="lg:col-start-3 lg:col-span-3 lg:flex lg:flex-col lg:justify-between">
      {children}
    </div>
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

const SubSection: ComponentWithChildren = ({ children }) => {
  return <div className="mb-8">{children}</div>;
};

/***********************
 * Components
 */
const Promotion: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-center justify-center p-2 text-lg font-semibold text-center text-red-500 bg-red-100 border-2 border-red-300 rounded-md">
      {children}
    </div>
  );
};

/**********************
 * Utils
 */

type GetProduct = (id: string) => Promise<Product>;

const getProduct: GetProduct = (id: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = getProducts(1)[0];
      resolve(product);
    }, 3000);
  });
};
