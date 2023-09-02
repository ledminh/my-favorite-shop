import Skeleton from "./Skeleton";
import { Props } from "./type";
import List from "./List";

export default function CategoryList({
  categories,
  skeleton = false,
  total,
}: Props) {
  if (skeleton) {
    return <Skeleton />;
  }

  if (!categories) {
    throw new Error("Categories not found");
  }

  if (total === undefined) {
    throw new Error("Total not found");
  }

  return <List categories={categories} total={total} />;
}
