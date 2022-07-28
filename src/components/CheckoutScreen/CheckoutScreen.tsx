import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CheckoutScreen: React.FC = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div>
        <h1>Your Cart</h1>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default CheckoutScreen;
