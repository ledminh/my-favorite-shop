import { ComponentWithChildren } from "@/types";

export const H1: ComponentWithChildren = ({ children }) => {
  return <h1 className="text-3xl font-bold lg:text-4xl">{children}</h1>;
};

export const H2: ComponentWithChildren = ({ children }) => {
  return <h2 className="text-3xl">{children}</h2>;
};

export const H3: ComponentWithChildren = ({ children }) => {
  return <h3 className="text-xl">{children}</h3>;
};

export const H4: ComponentWithChildren = ({ children }) => {
  return <h4 className="text-lg">{children}</h4>;
};
