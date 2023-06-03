import type { ComponentWithChildren } from "@/types";
import { Logo } from "@/theme/Logo";

import Menu from "./Menu";

export default function HeaderFull() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
    </Wrapper>
  );
}

/*********************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="container flex flex-row p-2 bg-blue-950 flex-nowrap sm:bg-transparent">
      {children}
    </div>
  );
};

const LogoWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="border-2 border-blue-700 basis-4/5 sm:basis-1/2">
      {children}
    </div>
  );
};

const MenuWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-center content-center justify-end border-2 border-blue-700 basis-1/5 sm:basis-1/2">
      {children}
    </div>
  );
};
