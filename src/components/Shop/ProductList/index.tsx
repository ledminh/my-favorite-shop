import List from "./List";
import Skeleton from "./Skeleton";

import { Props } from "./types";

export default function ProductList({
  productsInit,
  catID,
  searchTerm,
  sortBy = "name",
  order = "asc",
  skeleton,
  total,
}: Props) {
  if (skeleton) {
    return <Skeleton />;
  }

  return (
    <List
      productsInit={productsInit}
      catID={catID}
      searchTerm={searchTerm}
      sortBy={sortBy}
      order={order}
      total={total}
    />
  );
}
