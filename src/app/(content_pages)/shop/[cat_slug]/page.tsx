import CategoryMenu from "@/components/shop/CategoryMenu";
import FilterPanel from "@/components/shop/FilterPanel";
import Banner from "@/theme/Banner";
import { H2 } from "@/theme/typography";
import { ComponentWithChildren } from "@/types";

import categories from "@/data/categories";

type Props = {
  params: {
    cat_slug: string;
  };
};

export default function ShopCategoryPage({ params }: Props) {
  const currentCategory = getCurrentCategory(params.cat_slug);

  return (
    <>
      {/* HEADER */}
      <CategoryMenuWrapper>
        <CategoryMenu currentCategory={currentCategory} />
      </CategoryMenuWrapper>
      <CategoryTitle>
        <Banner>
          <BannerContent>
            <H2>{currentCategory.name}</H2>
            <Description>{currentCategory.description}</Description>
          </BannerContent>
        </Banner>
      </CategoryTitle>

      {/* CONTENT */}
      <FilterPanel />
    </>
  );
}

/************************
 * Styles
 */

const CategoryMenuWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="mt-10 mx-auto">{children}</div>;
};

const CategoryTitle: ComponentWithChildren = ({ children }) => {
  return <div className="mt-10 mb-5">{children}</div>;
};

const BannerContent: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {children}
    </div>
  );
};

const Description: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <p className="text-lg font-semibold text-center text-red-500">
        {children}
      </p>
    </div>
  );
};

/**************************
 * Utils
 */
const getCurrentCategory = (cat_slug: string) => {
  const cat = categories.find((cat) => cat.link === "/shop/" + cat_slug);

  if (!cat) {
    throw new Error("Category not found");
  }

  return cat;
};
