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
    <div className="container flex flex-row bg-blue-950 flex-nowrap">
      {children}
    </div>
  );
};

const LogoWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="basis-4/5">{children}</div>;
};

const MenuWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-center content-center justify-end basis-1/5">
      {children}
    </div>
  );
};
