import Card from "./Card";
import Button from "./Button";
import Block from "./Block";

type CategoryProps = {
  type?: "Card" | "Button" | "Block";
  isCurrent?: boolean;
  name: string;
  description: string;
  link: string;
  image: {
    src: string;
    alt: string;
  };
};

export default function Category({
  type = "Card",
  isCurrent = false,
  name,
  description,
  link,
  image,
}: CategoryProps) {
  if (type === "Card") {
    return <Card {...{ name, description, link, image }} />;
  }

  if (type === "Button") {
    return <Button {...{ name, link }} isCurrent={isCurrent} />;
  }

  if (type === "Block") {
    return (
      <Block {...{ name, description, link, image }} isCurrent={isCurrent} />
    );
  }
  return null;
}
