import React, { useState } from "react";
import { registerUser } from "../features/users/userSlice";

import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    city: "",
    country: "",
    admin: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: name === "admin" ? value === "true" : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser(user));
    const storedUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );
    localStorage.setItem(
      "registeredUsers",
      JSON.stringify([...storedUsers, user])
    );
    alert("User registered successfully");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    value={user.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    value={user.country}
                    onChange={handleChange}
                    placeholder="Enter your country"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="admin">Admin</label>
                  <select
                    className="form-control"
                    id="admin"
                    name="admin"
                    value={user.admin ? "true" : "false"}
                    onChange={handleChange}
                    required
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
