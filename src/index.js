import React from "react";
import Message from "./message";
import Hello from "./hello";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
import Welcome2 from "./welcome2";

ReactDOM.render(
  <div>
    <Hello />
    <Message />
    <Welcome name="Lorenzo" age={25} />
    <Welcome2 />
  </div>,
  document.getElementById("root")
);
