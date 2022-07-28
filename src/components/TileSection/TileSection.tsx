import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./TileSection.module.css";

const TileSection: React.FC = () => {
  const a = [
    { name: "cool", price: 33 },
    { name: "fun", price: 34 },
  ];

  return (
    <div className={styles.TileSection}>
      {a.map((arrayItem) => (
        <ItemCard name={arrayItem.name} price={arrayItem.price} />
      ))}
    </div>
  );
};

export default TileSection;
