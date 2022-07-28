import React from "react";
import styles from "./Categories.module.css";
const Categories: React.FC = () => {
  return (
    <div className={styles.Categories}>
      <ul className={styles.Categorieslist}>
        Categories
        <li>Sandwiches</li>
        <li>Beverages</li>
      </ul>
    </div>
  );
};

export default Categories;
