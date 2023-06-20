import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Counter } from "./Functions/counter";
import { ShowGitUser } from "./Functions/showgituser";

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/"
            element={<Link to="users/lorenzocazzato">GitUser</Link>}
          />

          <Route path="users/:username" element={<ShowGitUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
