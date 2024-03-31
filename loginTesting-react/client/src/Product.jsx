import { useState, useEffect } from 'react';
import axios from "axios";
import Barcode from "react-barcode";
import { toPng } from 'html-to-image';

function SubTabComponent() {
    const [activeTab, setActiveTab] = useState('sales');
    const [activeSubTab, setActiveSubTab] = useState('add-product-tab');
    const [products, setProducts] = useState([{
        id: '',
        name: '',
        price: 0.00,
        quantity: 0
    }]);

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

    const openTab = (tabName) => {
        setActiveTab(tabName);
        setActiveSubTab('add-product-tab');
    };

    const openSubTab = (subTabName) => {
        setActiveSubTab(subTabName);
    };

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:8081/Products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div className="tabs">
                <button className={activeTab === 'sales' ? 'tablink active' : 'tablink'} onClick={() => openTab('sales')}>Sales</button>
                <button className={activeTab === 'product' ? 'tablink active' : 'tablink'} onClick={() => openTab('product')}>Product</button>
                <button className={activeTab === 'purchase' ? 'tablink active' : 'tablink'} onClick={() => openTab('purchase')}>Purchase</button>
                <button className={activeTab === 'employee' ? 'tablink active' : 'tablink'} onClick={() => openTab('employee')}>Employee</button>
            </div>
            <div id="sales" className="tabcontent">
                {/* Sales tab content */}
            </div>
            <div id="product" className="tabcontent">
                {activeTab === 'product' && (
                    <div className="subtabs">
                        <button className={activeSubTab === 'add-product-tab' ? 'subtablink active' : 'subtablink'} onClick={() => openSubTab('add-product-tab')}>
                            Add Product
                        </button>
                        <button className={activeSubTab === 'existing-products-tab' ? 'subtablink active' : 'subtablink'} onClick={() => openSubTab('existing-products-tab')}>
                            Products
                        </button>
                    </div>
                )}
                <div className="subtabcontent" id="add-product-tab" style={{ display: activeSubTab === 'add-product-tab' ? 'block' : 'none' }}>
                    <p>Add Product Content Here</p>
                </div>
                <div className="subtabcontent" id="existing-products-tab" style={{ display: activeSubTab === 'existing-products-tab' ? 'block' : 'none' }}>
                    <h2>Products</h2>
                    {products.map(product => (
                        <div key={product.id} className='bg-secondary bg-gradient text-center d-inline-flex flex-column p-2 m-3'>
                            <h3>{product.name}</h3>
                            <p>Price: {product.price}</p>
                            <p>Quantity: {product.quantity}</p>
                            {generateBarcode(product.id)}
                            <button className='mt-2' onClick={() => downloadBarcode(product.id)}>Download</button>
                            <button className='mt-2'>Edit</button>
                        </div>
                    ))}
                </div>
            </div>
            <div id="purchase" className="tabcontent">
                {/* Purchase tab content */}
            </div>
            <div id="employee" className="tabcontent">
                {/* Employee tab content */}
            </div>
        </div>
    );
}

export default SubTabComponent;
