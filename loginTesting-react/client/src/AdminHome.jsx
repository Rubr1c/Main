import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Tabs from "./Tabs";

function AdminHome() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        if (res.data.valid) {
          if (res.data.admin) {
            setName(res.data.username);
          } else {
            navigate("/home-employee");
          }
        } else {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:8081/Logout")
      .then((res) => {
        if (res.data.success) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex justify-content-between mx-5">
        <h2>Welcome {name}</h2>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
      <Tabs />
    </div>
  );
}

export default AdminHome;
