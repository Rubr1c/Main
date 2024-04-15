import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SubTabs from "./SubTabs.jsx";

function EmployeeHome() {
  const [activeTab, setActiveTab] = useState("purchase");
  const [activeSubTab, setActiveSubTab] = useState("scan-product-tab");
  const [name, setName] = useState("");

  const tablinkActive =
    "tablink active btn btn-light border border-dark btn-outline-info";
  const tablinkInactive =
    "tablink btn btn-light border border-dark btn-outline-info";

  const subtablinkActive = "subtablink active btn btn-light btn-outline-info";
  const subtablinkInactive = "subtablink btn btn-light btn-outline-info";

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        if (res.data.valid) setName(res.data.username);
        else navigate("/login");
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios.get("http://localhost:8081/logout").then((res) => {
      if (res.data.success) navigate("/login");
    });
  };

  
  const openTab = (tabName) => {
    setActiveTab(tabName);
    switch (tabName) {
      case "sales":
        setActiveSubTab("sold-products-tab");
        break;
      case "product":
        setActiveSubTab("add-product-tab");
        break;
      case "employee":
        setActiveSubTab("add-employee-tab");
        break;
      case "purchase":
        setActiveSubTab("scan-product-tab");
        break;
      default:
        setActiveSubTab("");
    }
  };

  const openSubTab = (subTabName) => {
    setActiveSubTab(subTabName);
  };

  return (
    <div>
      <div className="d-flex justify-content-between mx-5">
        <h2>Welcome {name}</h2>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
      <div className="tabs">
        <button
          className={activeTab === "purchase" ? tablinkActive : tablinkInactive}
          onClick={() => openTab("purchase")}
        >
          Purchase
        </button>
      </div>
      <div id="purchase" className="tabcontent">
        {activeTab === "purchase" && (
          <div className="subtabs">
            <button
              className={
                activeSubTab === "scan-product-tab"
                  ? subtablinkActive
                  : subtablinkInactive
              }
              onClick={() => openSubTab("scan-product-tab")}
            >
              Scan Product
            </button>
            <button
              className={
                activeSubTab === "checkout-tab"
                  ? subtablinkActive
                  : subtablinkInactive
              }
              onClick={() => openSubTab("checkout-tab")}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
      <SubTabs activeSubTab={activeSubTab} />
    </div>
  );
}

export default EmployeeHome;
