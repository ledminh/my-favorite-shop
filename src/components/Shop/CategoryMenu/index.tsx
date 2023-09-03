import type { Category as CategoryType, WithID } from "@/types";

import Skeleton from "@/components/Shop/CategoryList/Skeleton";
import Menu from "@/components/Shop/CategoryMenu/Menu";

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
