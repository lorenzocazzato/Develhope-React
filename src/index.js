import React from "react";
import Message from "./message";
import Hello from "./hello";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
import Welcome2 from "./welcome2";

const strongName = <strong>Lorenzo</strong>;

ReactDOM.render(
  <div>
    <Hello />
    <Message />
    <Welcome name={strongName} age={25} />
    <Welcome2 />
  </div>,
  document.getElementById("root")
);
