import { useState, useEffect } from 'react';
import axios from 'axios';

function Checkout({ checkoutItems, setCheckoutItems }) {
  const [productPrice, setProductPrice] = useState([]);
  const [totalPrice , setTotalPrice] = useState(0);


  useEffect(() => {
    const fetchPrices = async () => {
      const prices = await Promise.all(
          checkoutItems.map(async (item) => {
            try {
              const response = await axios.get('http://localhost:8081/GetItemPrice', {
                params: { product_id: item.product_id },
              });
              return response.data.Price; // Extract Price from the response

            } catch (error) {
              console.log(error);
              return 'Price Not Found'; // Default value if there's an error
            }
          })
      );
      setProductPrice(prices);
    };


    fetchPrices();
  }, [checkoutItems]);

  useEffect(() => {
    // Calculate total price when checkoutItems or productPrice changes
    let total = 0;
    checkoutItems.forEach((item, index) => {
      total += parseFloat((productPrice[index] * item.quantity).toFixed(2));
    });
    setTotalPrice(total);
  }, [checkoutItems, productPrice]);

  const handleRemoveItem = (index) => {
    // Create a copy of checkoutItems without the item at the specified index
    const updatedItems = [...checkoutItems];
    updatedItems.splice(index, 1);
    // Update checkoutItems state with the updated array
    setCheckoutItems(updatedItems);
  };

  const handleQuantityChange = (index, newQuantity) => {
    // Create a copy of checkoutItems and update the quantity of the item at the specified index
    const updatedItems = [...checkoutItems];
    updatedItems[index].quantity = newQuantity;
    // Update checkoutItems state with the updated array
    setCheckoutItems(updatedItems);
  };

  const sellProducts = async () => {
    try {
      await axios.post('http://localhost:8081/Checkout', { items: checkoutItems });
      alert('Checkout successful');
      setCheckoutItems([]); // Clear the checkout items after successful checkout
    } catch (error) {
      console.error('Error checking out:', error);
      alert('Error checking out');
    }
  }

  return (
      <>
        <h2>Checkout</h2>
        <table>
          <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {checkoutItems.map((item, index) => (
              <tr key={index}>
                <td>{item.product_id}</td>
                <td>{item.productName}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  />
                </td>
                <td>{parseFloat((productPrice[index] * item.quantity).toFixed(2))}</td>
                <td>
                  <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>

        <h2>Total: {totalPrice.toFixed(2)}</h2>
        <br/>
        <button onClick={sellProducts}>Checkout</button>
      </>
  );
}

export default Checkout;
