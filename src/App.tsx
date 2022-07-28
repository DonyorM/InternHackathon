import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import KeyboardComponent from "./components/keyboard/KeyboardComponent";
import { app } from "./firebase";
import React, { useEffect, useState, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import TileSection from "./components/TileSection/TileSection";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore, query, where } from "firebase/firestore";
import { Item } from "./types";
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
  const [search, setSearch] = useState("");

  const [value] = useCollection(collection(db, "items"));

  const data = useMemo(() => {
    return value?.docs.map((doc) => doc.data() as Item);
  }, [value]);

  const items = useMemo(() => {
    const regex = new RegExp(search, "i");
    return search && data
      ? data.filter((d) => regex.test(d.name))
      : defaultValues;
  }, [search, data]);

  useEffect(() => {
    signInWithEmailAndPassword(
      auth,
      "daniel.manila@willowtreeapps.com",
      "password"
    );
  }, []);

  return (
    <div>
      <Searchbar value={search} onChange={setSearch} />
      <KeyboardComponent />
      <TileSection items={items} />
    </div>
  );
}

export default App;
