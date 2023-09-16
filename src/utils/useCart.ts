import {
  OrderedProduct as OrderedProductType,
  Product as ProductType,
  Variant,
  WithID,
} from "@/types";

import useLocalStorage from "use-local-storage";

export default function useCart() {
  const [cart, setCart] = useLocalStorage<WithID<OrderedProductType>[]>(
    "cart",
    []
  );

  const addToCart = (props: {
    product: WithID<ProductType>;
    quantity: number;
    selectedVariant?: WithID<Variant>;
  }) => {
    const { product, quantity, selectedVariant } = props;

    const orderedProduct: WithID<OrderedProductType> = {
      ...product,
      id: selectedVariant
        ? "prod-" + product.id + "-variant-" + selectedVariant.id
        : product.id,
      quantity,
      selectedVariant,
    };

    const item = cart.find((item) => item.id === orderedProduct.id);

    if (item) {
      const newCart = cart.map((item) => {
        if (item.id === orderedProduct.id) {
          return {
            ...item,
            quantity: item.quantity + orderedProduct.quantity,
          };
        }
        return item;
      });

      setCart(newCart);
    } else {
      const newCart = [...cart, orderedProduct];
      setCart(newCart);
    }
  };

  const removeFromCart = (product: WithID<OrderedProductType>) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  const updateCart = (product: WithID<OrderedProductType>) => {
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
