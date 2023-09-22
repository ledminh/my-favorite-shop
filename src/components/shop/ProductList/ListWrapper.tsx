import { ComponentWithChildren } from "@/types";

const ListWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <ul className="grid w-11/12 mx-auto gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
};

export default ListWrapper;
