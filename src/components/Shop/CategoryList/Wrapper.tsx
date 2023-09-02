import { ComponentWithChildren } from "@/types";

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4">
      {children}
    </div>
  );
};

export default Wrapper;
