import { ComponentWithChildren } from "@/types";

const Section: ComponentWithChildren = ({ children }) => {
  return (
    <section className="w-full mt-10 last-of-type:mb-8">{children}</section>
  );
};

export default Section;
