import { useEffect } from "react";
import { useState } from "react";

export function ClickCounter({ initialValue = 0, onCounterChange }) {
  const [count, setCount] = useState(initialValue);

  function handleClick() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}
