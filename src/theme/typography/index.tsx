import { ComponentWithChildren } from "@/types";

export const H1: ComponentWithChildren = ({ children }) => {
  return <h1 className="text-4xl font-bold lg:text-5xl">{children}</h1>;
};

export const H2: ComponentWithChildren = ({ children }) => {
  return <h2 className="text-3xl font-bold">{children}</h2>;
};
