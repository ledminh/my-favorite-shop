import ChangeCategory from "@/components/shop/ChangeCategory";
import Banner from "@/theme/Banner";
import { H2 } from "@/theme/typography";
import { ComponentWithChildren } from "@/types";

export default function ShopCategoryPage() {
  return (
    <>
      <ChangeCategory />
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
const CategoryName: ComponentWithChildren = ({ children }) => {
  return <div className="my-5">{children}</div>;
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
