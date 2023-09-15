import Card from "./Card";
import Button from "./Button";
import Block from "./Block";
import type { Category as CategoryType } from "@/types";

type CategoryProps = {
  type: "Card" | "Button" | "Block";
  isCurrent?: boolean;
  skeleton?: boolean;
  index?: number;
  category?: CategoryType;
};

export default function Category({
  type = "Card",
  isCurrent = false,
  skeleton = false,
  index,
  category,
}: CategoryProps) {
  if (type === "Card") {
    return <Card category={category} skeleton={skeleton} />;
  }

  if (type === "Button") {
    return <Button category={category} isCurrent={isCurrent} />;
  }

  if (type === "Block") {
    return (
      <Block category={category} isCurrent={isCurrent} skeleton={skeleton} />
    );
  }
  return null;
}
