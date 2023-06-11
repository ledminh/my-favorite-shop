import { ComponentWithChildren } from "@/types";

const Section: ComponentWithChildren = ({ children }) => {
  return <section className="w-full mx-auto mt-10">{children}</section>;
};

export default Section;
