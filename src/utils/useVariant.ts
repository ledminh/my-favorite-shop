import { Variant } from "@/types";
import useLocalStorage from "use-local-storage";

type VariantStorage = Record<string, Variant | undefined>;

export default function useVariant() {
  const [selectedVariants, setSelectedVariants] =
    useLocalStorage<VariantStorage>("selectedVariants", {});

  const getSelectedVariant = (productID: string) => {
    return selectedVariants[productID];
  };

  const setSelectedVariant = (productID: string, variant: Variant) => {
    setSelectedVariants({
      ...selectedVariants,
      [productID]: variant,
    });
  };

  return {
    getSelectedVariant,
    setSelectedVariant,
  };
}
