import { useState } from "react";

import axios from "axios";

function ProductScanner({ setCheckoutItems }) {
  const [product_id, setProduct_ID] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);


  const addItemID = (e) => {
    setProduct_ID(e.target.value);
  };

  
  const findItemID = () => {
    axios
      .get("http://localhost:8081/CheckProductIDs", {
        params: {
          product_id: product_id,
        },
      })
      .then((res) => {
        if (res.data.exists) {
          setProduct_ID(product_id);
          setProductName(res.data.product);
        } else {
          setProductName("Product Not Found");
        }
      })
      .catch((err) => console.log(err));
  };

  const addToCheckout = () => {
    if (product_id && quantity > 0) {
      const newItem = { product_id, productName, quantity };
      setCheckoutItems((prevItems) => [...prevItems, newItem]);
    }
  };

 


  return (
    <>
      <h2>Scan Product</h2>
      <input
        type="text"
        placeholder="Enter Product ID..."
        id="product-id"
        onChange={addItemID}
        className="m-5 border border-dark rounded-3 p-2"
      />
      <button onClick={findItemID} className="btn btn-dark">
        Find Item
      </button>
      <br />
      <button className="m-5 btn btn-dark">
        Scan Barcode
      </button>
      
      <p id="found-item" className="m-5 ps-5 text-success fw-bold">
        {productName}
      </p>
      <input
        type="number"
        id="quantity"
        placeholder="Quantity..."
        className="m-5 border border-dark rounded-3 p-2"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <br />
      <button className="m-5 btn btn-dark" onClick={addToCheckout}>
        Add to Checkout
      </button>
    </>
  );
}

export default ProductScanner;
