import { useState } from "react";
import CheckoutScreen from "./components/CheckoutScreen/CheckoutScreen";
import MainScreen from "./components/MainScreen/MainScreen";
import PaymentScreen from "./components/PaymentScreen/PaymentScreen";
import { CartContext } from "./contexts/CartContext";
import { app } from "./firebase";
import { CartItem } from "./types";
import styles from "./App.module.css";

function App() {
  const [checkout, setCheckout] = useState(false);
  const [payment, setPayment] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div style={{ height: "100vh" }} className={styles.Main}>
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
