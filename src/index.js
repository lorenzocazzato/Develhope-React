import React from "react";
import ReactDOM from "react-dom";
import { ClickCounter } from "./Functions/clickcounter";

export function App() {
  const handleCounterChange = (counter) => {
    console.log("Counter is now :", counter);
  };
  return (
    <>
      <ClickCounter onCounterChange={handleCounterChange} />
    </>
  );
}

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
