import { ComponentWithChildren } from "@/types";

import Section from "@/theme/Section";
import CategoryMenu from "@/components/shop/CategoryMenu";

import Banner from "@/theme/Banner";

import FilterPanel from "@/components/shop/FilterPanel";
import ProductList from "@/components/shop/ProductList";

export default function Loading() {
  return (
    <>
      {/* HEADER */}
      <Section>
        <CategoryMenu skeleton={true} />
      </Section>
      <Section>
        <Banner>
          <div className="w-1/3 h-5 mb-4 bg-gray-300 rounded" />
          <div className="w-1/2 h-4 mb-4 bg-gray-300 rounded" />
        </Banner>
      </Section>

      {/* CONTENT */}
      <Section>
        <FilterPanel skeleton={true} />
      </Section>
      <Section>
        <ProductList skeleton={true} />
      </Section>
    </>
  );
}
