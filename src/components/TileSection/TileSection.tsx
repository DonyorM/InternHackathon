import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./TileSection.module.css";
import { Item } from "../../types";
import { app } from "../../firebase";
import {
  collection,
  FieldPath,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const db = getFirestore(app);
interface TileSectionProps {
  itemIds: number[];
}
const TileSection: React.FC<TileSectionProps> = ({ itemIds }) => {
  const [value, loading, error] = useCollection(
    query(collection(db, "items"), where("id", "in", itemIds))
  );

  if (!value || loading) {
    return <div></div>;
  }

  return (
    <div className={styles.TileSection}>
      {value.docs
        .map((doc) => doc.data() as Item)
        .map((arrayItem) => (
          <ItemCard
            name={arrayItem.name}
            price={arrayItem.price}
            imgSrc={`/images/${arrayItem.id}.jpg`}
          />
        ))}
    </div>
  );
};

export default TileSection;
