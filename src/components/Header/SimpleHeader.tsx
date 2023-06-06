import { H2 } from "@/theme/typography";

import type { ComponentWithChildren } from "@/types";
import { Logo } from "@/theme/Logo";

export default function HeaderFull() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Slogan>
        <H2>Transform your look with our nail essentials</H2>
      </Slogan>
    </Wrapper>
  );
}

/*********************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="container max-w-5xl p-6 pb-0 border-4 border-white mb-9 rounded-2xl">
      {children}
    </div>
  );
};

const LogoWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="-translate-y-16">{children}</div>;
};

const Slogan: ComponentWithChildren = ({ children }) => {
  return (
    <div className="font-bold text-center -translate-y-6 text-blue-950">
      {children}
    </div>
  );
};
