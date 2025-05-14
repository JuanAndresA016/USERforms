import React, {useState} from 'react'

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

  return (
    <>
    <div>Register</div>
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
      </>
  )
}

export default Register