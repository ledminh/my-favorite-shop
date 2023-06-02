import { HamburgerIcon } from "@/theme/Icons";
import type { ComponentWithChildren } from "@/types";
export default function Menu() {
  return (
    <Wrapper>
      <HamburgerIcon className="w-full h-full" />
    </Wrapper>
  );
}

/**************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => {
  return <div className="border-2 border-red-800">{children}</div>;
};
