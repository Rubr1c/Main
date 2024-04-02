import {useEffect, useState} from "react";
import axios from "axios";

function SoldProducts() {

    const [soldProducts, setSoldProducts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8081/SoldProducts')
            .then(res => {
                setSoldProducts(res.data);
            })
            .catch(err => console.log(err));
    });

    return (
        <>
            <h2>Sold Products</h2>
            <table>
                <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {soldProducts.map((item, index) => (
                    <tr key={index}>
                        <td>{item.product_id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default SoldProducts;