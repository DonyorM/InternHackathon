
import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartItem, Item } from "../../types";
import styles from "./ItemCard.module.css";
import ItemQuantity from "./itemQuantity/ItemQuantity";
import PlusButton from "./plusButton/PlusButton";
interface ItemCardProps {
  item: Item;
  imgSrc: string;
  height?: number;
}
const ItemCard: React.FC<ItemCardProps> = ({ item, imgSrc, height }) => {
  const [quantity, setQuantity] = useState(0);

  const { cart, setCart } = useContext(CartContext);
  const updateCart = (quantity: number) => {
    setQuantity(quantity);
    let newCart = [...cart];
    if (quantity === 0) {
      newCart = newCart.filter((cartItem) => cartItem.item.id !== item.id);
    } else {
      const cartItem = newCart.find((cartItem) => cartItem.item.id === item.id);
      if (cartItem) {
        cartItem.quantity = quantity;
      } else {
        newCart.push({ item, quantity });
      }
    }
    setCart(newCart);
  };

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
        <ItemQuantity setQuantity={updateCart} quantity={quantity} />
      ) : (
        <PlusButton setQuantity={updateCart} quantity={quantity} />
      )}

      <p className={styles.ItemCardName}>{item.name}</p>
      <p className={styles.ItemCardPrice}>{item.price}</p>
    </div>
  );
};

export default ItemCard;
