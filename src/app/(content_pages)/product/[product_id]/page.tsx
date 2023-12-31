import Section from "@/theme/Section";
import { getProduct } from "@/data/products";

import CategoryLink from "@/components/product/CategoryLink";

import Gallery from "@/components/product/Gallery";
import { H2, H3 } from "@/theme/typography";

import Footer from "@/components/product/Footer";

import { ComponentWithChildren } from "@/types";
import Variants from "@/components/product/Variants";
import Promotion from "@/components/product/Promotion";

type Props = {
  params: {
    product_id: string;
  };
  searchParams: {
    var?: string;
  };
};

export default async function ProductPage({ params, searchParams }: Props) {
  const product = await getProduct({ id: params.product_id });

  const { var: selectedVariantID } = searchParams;

  return (
    <>
      {/* HEADER */}
      <Section>
        <CategoryLink {...product.category} />
      </Section>
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
              <SubSection>
                <Variants
                  product={product}
                  selectedVariantID={selectedVariantID}
                />
              </SubSection>
              <SubSection>
                <Promotion
                  product={product}
                  selectedVariantID={selectedVariantID}
                />
              </SubSection>
            </Content>
          </Section>
          <Section>
            <Footer product={product} selectedVariantID={selectedVariantID} />
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
  if (!children) {
    return null;
  }

  return <div className="mb-8">{children}</div>;
};
