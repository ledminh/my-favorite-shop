import { ComponentWithChildren } from "@/types";

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="grid w-11/12 max-w-md grid-cols-2 gap-6 p-2 mx-auto bg-blue-200 rounded-md">
      {children}
    </div>
  );
};

export default Wrapper;
