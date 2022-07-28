import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import KeyboardComponent from "./components/keyboard/KeyboardComponent";

function App() {
  return (
    <div>
      <Searchbar />
      <KeyboardComponent />
    </div>
  );
}

export default App;
