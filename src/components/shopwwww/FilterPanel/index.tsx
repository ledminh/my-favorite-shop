import Skeleton from "@/components/Shop/FilterPanel/Skeleton";

import Panel from "@/components/Shop/FilterPanel/Panel";
import { Props } from "@/components/Shop/FilterPanel/types";

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
