import { useState, useEffect } from 'react';
import axios from "axios";
import Barcode from "react-barcode";
import { toPng } from 'html-to-image';

function Products() {

    axios.defaults.withCredentials = true;

    const [products, setProducts] = useState([{
        product_id: '',
        Name: '',
        Price: 0.00,
        Quantity: 0
    }]);

    useEffect(() => {
        axios.get('http://localhost:8081/Products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }, []);


    const downloadBarcode = (id) => {
        const node = document.getElementById(id);
        toPng(node)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'barcode.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error('Error generating barcode image:', error);
            });
    };

    const generateBarcode = (id) => (
        <div id={id}>
            <Barcode value={id} width={1} height={50} />
        </div>
    );

    return (
        <>
            {products.map(product => (
                <div key={product.product_id}
                     className='bg-secondary bg-gradient text-center d-inline-flex flex-column p-2 m-3'>
                    <h3>{product.Name}</h3>
                    <p>Price: {product.Price}</p>
                    <p>Quantity: {product.Quantity}</p>
                    {generateBarcode(product.product_id)}
                    <button className='mt-2' onClick={() => downloadBarcode(product.product_id)}>Download</button>
                    <button className='mt-2'>Edit</button>
                </div>
            ))}
        </>
    );
}

export default Products;