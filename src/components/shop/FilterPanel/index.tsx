import Skeleton from "@/components/shop/FilterPanel/Skeleton";

import Panel from "@/components/shop/FilterPanel/Panel";
import { Props } from "@/components/shop/FilterPanel/types";

export default function FilterPanel({
  sortByInit,
  orderInit,
  skeleton,
}: Props) {
  if (skeleton) {
    return <Skeleton />;
  }

  return <Panel sortByInit={sortByInit} orderInit={orderInit} />;
}
