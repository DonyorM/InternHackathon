import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import KeyboardComponent from "./components/keyboard/KeyboardComponent";
import { app } from "./firebase";
import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import TileSection from "./components/TileSection/TileSection";
const auth = getAuth(app);

function App() {
  const [user, loading, error] = useAuthState(auth);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    signInWithEmailAndPassword(
      auth,
      "daniel.manila@willowtreeapps.com",
      "password"
    );
  }, []);

  console.log(loading, ";", user);

  return (
    <div style={{ height: "100vh" }}>
      <Searchbar searchInput={searchInput} />
      <TileSection itemIds={[1024, 1027, 1065]} />
      <KeyboardComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </div>
  );
}

export default App;
