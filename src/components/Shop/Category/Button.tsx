import Link from "next/link";

type Props = {
  isCurrent?: boolean;
  name: string;
  link: string;
};

export default function Category({ link, name, isCurrent = false }: Props) {
  if (isCurrent) {
    return <div className="border border-blue-950 bg-red-100 p-1">{name}</div>;
  }

  return (
    <Link
      href={link}
      className="block border border-blue-950 p-1 hover:bg-red-100"
    >
      {name}
    </Link>
  );
}
