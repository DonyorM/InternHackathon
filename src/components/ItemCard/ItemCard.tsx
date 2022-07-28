import React, { useState } from "react";
import { SignatureHelpTriggerCharacter } from "typescript";
import styles from "./ItemCard.module.css";
import ItemQuantity from "./itemQuantity/ItemQuantity";
import PlusButton from "./plusButton/PlusButton";
interface ItemCardProps {
  name: string;
  price: number;
  imgSrc: string;
  height?: number;
}
const ItemCard: React.FC<ItemCardProps> = ({ name, price, imgSrc, height }) => {
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantity, setQuantity] = useState(0);

  return (
    <div className={styles.ItemCard}>
      <img
        className={styles.ItemCardImage}
        src={imgSrc}
        alt="Food item"
        width={height ?? "125px"}
        height={height ?? "125px"}
      ></img>
      {quantity > 0 ? (
        <ItemQuantity setQuantity={setQuantity} quantity={quantity} />
      ) : (
        <PlusButton setQuantity={setQuantity} quantity={quantity} />
      )}

      <p className={styles.ItemCardName}>{name}</p>
      <p className={styles.ItemCardPrice}>{price}</p>
    </div>
  );
};

export default ItemCard;
