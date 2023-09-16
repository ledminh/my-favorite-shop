import { Variant, WithID } from "@/types";
import useLocalStorage from "use-local-storage";

type VariantStorage = Record<string, WithID<Variant> | undefined>;

export default function useVariant() {
  const [selectedVariants, setSelectedVariants] =
    useLocalStorage<VariantStorage>("selectedVariants", {});

  const getSelectedVariant = (productID: string) => {
    return selectedVariants[productID];
  };

  const setSelectedVariant = (
    productID: string,
    variant: WithID<Variant> | null
  ) => {
    if (!variant) {
      const { [productID]: _, ...rest } = selectedVariants;
      setSelectedVariants(rest);
      return;
    }

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
