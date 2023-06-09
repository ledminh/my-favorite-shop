import Card from "./Card";
import Button from "./Button";
import Block from "./Block";
import type { Category as CategoryType } from "@/types";

type CategoryProps = CategoryType & {
  type?: "Card" | "Button" | "Block";
  isCurrent?: boolean;
};

export default function Category({
  type = "Card",
  isCurrent = false,
  ...category
}: CategoryProps) {
  if (type === "Card") {
    return <Card {...category} />;
  }

  if (type === "Button") {
    return <Button {...category} isCurrent={isCurrent} />;
  }

  if (type === "Block") {
    return (
      <Block {...category} isCurrent={isCurrent} />
    );
  }
  return null;
}
