import React, { useState, useEffect } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <h1>Counter:{counter}</h1>;
}
