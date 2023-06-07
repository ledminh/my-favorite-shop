import CategoryMenu from "@/components/shop/CategoryMenu";
import Banner from "@/theme/Banner";
import { H2 } from "@/theme/typography";
import { ComponentWithChildren } from "@/types";

export default function ShopCategoryPage() {
  return (
    <>
      <CategoryMenuWrapper>
        <CategoryMenu />
      </CategoryMenuWrapper>
      <CategoryName>
        <Banner>
          <BannerContent>
            <H2>NAIL POLISH</H2>
          </BannerContent>
        </Banner>
      </CategoryName>
      <Description>A wide range of nail polish colors</Description>
    </>
  );
}

/************************
 * Styles
 */

const CategoryMenuWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="mt-10 mx-auto">{children}</div>;
};

const CategoryName: ComponentWithChildren = ({ children }) => {
  return <div className="my-10">{children}</div>;
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
