import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import KeyboardComponent from "./components/keyboard/KeyboardComponent";
import { app } from "./firebase";
import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import TileSection from "./components/TileSection/TileSection";
const auth = getAuth(app);

function App() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    signInWithEmailAndPassword(
      auth,
      "daniel.manila@willowtreeapps.com",
      "password"
    );
  }, []);

  console.log(loading, ";", user);

  return (
    <div>
      <Searchbar />
      <KeyboardComponent />
      <TileSection itemIds={[1024, 1027, 1065]} />
    </div>
  );
}

export default App;
