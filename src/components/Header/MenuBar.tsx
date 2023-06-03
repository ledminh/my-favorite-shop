import { SearchIcon } from "@/theme/Icons";
import menuItems from "./menuItems";
import { usePathname } from "next/navigation";
import { ComponentWithChildren } from "@/types";

import Link from "next/link";

const sizeClasses = "w-10 h-10";
const colorClasses = "text-white hover:text-white/50 active:text-white/30";
const currentColorClasses = "text-red-400 font-bold hover:text-red-400/50";

export default function MenuBar() {
  const pathname = usePathname();

  const isCurrentPage = (href: string) => {
    return pathname === href;
  };

  return (
    <Wrapper>
      {menuItems.map((item) => {
        return (
          <Link
            key={item.name}
            className={`${sizeClasses} ${
              isCurrentPage(item.href) ? currentColorClasses : colorClasses
            }`}
            href={item.href}
          >
            <item.icon />
          </Link>
        );
      })}
      <Button>
        <SearchIcon />
      </Button>
    </Wrapper>
  );
}

/*******************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-center h-full gap-3 p-3 rounded-md bg-blue-950/60">
      {children}
    </div>
  );
};

const Button: ComponentWithChildren = ({ children }) => {
  return (
    <button className={sizeClasses + " " + colorClasses}>{children}</button>
  );
};
