import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import type { ComponentWithChildren } from "@/types";

import Image from "next/image";
import homepageBackground from "@/assets/images/homepage_background.jpg";

import { title, description, author } from "@/theme/metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
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
  return <div className="absolute w-full h-full min-w-[350px]">{children}</div>;
};

export const Overlay: ComponentWithChildren = ({ children }) => {
  return (
    <div className="absolute w-full h-full min-w-[350px] bg-neutral-700/80 overflow-y-scroll">
      {children}
    </div>
  );
};
