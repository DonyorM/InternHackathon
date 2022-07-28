import Searchbar from "./components/Searchbar/Searchbar";
import KeyboardComponent from "./components/keyboard/KeyboardComponent";
import { app } from "./firebase";
import React, { useEffect, useState, useMemo } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useCollection, useDocumentData } from "react-firebase-hooks/firestore";
import { collection, doc, getFirestore } from "firebase/firestore";
import { Item } from "./types";
import logo from "./logo.svg";
import data from "./result.json";

import { useAuthState } from "react-firebase-hooks/auth";
import TileSection from "./components/TileSection/TileSection";
import Categories from "./components/Categories/Categories";
import styles from "./App.module.css";
import ShoppingChartButton from "./components/ShoppingCartButton/ShoppingCartButton";
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
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const loyaltyId = urlParams.get("loyaltyId");
    setUserId(loyaltyId);
  }, [setUserId]);

  const [identityValue, loading] = useDocumentData(
    doc(db, "identity", userId ?? "test")
  );

  const items = useMemo(() => {
    let vals = defaultValues;
    if (identityValue) {
      vals = data.filter((d) => identityValue.previousPurchase.includes(d.id));
    }
    const regex = new RegExp(searchInput, "i");
    return searchInput && data ? data.filter((d) => regex.test(d.name)) : vals;
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
      <ShoppingChartButton onClick={() => null} />
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
