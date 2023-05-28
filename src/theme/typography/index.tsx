import { ComponentWithChildren } from "@/theme/types";

export const H2: ComponentWithChildren = ({ children }) => {
  return <h2 className="text-3xl font-bold">{children}</h2>;
};
