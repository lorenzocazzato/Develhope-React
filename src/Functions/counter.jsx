import { useCounter } from "./hookcounter";

export function Counter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, reset } = useCounter(initialValue);
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
