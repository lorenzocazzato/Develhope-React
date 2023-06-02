import React from "react";
import Message from "./message";
import Hello from "./hello";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
import Welcome2 from "./welcome2";
import Age from "./age";

const strongName = <strong>Lorenzo</strong>;
const età = 25;

ReactDOM.render(
  <div>
    <Hello />
    <Message />
    <Welcome name={strongName} />
    <Age età={età}></Age>
    <Welcome2 />
  </div>,
  document.getElementById("root")
);
