import React from "react";
import { CartItem } from "../types";

interface CartHelper {
  cart: CartItem[];
  setCart: (newCart: Record<number, number>) => void;
}

export const CartContext = React.createContext<CartHelper>({
  cart: [],
  setCart: () => null,
});
