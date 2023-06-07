import Card from "./Card";
import Button from "./Button";

type CategoryProps = {
  type?: "Card" | "Button";
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
  name,
  description,
  link,
  image,
}: CategoryProps) {
  if (type === "Card") {
    return <Card {...{ name, description, link, image }} />;
  }

  if (type === "Button") {
    return <Button {...{ name, link }} />;
  }

  return null;
}
