import { useEffect, useState } from "react";

export function useGitUser({ username }) {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [username]);
  return { data };
}
