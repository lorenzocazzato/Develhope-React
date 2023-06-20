import { useParams } from "react-router-dom";
import { GithubUser } from "./githubuser";

export function ShowGitUser() {
  const { username = "lorenzocazzato" } = useParams();

  return <GithubUser username={username} />;
}
