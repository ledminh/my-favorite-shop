import { ComponentWithChildren } from "@/types";

const Banner: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-4 font-semibold text-center border-double border-y-8 border-red-950">
      {children}
    </div>
  );
};

export default Banner;
