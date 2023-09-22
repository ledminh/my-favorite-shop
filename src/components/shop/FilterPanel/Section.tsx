import { ComponentWithChildren } from "@/types";

const Section: ComponentWithChildren = ({ children }) => {
  return <div className="items-center gap-2 sm:flex">{children}</div>;
};

export default Section;
