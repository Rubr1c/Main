import { useState } from "react";
import SubTabs from "./SubTabs.jsx";

function Tabs() {
  const [activeTab, setActiveTab] = useState("sales");
  const [activeSubTab, setActiveSubTab] = useState("sold-products-tab");

  const tablinkActive =
    "tablink active btn btn-light border border-dark btn-outline-info";
  const tablinkInactive =
    "tablink btn btn-light border border-dark btn-outline-info";

  const subtablinkActive = "subtablink active btn btn-light btn-outline-info";
  const subtablinkInactive = "subtablink btn btn-light btn-outline-info";

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
      <div className="tabs">
        <button
          className={activeTab === "sales" ? tablinkActive : tablinkInactive}
          onClick={() => openTab("sales")}
        >
          Sales
        </button>
        <button
          className={activeTab === "product" ? tablinkActive : tablinkInactive}
          onClick={() => openTab("product")}
        >
          Product
        </button>
        <button
          className={activeTab === "purchase" ? tablinkActive : tablinkInactive}
          onClick={() => openTab("purchase")}
        >
          Purchase
        </button>
        <button
          className={activeTab === "employee" ? tablinkActive : tablinkInactive}
          onClick={() => openTab("employee")}
        >
          Employee
        </button>
      </div>
      <div id="sales" className="tabcontent">
        {activeTab === "sales" && (
          <div className="subtabs">
            <button
              className={
                activeSubTab === "sold-products-tab"
                  ? subtablinkActive
                  : subtablinkInactive
              }
              onClick={() => openSubTab("sold-products-tab")}
            >
              Sold Products History
            </button>
            <button
              className={
                activeSubTab === "product-graph-tab"
                  ? subtablinkActive
                  : subtablinkInactive
              }
              onClick={() => openSubTab("product-graph-tab")}
            >
              Products Graph
            </button>
          </div>
        )}
      </div>

      <div id="product" className="tabcontent">
        {activeTab === "product" && (
          <div className="subtabs">
            <button
              className={
                activeSubTab === "add-product-tab"
                  ? subtablinkActive
                  : subtablinkInactive
              }
              onClick={() => openSubTab("add-product-tab")}
            >
              Add Product
            </button>
            <button
              className={
                activeSubTab === "existing-products-tab"
                  ? subtablinkActive
                  : subtablinkInactive
              }
              onClick={() => openSubTab("existing-products-tab")}
            >
              Products
            </button>
          </div>
        )}
      </div>
      <div id="employee" className="tabcontent">
        {activeTab === "employee" && (
          <div className="subtabs">
            <button
              className={
                activeSubTab === "add-employee-tab"
                  ? subtablinkActive
                  : subtablinkInactive
              }
              onClick={() => openSubTab("add-employee-tab")}
            >
              Add Employee
            </button>
            <button
              className={
                activeSubTab === "existing-employee-tab"
                  ? subtablinkActive
                  : subtablinkInactive
              }
              onClick={() => openSubTab("existing-employee-tab")}
            >
              Employees
            </button>
          </div>
        )}
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

export default Tabs;
