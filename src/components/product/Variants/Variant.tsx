import Link from "next/link";
import type { Variant as VariantType } from "@/types";

type Props = {
  productID: string;
  variant: VariantType;
};

export default function Variant({ productID, variant }: Props) {
  return (
    <Link
      href={`/product/${productID}/${variant.id}`}
      className=" flex flex-col items-center justify-center p-2"
    >
      <div className="font-semibold">{variant.name}</div>
      <div className="italic">${variant.price}</div>
    </Link>
  );
}
