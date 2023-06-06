import Intro from "@/theme/Intro";
import { H2 } from "@/theme/typography";
import { ComponentWithChildren } from "@/types";

export default function ShopCategoryPage() {
  return (
    <>
      <Intro>
        <H2>NAIL POLISH</H2>
      </Intro>
      <Description>Test</Description>
    </>
  );
}

/************************
 * Styles
 */
const Description: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <p className="text-lg text-center">{children}</p>
    </div>
  );
};
