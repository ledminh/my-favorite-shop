import metadata from "@/theme/metadata";
import "./globals.css";
import { Inter } from "next/font/google";
import { Logo, MainNav, MainNavItem, Header } from "@/theme/header";

import { Button } from "@/theme/basics";

const inter = Inter({ subsets: ["latin"] });

export { default as metadata } from "@/theme/metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>
          <Logo />
          <MainNav>
            <MainNavItem href="/about">About</MainNavItem>
            <MainNavItem href="/shop">Shop</MainNavItem>
            <MainNavItem href="/blog">Cart</MainNavItem>
          </MainNav>
          <Button>
            <span>Sign In</span>
          </Button>
        </Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
