import { useState } from "react";
import { GithubUser } from "./githubuser";

export function GithubUserList() {
  const [userArr, setUserArr] = useState([]);
  const [input, setInput] = useState({ username: " " });

  function handleInput(event) {
    const { name, value } = event.target;
    setInput({
      [name]: value,
    });
  }

  function handleButton() {
    setUserArr([...userArr, input.username]);
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        value={input.username}
        onChange={handleInput}
      />
      <button onClick={handleButton}>Submit</button>

      {userArr.map((el, index) => (
        <li key={index}>
          <GithubUser username={el} />
        </li>
      ))}
    </div>
  );
}
