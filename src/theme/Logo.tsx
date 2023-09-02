import { ComponentWithChildren } from "@/types";
import { H1 } from "@/theme/typography";

export function Logo() {
  return (
    <Wrapper>
      <H1>Nail Essential</H1>
    </Wrapper>
  );
}

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="inline-block p-3 text-gray-400 bg-blue-950">{children}</div>
  );
};
