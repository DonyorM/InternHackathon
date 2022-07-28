import styles from "./SearchBar.module.css";
import React from "react";

interface SearchbarProps {
  searchInput: string;
  onChange: (newVal: string) => void;
  setDisplayKeyboard: (displayKeyboard: boolean) => void;
}
const Searchbar: React.FC<SearchbarProps> = ({
  searchInput,
  onChange,
  setDisplayKeyboard,
}) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={searchInput}
        onChange={(evt) => onChange(evt.target.value)}
        onFocus={() => {
          setDisplayKeyboard(true);
        }}
      />
    </div>
  );
};

export default Searchbar;
