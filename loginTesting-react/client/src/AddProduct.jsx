import { useState } from "react";
import axios from "axios";
function AddProduct() {
  const [product, setProduct] = useState([
    {
      product_id: "",
      name: "",
      price: 0.0,
      quantity: 0,
    },
  ]);
  const addProduct = (e) => {
    e.preventDefault();
    checkId(generateProductId());
    axios
      .post("http://localhost:8081/AddProduct", product)
      .then((res) => {
        if (res.data.success) {
          document.getElementById("name").value = "";
          document.getElementById("price").value = "";
          document.getElementById("quantity").value = "";
          document.getElementById("error-message").innerHTML = "";
          document.getElementById("success-message").innerHTML =
            "Product Added Successfully";
        } else {
          document.getElementById("success-message").innerHTML = "";
          document.getElementById("error-message").innerHTML =
            "Product Addition Failed";
        }
      })
      .catch((err) => {
        document.getElementById("success-message").innerHTML = "";
        document.getElementById("error-message").innerHTML =
          "Product Addition Failed";
      });
  };

  function generateProductId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 10);
  }

  function checkId(id) {
    axios
      .get("http://localhost:8081/CheckProductID", {
        params: {
          product_id: id,
        },
      })
      .then((res) => {
        if (res.data.exists) {
          checkId(generateProductId());
        } else {
          setProduct({
            ...product,
            product_id: id,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  const handleInput = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit={addProduct}>
        <input
          type="text"
          onChange={handleInput}
          name="name"
          id="name"
          placeholder="Enter Product Name..."
          required="true"
          className="m-5 rounded-2 border border-dark p-2"
        />
        <br />
        <div className="input-group mb-3">
          <span className="input-group-text my-3 ms-3">$</span>
          <input
            type="number"
            onChange={handleInput}
            name="price"
            step="any"
            id="price"
            placeholder="Enter Product Price..."
            required="true"
            className="my-3 rounded-2 border border-dark p-2"
          />
        </div>
        <input
          type="number"
          onChange={handleInput}
          name="quantity"
          id="quantity"
          placeholder="Enter Product Quantity..."
          required="true"
          className="m-5 rounded-2 border border-dark p-2"
        />
        <br />
        <button type="submit" className="btn btn-dark" id="addproduct">
          Add
        </button>
        <div id="success-message" className="text-success"></div>
        <div id="error-message" className="text-danger"></div>
      </form>
    </>
  );
}

export default AddProduct;
