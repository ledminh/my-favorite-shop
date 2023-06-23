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
      className="border border-dashed border-gray-600 rounded-md p-2 hover:bg-gray-100 transition duration-150 ease-in-out flex flex-col items-center justify-center"
    >
      <div className="font-semibold">{variant.name}</div>
      <div className="italic">${variant.price}</div>
    </Link>
  );
}
