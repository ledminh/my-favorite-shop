import { ComponentWithChildren } from "@/types";
import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header full />
      </HeaderWrapper>
      <Main>{children}</Main>
      <Footer>&copy; {new Date().getFullYear()} Minh Le</Footer>
    </Wrapper>
  );
}

/********************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="container flex flex-col justify-between w-full max-w-6xl min-h-screen bg-white shadow-xl shadow-slate-500">
      {children}
    </div>
  );
};

const HeaderWrapper: ComponentWithChildren = ({ children }) => {
  return <div>{children}</div>;
};

const Main: ComponentWithChildren = ({ children }) => {
  return <div className="flex flex-col flex-grow">{children}</div>;
};

const Footer: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-center p-2 text-white bg-blue-950">
      {children}
    </div>
  );
};
