import type { Promotion } from "@/types";

type ItemType = {
  price: number;
  promotion?: Promotion;
};

export const getPrice = (item: ItemType) => {
  if (item.promotion) {
    if (item.promotion.type === "discount") {
      return item.price * (1 - item.promotion.discountPercent / 100);
    } else {
      return item.promotion.salePrice;
    }
  }

  return item.price;
};
