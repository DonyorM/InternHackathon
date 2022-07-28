import TrashIcon from "../../icons/TrashIcon";
import PlusButton from "../plusButton/PlusButton";
import styles from "./ItemQuantity.module.css";
interface PlusButtonProps {
  setQuantity: (quantity: number) => void;
  quantity: number;
}

const ItemQuantity: React.FC<PlusButtonProps> = ({ setQuantity, quantity }) => {
  return (
    <div className={styles.center}>
      <TrashIcon setQuantity={setQuantity} quantity={quantity} />
      <div className={styles.quantity}>{quantity}</div>
      <PlusButton setQuantity={setQuantity} quantity={quantity} />
    </div>
  );
};

export default ItemQuantity;
