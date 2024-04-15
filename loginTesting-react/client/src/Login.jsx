import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        if (res.data.valid) {
          if (res.data.admin) {
            navigate("/home-admin");
          } else {
            navigate("/home-employee");
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    axios
      .post("http://localhost:8081/Login", user)
      .then((res) => {
        if (!res.data.Login) {
          if (res.data.error === "Invalid password") {
            setErrors((prevErrors) => ({
              ...prevErrors,
              password: "Invalid password",
            }));
          } else if (res.data.error === "No existing accounts") {
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: "No existing accounts",
            }));
          }
        } else {
          if (res.data.Admin) navigate("/home-admin");
          else navigate("/home-employee");
        }
      })
      .catch((err) => console.log(err));
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
          <h2 className="text-center">Login</h2>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email..."
              name="email"
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
              placeholder="Enter Password..."
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
          <Link
            to="/signup"
            className="btn btn-default border w-100 mt-3 bg-light text-decoration-none"
          >
            SignUp
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
