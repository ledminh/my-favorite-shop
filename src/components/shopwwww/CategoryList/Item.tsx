import { ComponentWithChildren } from "@/types";

const Item: ComponentWithChildren = ({ children }) => {
  return <li className="min-h-[150px]">{children}</li>;
};

export default Item;
