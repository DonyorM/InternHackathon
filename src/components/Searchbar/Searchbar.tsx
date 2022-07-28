import styles from "./SearchBar.module.css";
import React, { Component, useRef } from "react";

const Searchbar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" />
    </div>
  );
};

export default Searchbar;
