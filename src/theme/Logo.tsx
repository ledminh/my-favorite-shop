import { H1 } from "@/theme/typography";
import { ReactNode } from "react";

type Props = {
  full?: boolean;
};

export function Logo({ full }: Props) {
  return (
    <Wrapper full={full}>
      <H1>MY FAVORITE SHOP</H1>
    </Wrapper>
  );
}

const Wrapper = (props: { full?: boolean; children: ReactNode }) => {
  const { full, children } = props;

  return (
    <div className={`inline-block p-3 text-gray-400 ${!full && "bg-gray-900"}`}>
      {children}
    </div>
  );
};
