import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [username]);

  return <div>{data ? <h3>Git {data.name}</h3> : <h3>Loading...</h3>}</div>;
}
