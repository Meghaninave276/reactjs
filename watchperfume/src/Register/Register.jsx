import React, { useState } from "react";


import "./Register.css"; // optional: for custom CSS

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    user_type: "user",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.cpassword) {
      setMsg("❌ Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      setMsg(res.data.message || "✅ Registration successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        user_type: "user",
      });
    } catch (err) {
      setMsg(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center vh-100">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          {msg && <p className="msg">{msg}</p>}

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="user_type"
            className="form-control"
            value={formData.user_type}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="cpassword"
            className="form-control"
            placeholder="Confirm Password"
            value={formData.cpassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>

          <p className="text-center mt-3 text-light">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
