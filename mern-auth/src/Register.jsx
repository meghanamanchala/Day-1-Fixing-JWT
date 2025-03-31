import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // ISSUE: Sending password as plain text
    const response = await axios.post("http://localhost:5000/api/users/register", {
      username,
      password,
    });

    alert(response.data.message);
  };

  return (
    <div>
      <h2>Register (Broken Implementation)</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
