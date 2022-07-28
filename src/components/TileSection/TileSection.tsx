import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./TileSection.module.css";
import { Item } from "../../types";
import { app } from "../../firebase";

interface TileSectionProps {
  items: Item[];
  header: String;
  height?: number;
}
const TileSection: React.FC<TileSectionProps> = ({ items, header, height }) => {
  if (items.length === 0) {
    <div>No items found</div>;
  }
  return (
    <div>
      <p className={styles.TileSectionHeader}>{header}</p>
      <div className={styles.TileSection}>
        {items.map((arrayItem) => (
          <ItemCard
            key={arrayItem.id}
            item={arrayItem}
            imgSrc={`/images/${arrayItem.id}.jpg`}
            height={height}
          />
        ))}
      </div>
    </div>
  );
};

export default TileSection;
