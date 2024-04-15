import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Validation from "./SignUpValidation.js";
import axios from "axios";

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(user));
    if (
      !errors.username &&
      !errors.email &&
      !errors.password &&
      Object.keys(errors).length === 0
    ) {
      axios
        .post("http://localhost:8081/SignUp", user)
        .then((res) => {
          if (res.data.success) navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  

  const handleInput = (e) => {
    setUser((v) => ({
      ...v,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Sign Up</h2>
          <div className="mb-3">
            <label htmlFor="username">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="User"
              name="username"
              required
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.username && (
              <span className="text-danger">{errors.username}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="email"
              required
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Example123$#"
              name="password"
              required
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">
            SignUp
          </button>
          <Link
            to="/login"
            className="btn btn-default border w-100 mt-3 bg-light text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
