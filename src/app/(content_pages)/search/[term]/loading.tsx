import Section from "@/theme/Section";
import { H2 } from "@/theme/typography";
import ProductList from "@/components/shop/ProductList";
import { ComponentWithChildren } from "@/types";

export default function Layout() {
  return (
    <>
      {/* HEADER */}
      <Section>
        <Title>
          <H2>
            Search results for: <Term />
          </H2>
        </Title>
      </Section>

      {/* CONTENT */}
      <Section>
        <ProductList skeleton={true} />
      </Section>
    </>
  );
}

/*************************
 * Styles
 */
const Title: ComponentWithChildren = ({ children }) => {
  return <div className="pl-5">{children}</div>;
};

const Term = () => {
  return <div className="bg-blue-300 w-[200px] inline-block" />;
};
