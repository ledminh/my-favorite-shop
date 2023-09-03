import { ProductsRequest } from "@/types";

import Skeleton from "@/components/Shop/FilterPanel/Skeleton";

import Panel from "@/components/Shop/FilterPanel/Panel";

type Props =
  | {
      sortByInit: "name" | "price";
      orderInit: ProductsRequest["order"];
      skeleton?: false;
    }
  | {
      skeleton: true;
      sortByInit?: undefined;
      orderInit?: undefined;
    };

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
