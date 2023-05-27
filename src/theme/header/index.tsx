import Link from "next/link";

import * as Type from "./header.type";
import { ComponentWithChildren } from "@/theme/types";

export const Logo = () => {
  return <div>Logo</div>;
};

export const MainNav: ComponentWithChildren = ({ children }) => {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};

export const MainNavItem: Type.MainNavItem = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>
        <span>{children}</span>
      </Link>
    </li>
  );
};

export const Header: ComponentWithChildren = ({ children }) => {
  return <header>{children}</header>;
};
