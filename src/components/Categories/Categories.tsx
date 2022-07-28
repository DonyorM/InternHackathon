import React from "react";
import styles from "./Categories.module.css";
const Categories: React.FC = () => {
  return (
    <div className={styles.Categories}>
      <ul className={styles.Categorieslist}>
        <li>Recommended</li>
        <li>Prepared Food</li>
        <li>Beverages</li>
        <li>Snacks</li>
        <li>Produce</li>
      </ul>
    </div>
  );
};

export default Categories;
