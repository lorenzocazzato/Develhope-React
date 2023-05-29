import React from "react";
import Message from "./message";
import Hello from "./hello";
import ReactDOM from "react-dom";
import Welcome2 from "./welcome2";

ReactDOM.render(
  <div>
    <Hello />
    <Message />
    <Welcome2 />
  </div>,
  document.getElementById("root")
);
