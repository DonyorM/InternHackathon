import styles from "./SearchBar.module.css";
import React, { Component, useRef } from "react";

interface SearchbarProps {
  searchInput: string;
}
const Searchbar: React.FC<SearchbarProps> = ({ searchInput }) => {
  return (
    <div className={styles.searchBar}>
      <input type="text" value={searchInput} />
    </div>
  );
};

export default Searchbar;
