import { useGitUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data } = useGitUser({ username });

  return (
    <div>{data ? <h3> Utente: {data.name} </h3> : <h3>Loading...</h3>}</div>
  );
}
