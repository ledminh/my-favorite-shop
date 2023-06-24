import Link from "next/link";
import type { Variant as VariantType } from "@/types";

type Props = {
  variant: VariantType;
};

export default function Variant({ variant }: Props) {
  return (
    <button className="flex flex-col items-center justify-center p-2 ">
      <div className="font-semibold">{variant.name}</div>
      <div className="italic">${variant.price}</div>
    </button>
  );
}
