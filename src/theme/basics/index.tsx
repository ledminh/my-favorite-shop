import { ComponentWithChildren } from "@/theme/types";

export const Button: ComponentWithChildren = ({ children }) => {
  return <button>{children}</button>;
};
