import { ComponentWithChildren } from "@/types";

export const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="p-6 pb-0 border-4 border-white mb-9 rounded-2xl">
      {children}
    </div>
  );
};
