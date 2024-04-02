import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import SubTabs from "./SubTabs.jsx";

function EmployeeHome() {

    const [name, setName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                console.log(res.data);
                if (res.data.valid) {
                    setName(res.data.username);
                } else {
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    }, []);

    const [activeTab, setActiveTab] = useState('sales');
    const [activeSubTab, setActiveSubTab] = useState('');
    const openTab = (tabName) => {
        setActiveTab(tabName);
        setActiveSubTab('');
    };

    const openSubTab = (subTabName) => {
        setActiveSubTab(subTabName);
    };

    return (
        <div>
            <h2>employee {name}</h2>

            <div className="tabs">
                <button className={activeTab === 'product' ? 'tablink active' : 'tablink'}
                        onClick={() => openTab('product')}>Product
                </button>
                <button className={activeTab === 'purchase' ? 'tablink active' : 'tablink'}
                        onClick={() => openTab('purchase')}>Purchase
                </button>
            </div>
            <div id="product" className="tabcontent">
                {activeTab === 'product' && (
                    <div className="subtabs">
                        <button
                            className={activeSubTab === 'existing-products-tab' ? 'subtablink active' : 'subtablink'}
                            onClick={() => openSubTab('existing-products-tab')}>
                            Products
                        </button>
                    </div>
                )}
            </div>
            <div id='purchase' className='tabcontent'>
                {activeTab === 'purchase' && (
                    <div className='subtabs'>
                        <button className={activeSubTab === 'scan-product-tab' ? 'subtablink active' : 'subtablink'}
                                onClick={() => openSubTab('scan-product-tab')}>
                            Scan Product
                        </button>
                        <button className={activeSubTab === 'checkout-tab' ? 'subtablink active' : 'subtablink'}
                                onClick={() => openSubTab('checkout-tab')}>
                            Checkout
                        </button>
                    </div>
                )}


            </div>
            <SubTabs activeSubTab={activeSubTab}/>
        </div>
    );
}

export default EmployeeHome;