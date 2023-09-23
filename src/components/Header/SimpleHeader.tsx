import { H2 } from "@/theme/typography";

import type { ComponentWithChildren } from "@/types";
import { Logo } from "@/theme/Logo";
import { slogan } from "@/theme/metadata";

export default function SimpleHeader() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Slogan>
        <H2>{slogan}</H2>
      </Slogan>
    </Wrapper>
  );
}

/*********************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="container max-w-5xl p-6 pb-0 border-4 border-gray-300 shadow-md bg-gray-100/10 mb-9 rounded-2xl shadow-black/60">
      {children}
    </div>
  );
};

const LogoWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="-translate-y-16">{children}</div>;
};

const Slogan: ComponentWithChildren = ({ children }) => {
  return (
    <div className="font-bold text-center text-gray-200 -translate-y-6">
      {children}
    </div>
  );
};
