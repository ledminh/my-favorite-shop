import Section from "@/theme/Section";
import getProducts from "@/data/products";

import Gallery from "@/components/product/Gallery";
import { H2, H3 } from "@/theme/typography";

import Footer from "@/components/product/Footer";

import { ComponentWithChildren } from "@/types";

export default function Loading() {
  return (
    <>
      {/* HEADER */}
      <Section>
        <Title>
          <div className="w-11/12 h-9 mb-4 bg-gray-300 rounded" />
        </Title>
      </Section>

      {/* BODY */}
      <Body>
        <Col2>
          <Section>
            <GalleryWrapper>
              <Gallery skeleton={true} />
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
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-11/12 h-5 mb-4 bg-gray-300 rounded" />
              ))}
            </Content>
          </Section>
          <Section>
            <Footer />
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
    <div className="inline-block px-5 ml-4 font-semibold w-60 border-b-4 border-red-400">
      {children}
    </div>
  );
};

const GalleryWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="px-5">{children}</div>;
};

const Content: ComponentWithChildren = ({ children }) => {
  return <div className="px-5 w-full">{children}</div>;
};

const SubHeader: ComponentWithChildren = ({ children }) => {
  return (
    <div className="inline-block p-1 mb-4 border-b-2 border-red-300">
      {children}
    </div>
  );
};
