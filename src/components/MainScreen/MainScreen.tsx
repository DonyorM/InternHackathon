import Searchbar from "../Searchbar/Searchbar";
import KeyboardComponent from "../keyboard/KeyboardComponent";
import { app } from "../../firebase";
import React, { useEffect, useState, useMemo } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useCollection, useDocumentData } from "react-firebase-hooks/firestore";
import { collection, doc, getFirestore } from "firebase/firestore";
import { Item } from "../../types";
import logo from "../../logo.svg";
import data from "../../result.json";

import { useAuthState } from "react-firebase-hooks/auth";
import TileSection from "../TileSection/TileSection";
import Categories from "../Categories/Categories";
import QRCode from "../QRCode/QRCode";
import styles from "./Main.module.css";
import ShoppingChartButton from "../ShoppingCartButton/ShoppingCartButton";
const auth = getAuth(app);
const db = getFirestore(app);

const defaultValues = [
  {
    "name": "Starbucks Frapuccino",
    "price": 4.99,
    "id": 13062,
    "category": "Refresherz"
  },
  {
    "name": "Dunkin’ Iced Coffee",
    "price": 2.99,
    "id": 13063,
    "category": "Refresherz"
  },
  {
    "name": "Peace Coffee",
    "price": 13.99,
    "id": 13064,
    "category": "Refresherz"
  },
  {
    "name": "Medium Hot Coffee",
    "price": 1.99,
    "id": 13065,
    "category": "Refresherz"
  }
];

interface MainScreenProps {
  setCheckout: (checkout: boolean) => void;
}

const MainScreen: React.FC<MainScreenProps> = ({ setCheckout }) => {
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
    <>
      <div className={styles.topBar}>
        <div style={{ width: 50 }}></div>
        <Searchbar
          searchInput={searchInput}
          onChange={setSearchInput}
          setDisplayKeyboard={setDisplayKeyboard}
        />
        <ShoppingChartButton onClick={() => setCheckout(true)} />
      </div>
      <div className={styles.Main}>
        <Categories />
        <QRCode />
        <TileSection items={items} />
      </div>
      {displayKeyboard && (
        <KeyboardComponent
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      )}
    </>
  );
};

export default MainScreen;
