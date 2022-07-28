import { useState } from "react";
import CheckoutScreen from "./components/CheckoutScreen/CheckoutScreen";
import MainScreen from "./components/MainScreen/MainScreen";
import { CartContext } from "./contexts/CartContext";
import { app } from "./firebase";
import { CartItem } from "./types";

function App() {
  const [checkout, setCheckout] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div style={{ height: "100vh" }}>
        {checkout ? (
          <CheckoutScreen setCheckout={setCheckout} />
        ) : (
          <MainScreen setCheckout={setCheckout} />
        )}
      </div>
    </CartContext.Provider>
  );
}

export default App;
