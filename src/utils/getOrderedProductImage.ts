import { OrderedProduct } from "@/types";

export default function getOrderedProductImage(product: OrderedProduct) {
  if (product.selectedVariant) {
    return product.selectedVariant.image;
  }

  return product.images[0];
}
