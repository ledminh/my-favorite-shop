import { H2 } from "@/theme/typography";
import { ComponentWithChildren } from "@/types";

import Banner from "@/theme/Banner";
import Section from "@/theme/Section";

import CategoryList from "@/components/Shop/CategoryList";

import { getCategories } from "@/data/categories";
import { itemsPerPage } from "@/theme/metadata";

export default async function Shop() {
  const { items: categories, total } = await getCategories({
    sortBy: "name",
    order: "asc",
    offset: 0,
    limit: itemsPerPage,
  });

  return (
    <>
      <Section>
        <Banner>
          <H2>Explore our wide range of nail care categories</H2>
        </Banner>
      </Section>
      <Section>
        <CategoryList categories={categories} total={total} />
      </Section>
    </>
  );
}
