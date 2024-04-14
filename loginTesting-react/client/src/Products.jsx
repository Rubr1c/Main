import { useState, useEffect } from "react";
import axios from "axios";
import Barcode from "react-barcode";
import { toPng } from "html-to-image";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/Products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  });

  const downloadBarcode = (id) => {
    const node = document.getElementById(id);
    toPng(node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "barcode.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Error generating barcode image:", error);
      });
  };

  const generateBarcode = (id) => (
    <div id={id}>
      <Barcode value={id} width={1} height={50} />
    </div>
  );

  const openEditWindow = (product) => {
    document.getElementById("editName").value = product.Name;
    document.getElementById("editPrice").value = product.Price;
    document.getElementById("editQuantity").value = product.Quantity;
    document.getElementById("productID").innerText = product.product_id;
    document.getElementById("error-message").classList.add("d-none");

    document.getElementById("edit-window").style.display = "block";
  };

  const closeEditWindow = () => {
    document.getElementById("edit-window").style.display = "none";
  };

  const saveChanges = () => {
    const productId = document.getElementById("productID").innerText;
    const editName = document.getElementById("editName").value;
    const editPrice = document.getElementById("editPrice").value;
    const editQuantity = document.getElementById("editQuantity").value;

    const updatedProduct = {
      product_id: productId,
      Name: editName,
      Price: editPrice,
      Quantity: editQuantity,
    };

    axios
      .post("http://localhost:8081/EditProduct", updatedProduct)
      .then((res) => {
        if (res.data.success) {
          closeEditWindow();
        } else {
          document.getElementById("error-message").innerText = res.data.error;
          document.getElementById("error-message").classList.remove("d-none");
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteProduct = () => {
    const productId = document.getElementById("productID").innerText;
    axios
      .delete("http://localhost:8081/DeleteProduct", {
        params: {
          product_id: productId,
        },
      })
      .then((res) => {
        if (res.data.success) {
          closeEditWindow();
        } else {
          document.getElementById("error-message").innerText = res.data.error;
          document.getElementById("error-message").classList.remove("d-none");
        }
      });
  };

  return (
    <>
      {products.map((product) => (
        <div
          key={product.product_id}
          className="bg-info bg-gradient text-center d-inline-flex flex-column p-2 m-3 border border-dark rounded-3"
        >
          <h3>{product.Name}</h3>
          <p>Price: {product.Price}</p>
          <p>Quantity: {product.Quantity}</p>
          {generateBarcode(product.product_id)}
          <button
            className="mt-2 btn btn-dark"
            onClick={() => downloadBarcode(product.product_id)}
          >
            Download
          </button>
          <button
            className="mt-2 btn btn-dark"
            onClick={() => openEditWindow(product)}
          >
            Edit
          </button>
        </div>
      ))}
      <div id="edit-window">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="">Edit Product</h1>
          <button
            id="close-button"
            onClick={closeEditWindow}
            className="text-danger bg-transparent border-0 fs-3 p-0"
          >
            ✘
          </button>
        </div>
        <input type="text" className="m-3" id="editName" name="Name" />
        <input
          type="number"
          step="any"
          className="m-3"
          id="editPrice"
          name="Price"
        />
        <input
          type="number"
          className="m-3"
          id="editQuantity"
          name="Quantity"
        />
        <br />
        <button className="m-3 btn btn-success" onClick={saveChanges}>
          Save
        </button>
        <button className="m-3 btn btn-danger" onClick={deleteProduct}>
          Delete
        </button>
        <p className="d-none" id="productID"></p>
        <p className="d-none" id="error-message"></p>
      </div>
    </>
  );
}

export default Products;
