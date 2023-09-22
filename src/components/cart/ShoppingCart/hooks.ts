import { useState, useEffect } from "react";
import useCart from "@/utils/useCart";
import getPrice, { ItemType } from "@/utils/getPrice";
import { OrderedProduct, WithID } from "@/types";

export default function useShoppingCart() {
  const { cart: _cart } = useCart();

  const [cart, setCart] = useState<WithID<OrderedProduct>[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = _cart.reduce((total, orderedProduct) => {
      if (orderedProduct.selectedVariant) {
        return (
          total +
          getPrice(orderedProduct.selectedVariant) * orderedProduct.quantity
        );
      }

      return (
        total + getPrice(orderedProduct as ItemType) * orderedProduct.quantity
      );
    }, 0);

    setTotalPrice(totalPrice);
    setCart(_cart);
  }, [_cart]);

  return {
    totalPrice,
    cart,
  };
}
