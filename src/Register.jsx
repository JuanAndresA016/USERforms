import React, { useState } from "react";
import { spotifyAPI } from "./api/spotifyAPI";
import "./styles.css";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newForm = {
      ...form,
      [name]: value,
    };

    setForm(newForm);
  };
  const handleRegistro = async () => {
    const url = "http://localhost:3000/api/users";
    console.log(form);
    const data = JSON.stringify(form)
    console.log((data))
    const res = await spotifyAPI(url, "POST", data, null);
    console.log(res);
  };

  return (
    <>
    <div className="spotify">
      <div>Register:ㅤ</div>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={form.name}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={form.name}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={form.name}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          name="password"
          onChange={handleChange}
          value={form.name}
        />
      </label>
      <button className="button"onClick={handleRegistro}>Registrar</button>
      </div>
    </>
  );
};

export default Register;
