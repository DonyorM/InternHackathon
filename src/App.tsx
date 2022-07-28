import { useState } from "react";
import CheckoutScreen from "./components/CheckoutScreen/CheckoutScreen";
import MainScreen from "./components/MainScreen/MainScreen";
import PaymentScreen from "./components/PaymentScreen/PaymentScreen";
import { CartContext } from "./contexts/CartContext";
import { app } from "./firebase";
import { CartItem } from "./types";

function App() {
  const [checkout, setCheckout] = useState(false);
  const [payment, setPayment] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      item: {
        name: "GFuel\u00ae Focus Freak",
        price: 3.99,
        id: 2695,
        category: "Refresherz",
      },
      quantity: 1,
    },
  ]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div style={{ height: "100vh" }}>
        {checkout ? (
          <CheckoutScreen setCheckout={setCheckout} setPayment={setPayment} />
        ) : payment ? (
          <PaymentScreen setCheckout={setCheckout} setPayment={setPayment} />
        ) : (
          <MainScreen setCheckout={setCheckout} />
        )}
      </div>
    </CartContext.Provider>
  );
}

export default App;
