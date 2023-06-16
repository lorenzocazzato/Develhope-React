import { useState } from "react";

export function ClickCounter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  function handleClick() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}
