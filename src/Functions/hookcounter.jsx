import { useState, useCallback } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = useCallback(
    function handleIncrement() {
      setCounter((c) => c + 1);
    },
    [initialValue]
  );

  const handleDecrement = useCallback(
    function handleDecrement() {
      setCounter((c) => c - 1);
    },
    [initialValue]
  );

  const handleReset = useCallback(
    function handleReset() {
      setCounter(initialValue);
    },
    [initialValue]
  );

  return {
    counter: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    reset: handleReset,
  };
}
