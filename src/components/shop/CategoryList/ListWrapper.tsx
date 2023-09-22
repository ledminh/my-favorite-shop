import { ComponentWithChildren } from "@/types";

const List: ComponentWithChildren = ({ children }) => {
  return (
    <ul className="grid w-11/12 grid-cols-2 gap-4 mx-auto mb-10 lg:grid-cols-3">
      {children}
    </ul>
  );
};

export default List;
