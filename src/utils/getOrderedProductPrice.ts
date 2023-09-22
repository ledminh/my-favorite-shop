import { OrderedProduct } from "@/types";
import getPrice, { ItemType } from "./getPrice";

export default function getOrderedProductPrice(product: OrderedProduct) {
  if (product.selectedVariant) {
    return getPrice(product.selectedVariant);
  }

  return getPrice(product as ItemType);
}
