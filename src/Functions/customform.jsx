import { useState } from "react";

export function useForm() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser((data) => ({
      ...data,
      [name]: value,
    }));
    console.log(user);
  };
  return { user, handleInput };
}

export function Form() {
  const { user, handleInput } = useForm();

  return (
    <div>
      <input
        type="text"
        value={user.username}
        name="username"
        onChange={handleInput}
      />
      <input
        type="password"
        value={user.password}
        name="password"
        onChange={handleInput}
      />
    </div>
  );
}
