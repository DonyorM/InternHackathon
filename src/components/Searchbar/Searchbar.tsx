import styles from "./SearchBar.module.css";
import React, { Component, useRef } from "react";

interface SearchbarProps {
  searchInput: string;
  setDisplayKeyboard: (displayKeyboard: boolean) => void;
}
const Searchbar: React.FC<SearchbarProps> = ({
  searchInput,
  setDisplayKeyboard,
}) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={searchInput}
        onFocus={() => {
          setDisplayKeyboard(true);
        }}
      />
    </div>
  );
};

export default Searchbar;
