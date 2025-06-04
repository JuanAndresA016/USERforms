import React, { useState } from "react";
import { spotifyAPI } from "./api/spotifyAPI";
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = "http://localhost:3000/api/users/login";
    try {
      const res = await spotifyAPI(url, "POST", JSON.stringify(form), null);
      console.log("Login exitoso:", res);
      localStorage.setItem("user",res.user.id)
      window.location.href="http://127.0.0.1:3001/dashboard"
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  return (
    <div className="spotify">
      <div>Login</div>
      <label>
        Email:
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
      </label>
      <button className="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
