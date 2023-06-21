import Section from "@/theme/Section";
import { H2 } from "@/theme/typography";
import ProductList from "@/components/shop/ProductList";
import { ComponentWithChildren } from "@/types";

type Props = {
  params: {
    term: string;
  };
};

export default function SearchPage({ params }: Props) {
  const { term } = params;
  return (
    <>
      {/* HEADER */}
      <Section>
        <Title>
          <H2>
            Search results for: <Term>{term}</Term>
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

const Term: ComponentWithChildren = ({ children }) => {
  return <span className="bg-blue-300 px-3">{children}</span>;
};
