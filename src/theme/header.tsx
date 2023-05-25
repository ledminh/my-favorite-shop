import Link from "next/link";

import * as Type from "@/theme/header.type";

export const Logo: Type.Logo = () => {
  return <div>Logo</div>;
};

export const MainNav: Type.MainNav = ({ children }) => {
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

export const Header: Type.Header = ({ children }) => {
  return <header>{children}</header>;
};
