import React, { useMemo } from "react";
import TileSection from "../TileSection/TileSection";
import styles from "./SuggestedItems.module.css"
const SuggestedItems: React.FC = () => {
    const defaultValues = [
        {
          "name": "Starbucks Frapuccino",
          "price": 4.99,
          "id": 13062,
          "category": "Refresherz"
        },
        {
          "name": "Dunkin’ Iced Coffee",
          "price": 2.99,
          "id": 13063,
          "category": "Refresherz"
        },
        {
          "name": "Peace Coffee",
          "price": 13.99,
          "id": 13064,
          "category": "Refresherz"
        },
        {
          "name": "Medium Hot Coffee",
          "price": 1.99,
          "id": 13065,
          "category": "Refresherz"
        }
      ];
        
    return(
        <div className={styles.suggestedRow}>
            {/* <div className = {styles.col}> */}
                <div className = {styles.label}>Pairs well with</div>
                <TileSection items={defaultValues} height={30} header = ""/>
            {/* </div> */}
        </div>
    )
}
export default SuggestedItems;