import { Variant } from "@/types";
import useLocalStorage from "use-local-storage";

type VariantStorage = Record<string, Variant | undefined>;

export default function useVariant() {
  const [currentVariants, setCurrentVariants] = useLocalStorage<VariantStorage>(
    "currentVariants",
    {}
  );

  return {
    getCurrentVariant: (productID: string) => currentVariants[productID],
    setCurrentVariant: (productID: string, variant: Variant) => {
      setCurrentVariants({
        ...currentVariants,
        [productID]: variant,
      });
    },
  };
}
