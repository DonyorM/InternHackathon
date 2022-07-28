import Searchbar from "./components/Searchbar/Searchbar";
import KeyboardComponent from "./components/keyboard/KeyboardComponent";
import { app } from "./firebase";
import React, { useEffect, useState, useMemo } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { Item } from "./types";
import logo from "./logo.svg";

import { useAuthState } from "react-firebase-hooks/auth";
import TileSection from "./components/TileSection/TileSection";
import Categories from "./components/Categories/Categories";
import styles from "./App.module.css";
const auth = getAuth(app);
const db = getFirestore(app);

const defaultValues = [
  {
    category: "Sliderz",
    id: 1024,
    name: "Spicy Bacon Ranch Sliderz",
    price: 3.99,
  },
  {
    category: "Shnack Wrapz",
    id: 1027,
    name: "Booming Onions & Cheddar",
    price: 5.59,
  },
  {
    category: "Chicken Appz",
    id: 1063,
    name: "Boneless Bitez",
    price: 5.59,
  },
];

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [displayKeyboard, setDisplayKeyboard] = useState(false);

  const [value] = useCollection(collection(db, "items"));

  const data = useMemo(() => {
    return value?.docs.map((doc) => doc.data() as Item);
  }, [value]);

  const items = useMemo(() => {
    const regex = new RegExp(searchInput, "i");
    return searchInput && data
      ? data.filter((d) => regex.test(d.name))
      : defaultValues;
  }, [searchInput, data]);

  useEffect(() => {
    signInWithEmailAndPassword(
      auth,
      "daniel.manila@willowtreeapps.com",
      "password"
    );
    function clickHanlder(e: any) {
      if (
        !(e.target.nodeName === "INPUT") &&
        !e.target.classList.contains("hg-button")
      ) {
        setDisplayKeyboard(false);
        setSearchInput("");
      }
    }

    window.addEventListener("click", clickHanlder);
    return window.removeEventListener("click", clickHanlder, true);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Searchbar
        searchInput={searchInput}
        onChange={setSearchInput}
        setDisplayKeyboard={setDisplayKeyboard}
      />
      <div className={styles.Main}>
        <Categories />
        <TileSection items={items} />
      </div>
      {displayKeyboard && (
        <KeyboardComponent
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      )}
    </div>
  );
}

export default App;
