import { ComponentWithChildren } from "@/theme/types";

export const Main: ComponentWithChildren = ({ children }) => (
  <main>{children}</main>
);

export const FullPageContainer: ComponentWithChildren = ({ children }) => (
  <div>{children}</div>
);

export const ImageWrapper: ComponentWithChildren = ({ children }) => (
  <div>{children}</div>
);
