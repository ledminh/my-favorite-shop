import { ComponentWithChildren } from "@/theme/types";

export const Main: ComponentWithChildren = ({ children }) => (
  <main>{children}</main>
);

export const FullPageContainer: ComponentWithChildren = ({ children }) => (
  <div className="absolute w-screen h-screen">{children}</div>
);
