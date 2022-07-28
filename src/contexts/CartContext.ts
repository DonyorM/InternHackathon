import React from "react";

interface CartHelper {
  cart: Record<number, number>;
  setCart: (newCart: Record<number, number>) => void;
}

export const CartContext = React.createContext<CartHelper>({
  cart: {},
  setCart: () => null,
});
