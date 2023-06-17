import { Category as CategoryType } from "@/types";
import Link from "next/link";

type Props = {
  isCurrent?: boolean;
  category?: CategoryType;
};

export default function Category({ category, isCurrent = false }: Props) {
  if (!category)
    throw new Error("Category prop is required for Category Button component");

  const { name, link } = category;

  if (isCurrent) {
    return <div className="p-1 bg-red-100 border border-blue-950">{name}</div>;
  }

  return (
    <Link
      href={link}
      className="block p-1 border border-blue-950 hover:bg-red-100"
    >
      {name}
    </Link>
  );
}
