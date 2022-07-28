import React from "react";
import styles from "./ItemCard.module.css";
interface ItemCardProps {
  name: string;
  price: number;
  imgSrc: string;
}
const ItemCard: React.FC<ItemCardProps> = ({ name, price, imgSrc }) => {
  return (
    <div className={styles.ItemCard}>
      <img src={imgSrc} alt="Food item" width="100px" height="100px"></img>
      <p>{name}</p>
      <p>{price}</p>
      <p>Add to Cart</p>
    </div>
  );
};

export default ItemCard;
