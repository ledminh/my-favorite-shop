import { OrderedProduct as OrderedProductType } from "@/types";

import useLocalStorage from "use-local-storage";

export default function useCart() {
  const [cart, setCart] = useLocalStorage<OrderedProductType[]>("cart", []);

  const addToCart = (product: OrderedProductType) => {
    const item = cart.find((item) => item.id === product.id);
    if (item) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + product.quantity,
          };
        }
        return item;
      });

      setCart(newCart);
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };

  const removeFromCart = (product: OrderedProductType) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  const updateCart = (product: OrderedProductType) => {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        return product;
      }
      return item;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, updateCart, clearCart };
}