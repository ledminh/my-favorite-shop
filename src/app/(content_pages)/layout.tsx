import { ComponentWithChildren } from "@/types";
import Header from "@/components/Header";

import Link from "next/link";
import { copyright } from "@/theme/metadata";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header full />
      </HeaderWrapper>
      <Main>{children}</Main>
      <Footer>
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>
        <Link href={copyright.link}>{copyright.holder}</Link>
      </Footer>
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
  return <main className="flex flex-col flex-grow">{children}</main>;
};

const Footer: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-center justify-center p-2 text-white bg-blue-950 gap-2">
      {children}
    </div>
  );
};
