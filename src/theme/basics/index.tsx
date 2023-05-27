import { ComponentWithChildren } from "../types";

export const Button: ComponentWithChildren = ({ children }) => {
  return <button>{children}</button>;
};
