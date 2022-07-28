import { useState } from "react";
import CheckoutScreen from "./components/CheckoutScreen/CheckoutScreen";
import MainScreen from "./components/MainScreen/MainScreen";
import { CartContext } from "./contexts/CartContext";
import { app } from "./firebase";

function App() {
  const [checkout, setCheckout] = useState(false);
  const [cart, setCart] = useState<Record<number, number>>({});
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div style={{ height: "100vh" }}>
        {checkout ? (
          <CheckoutScreen />
        ) : (
          <MainScreen setCheckout={setCheckout} />
        )}
      </div>
    </CartContext.Provider>
  );
}

export default App;
