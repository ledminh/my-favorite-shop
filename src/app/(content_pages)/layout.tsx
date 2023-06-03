import { ComponentWithChildren } from "@/types";
import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Header full />
      {children}
    </Wrapper>
  );
}

/********************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      {children}
    </div>
  );
};
