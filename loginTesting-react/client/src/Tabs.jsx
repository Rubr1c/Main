import { useState } from "react";
import SubTabs from "./SubTabs.jsx";


function Tabs() {

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
            <div className="tabs">
                <button className={activeTab === 'sales' ? 'tablink active' : 'tablink'}
                        onClick={() => openTab('sales')}>Sales
                </button>
                <button className={activeTab === 'product' ? 'tablink active' : 'tablink'}
                        onClick={() => openTab('product')}>Product
                </button>
                <button className={activeTab === 'purchase' ? 'tablink active' : 'tablink'}
                        onClick={() => openTab('purchase')}>Purchase
                </button>
                <button className={activeTab === 'employee' ? 'tablink active' : 'tablink'}
                        onClick={() => openTab('employee')}>Employee
                </button>
            </div>
            <div id="sales" className="tabcontent">

            </div>
            <div id="product" className="tabcontent">
                {activeTab === 'product' && (
                    <div className="subtabs">
                        <button className={activeSubTab === 'add-product-tab' ? 'subtablink active' : 'subtablink'}
                                onClick={() => openSubTab('add-product-tab')}>
                            Add Product
                        </button>
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
    )
}

export default Tabs;