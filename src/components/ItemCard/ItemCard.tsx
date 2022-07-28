import React from "react";
import styles from "./ItemCard.module.css";
import PlusButton from "./plusButton/PlusButton";
interface ItemCardProps {
  name: string;
  price: number;
  imgSrc: string;
}
const ItemCard: React.FC<ItemCardProps> = ({ name, price, imgSrc }) => {
  return (
    <div className={styles.ItemCard}>
      <img
        className={styles.ItemCardImage}
        src={imgSrc}
        alt="Food item"
        width="125px"
        height="125px"
      ></img>
      <PlusButton />
      <p className={styles.ItemCardName}>{name}</p>
      <p className={styles.ItemCardPrice}>{price}</p>
    </div>
  );
};

export default ItemCard;
