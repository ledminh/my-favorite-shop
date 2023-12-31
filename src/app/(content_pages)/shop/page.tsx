import { H2 } from "@/theme/typography";

import Banner from "@/theme/Banner";
import Section from "@/theme/Section";

import CategoryList from "@/components/shop/CategoryList";

import { getCategories } from "@/data/categories";
import { itemsPerPage, shopIntro } from "@/theme/metadata";

export const revalidate = 0;

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
          <H2>{shopIntro}</H2>
        </Banner>
      </Section>
      <Section>
        <CategoryList categories={categories} total={total} />
      </Section>
    </>
  );
}
