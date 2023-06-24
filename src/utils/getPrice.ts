import { OrderedProduct } from "@/types";
import { Variant } from "@/types";

export const getPrice = (product: OrderedProduct) => {
  if (product.variants) {
    const variant = product.variants.find((variant) => variant.current);
    if (!variant) {
      throw new Error("No current variant");
    }

    return _getVariantPrice(variant);
  }

  if (product.promotion) {
    if (product.promotion.type === "discount") {
      return product.price * (1 - product.promotion.discountPercent / 100);
    } else {
      return product.promotion.salePrice;
    }
  }

  return product.price;
};

/******************
 * Helper
 */

function _getVariantPrice(variant: Variant) {
  if (variant.promotions) {
    if (variant.promotions.type === "discount") {
      return variant.price * (1 - variant.promotions.discountPercent / 100);
    } else {
      return variant.promotions.salePrice;
    }
  }

  return variant.price;
}
