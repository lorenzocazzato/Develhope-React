import React from "react";
import Message from "./message";
import Hello from "./hello";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
import Welcome2 from "./welcome2";
import Counter from "./counter";
import ClickCounter from "./clickcounter";
import ClickTracker from "./clicktracker";
import InteractiveWelcome from "./interactivewelcome";
import Login from "./login";
import UncontrolledLogin from "./uncontrolledlogin";
import TodoList from "./todolist";

const strongName = <strong>Lorenzo</strong>;
const age = 25;

ReactDOM.render(
  <div>
    <Hello />
    <Message />
    <Welcome name={strongName} age={age} />
    <Welcome2 />
    <Counter incremento={1} iniziale={1} intervallo={1000} />
    <ClickCounter incremento={1} iniziale={0} />
    <ClickTracker />
    <InteractiveWelcome />
    <Login />
    <UncontrolledLogin />
    <TodoList />
  </div>,
  document.getElementById("root")
);
