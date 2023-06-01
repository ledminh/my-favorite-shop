import { H2 } from "@/theme/typography";

import type { ComponentWithChildren } from "@/types";
import { Wrapper } from "./Wrapper";

export default function HeaderFull() {
  return (
    <Wrapper>
      <Name>Nail Essential</Name>
      <Slogan>
        <H2>Transform your look with our nail essentials</H2>
      </Slogan>
    </Wrapper>
  );
}

/*********************
 * Styles
 */

export const Name: ComponentWithChildren = ({ children }) => {
  const text = "text-2xl text-white font-semibold";
  const structure = "inline-block p-3";
  const bg = "bg-blue-950";
  const transform = "-translate-y-14";

  return (
    <div className={`${text} ${structure} ${bg} ${transform}`}>{children}</div>
  );
};

export const Slogan: ComponentWithChildren = ({ children }) => {
  return (
    <div className="text-center -translate-y-6 text-blue-950">{children}</div>
  );
};
