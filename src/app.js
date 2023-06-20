import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "./Functions/counter";

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
