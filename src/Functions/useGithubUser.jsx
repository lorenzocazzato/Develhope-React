import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export function useGitUser({ username }) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  function fetchGitHubUser() {
    mutate();
  }

  return {
    data,
    error,
    loading: !data && !error,
    onFetchUser: fetchGitHubUser,
  };
}
