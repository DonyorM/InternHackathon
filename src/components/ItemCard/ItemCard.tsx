import React from "react";
import styles from "./ItemCard.module.css";
interface ItemCardProps {
  name: string;
  price: number;
}
const ItemCard: React.FC<ItemCardProps> = ({ name, price }) => {
  return (
    <div className={styles.ItemCard}>
      <img
        src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
        width="100px"
        height="100px"
      ></img>
      <p>{name}</p>
      <p>{price}</p>
      <p>Add to Cart</p>
    </div>
  );
};

export default ItemCard;
