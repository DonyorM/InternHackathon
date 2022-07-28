import { useState } from "react";
import CheckoutScreen from "./components/CheckoutScreen/CheckoutScreen";
import MainScreen from "./components/MainScreen/MainScreen";
import { app } from "./firebase";

function App() {
  const [checkout, setCheckout] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      {checkout ? <CheckoutScreen /> : <MainScreen setCheckout={setCheckout} />}
    </div>
  );
}

export default App;
