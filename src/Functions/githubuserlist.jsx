import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/users/lorenzocazzato">Lorenzo</Link>
        </li>
        <li>
          <Link to="/users/gianmarcotoso">Gian Marco</Link>
        </li>
      </ul>
      <hr />

      <Outlet />
    </div>
  );
}
