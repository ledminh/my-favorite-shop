import Section from "@/theme/Section";
import CategoryMenu from "@/components/shop/CategoryMenu";

import Banner from "@/theme/Banner";

import FilterPanel from "@/components/shop/FilterPanel";

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
      {/*Display Loading circle rotate icon */}
      <div className="flex justify-center">
        <svg className="w-16 h-16 mt-8 animate-spin" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      </div>
    </>
  );
}
