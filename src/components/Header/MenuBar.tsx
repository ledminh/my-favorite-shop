import menuItems from "./menuItems";

import { ComponentWithChildren } from "@/types";

export default function MenuBar() {
  return (
    <Wrapper>
      {menuItems.map((item) => {
        return (
          <div key={item.name}>
            <item.icon className="w-6 h-6 text-white hover:text-white/70" />
          </div>
        );
      })}
    </Wrapper>
  );
}

/*******************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-full border-2 border-red-700">
      {children}
    </div>
  );
};
