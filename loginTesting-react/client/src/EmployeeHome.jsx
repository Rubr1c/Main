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
    const [activeSubTab, setActiveSubTab] = useState('add-product-tab');
    const openTab = (tabName) => {
        setActiveTab(tabName);
        setActiveSubTab('add-product-tab');
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
            <div id="sales" className="tabcontent">

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
            <SubTabs activeSubTab={activeSubTab}/>
        </div>
    );
}

export default EmployeeHome;