import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Counter } from "./Functions/counter";
import { ShowGitUser } from "./Functions/showgituser";
import { GithubUserList } from "./Functions/githubuserlist";

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>|<Link to="/counter">Counter</Link>|
        <Link to="/users">Lista User</Link>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/" element={<p>HOME</p>} />

          <Route path="/users" element={<GithubUserList />}>
            <Route index element={<p>Select</p>} />
            <Route path=":username" element={<ShowGitUser />} />
          </Route>
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
