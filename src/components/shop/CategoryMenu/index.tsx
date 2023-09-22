import type { Category as CategoryType, WithID } from "@/types";

import Skeleton from "./Skeleton";
import Menu from "./Menu";

type Props =
  | {
      skeleton: true;
      categories?: undefined;
      currentCategory?: undefined;
    }
  | {
      skeleton?: false;
      categories: WithID<CategoryType>[];
      currentCategory: WithID<CategoryType>;
    };

export default function CategoryMenu({
  skeleton,
  categories,
  currentCategory,
}: Props) {
  if (skeleton) {
    return <Skeleton />;
  }

  return <Menu categories={categories} currentCategory={currentCategory} />;
}
