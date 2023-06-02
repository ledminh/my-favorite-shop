import type { ComponentWithChildren } from "@/types";
import { Logo } from "@/theme/Logo";

import Menu from "./Menu";

export default function HeaderFull() {
  return (
    <Wrapper>
      <Logo />
      <Menu />
    </Wrapper>
  );
}

/*********************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="container flex flex-row border-2 border-red-700 flex-nowrap">
      {children}
    </div>
  );
};
