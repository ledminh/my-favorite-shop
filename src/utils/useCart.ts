import { OrderedProduct as OrderedProductType } from "@/types";

import useLocalStorage from "use-local-storage";

export default function useCart() {
  const [cart, setCart] = useLocalStorage<OrderedProductType[]>("cart", []);

  const addToCart = (product: OrderedProductType) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const removeFromCart = (product: OrderedProductType) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
}
