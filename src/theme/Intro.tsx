import { ComponentWithChildren } from "@/types";

const Intro: ComponentWithChildren = ({ children }) => {
  return (
    <div className="px-2 py-4 font-semibold text-center border-double border-y-8 border-red-950">
      {children}
    </div>
  );
};

export default Intro;
