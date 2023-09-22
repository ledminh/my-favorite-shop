import type { ComponentWithChildren } from "@/types";

import Controls from "@/components/home/Controls";

import Header from "@/components/Header";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Controls />
    </Wrapper>
  );
}

/************************************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {children}
    </div>
  );
};

// Redeploy
