import Link from "next/link";

type Props = {
  name: string;
  link: string;
};

export default function Category({ link, name }: Props) {
  return (
    <Link href={link} className="border border-blue-950 p-1 hover:bg-red-100">
      {name}
    </Link>
  );
}
