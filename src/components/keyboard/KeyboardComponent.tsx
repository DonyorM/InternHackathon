import styles from "./KeyboardComponent.module.css";
import React, { Component, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const KeyboardComponent: React.FC = () => {
  const keyboard = useRef();
  const layout = "default";
  const onChange = (input: any) => {
    console.log("Input changed", input);
  };
  const onKeyPress = (button: any) => {
    console.log("Button pressed", button);
  };
  return (
    <div>
      <div className="keyboard">
        <Keyboard
          keyboardRef={(r: any) => (keyboard.current = r)}
          layoutName={layout}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
  return <div></div>;
};

export default KeyboardComponent;
