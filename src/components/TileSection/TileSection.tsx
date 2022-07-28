import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./TileSection.module.css";
import { Item } from "../../types";
import { app } from "../../firebase";
import { collection, getFirestore, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const db = getFirestore(app);
interface TileSectionProps {
  items: Item[];
  header: String;
}
const TileSection: React.FC<TileSectionProps> = ({ items, header }) => {
  if (items.length === 0) {
    <div>No items found</div>;
  }

  return (
    <div>
      <p>{header}</p>
      <div className={styles.TileSection}>
        {items.map((arrayItem) => (
          <ItemCard item={arrayItem} imgSrc={`/images/${arrayItem.id}.jpg`} />
        ))}
      </div>
    </div>
  );
};

export default TileSection;
