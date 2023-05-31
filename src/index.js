import React from "react";
import Message from "./message";
import Hello from "./hello";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
import Welcome2 from "./welcome2";
import Counter from "./counter";

const strongName = <strong>Lorenzo</strong>;
const age = 25;

ReactDOM.render(
  <div>
    <Hello />
    <Message />
    <Welcome name={strongName} age={age} />
    <Welcome2 />
    <Counter incremento={1} iniziale={0} intervallo={1000} />
  </div>,
  document.getElementById("root")
);
