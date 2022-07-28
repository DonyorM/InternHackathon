import styles from "./SearchBar.module.css";
import React, { Component, useRef } from "react";

interface SearchbarProps {
  value: string;
  onChange: (newVal: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ value, onChange }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={value}
        onChange={(evt) => {
          onChange(evt.target.value);
        }}
      />
    </div>
  );
};

export default Searchbar;
