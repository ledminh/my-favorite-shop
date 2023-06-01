import metadata from "@/theme/metadata";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import type { ComponentWithChildren } from "@/types";

import Image from "next/image";
import homepageBackground from "@/assets/images/homepage_background.jpg";

export { default as metadata } from "@/theme/metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <BackgroundImage>
          <Image
            src={homepageBackground}
            alt="Hero Image"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </BackgroundImage>
        <Overlay>{children}</Overlay>
      </body>
    </html>
  );
}

/*********************
 * Styles
 */
export const BackgroundImage: ComponentWithChildren = ({ children }) => {
  return <div className="absolute w-full h-full min-w-[337px]">{children}</div>;
};

export const Overlay: ComponentWithChildren = ({ children }) => {
  return (
    <div className="absolute w-full h-full min-w-[337px] bg-red-200/70">
      {children}
    </div>
  );
};
