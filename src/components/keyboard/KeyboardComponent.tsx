import styles from "./KeyboardComponent.module.css";
import React, { Component, useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface KeyboaredComponenetProps {
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
}

const KeyboardComponent: React.FC<KeyboaredComponenetProps> = ({
  searchInput,
  setSearchInput,
}) => {
  const keyboard = useRef();
  const [layout, setLayout] = useState("default");

  const onChange = (input: any) => {
    setSearchInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };
  const onKeyPress = (button: any) => {
    console.log("Button pressed", button);
    if (button === "{shift}" || button === "{lock}") handleShift();
  };
  return (
    <div className={styles.keyboard}>
      <Keyboard
        keyboardRef={(r: any) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default KeyboardComponent;
