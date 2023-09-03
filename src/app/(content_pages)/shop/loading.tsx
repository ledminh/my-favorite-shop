import Section from "@/theme/Section";
import Banner from "@/theme/Banner";
import { H2 } from "@/theme/typography";

import CategoryList from "@/components/Shop/CategoryList";

export default function Loading() {
  return (
    <>
      <Section>
        <Banner>
          <H2>Explore our wide range of nail care categories</H2>
        </Banner>
      </Section>
      <Section>
        <CategoryList skeleton={true} />
      </Section>
    </>
  );
}
