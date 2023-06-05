import type { ComponentWithChildren } from "@/types";
import { Logo } from "@/theme/Logo";

import Menu from "./Menu";
import Link from "next/link";

export default function HeaderFull() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link href={"/"}>
          <Logo />
        </Link>
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
    <div className="flex flex-row p-2 bg-blue-950 flex-nowrap">{children}</div>
  );
};

const LogoWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="basis-4/5 sm:basis-1/2 md:basis-2/5 lg:flex lg:items-center">
      {children}
    </div>
  );
};

const MenuWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-center content-center justify-end basis-1/5 sm:basis-1/2 md:basis-3/5">
      {children}
    </div>
  );
};
