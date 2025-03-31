import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // ISSUE: Hardcoded JWT secret (very insecure)
    const response = await axios.post("http://localhost:5000/api/users/login", {
      username,
      password,
    });

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login (Broken Implementation)</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
