import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInput(event) {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(data);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        name="username"
        value={data.username}
      />
      <input
        type="password"
        onChange={handleInput}
        name="password"
        value={data.password}
      />
      <input
        type="checkbox"
        onChange={handleInput}
        name="remember"
        checked={data.remember}
      />
    </div>
  );
}
