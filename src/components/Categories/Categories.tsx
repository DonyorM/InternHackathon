import React from "react";
import QRCode from "../QRCode/QRCode";
import styles from "./Categories.module.css";
const Categories: React.FC = () => {
  return (
    <div className={styles.Categories}>
      <ul className={styles.Categorieslist}>
        Categories
        <li>Sandwiches</li>
        <li>Beverages</li>
        <QRCode/>

      </ul>
    </div>
  );
};

export default Categories;
