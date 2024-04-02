import SoldProducts from "./SoldProducts.jsx";

import Products from "./Products.jsx";
import AddProduct from "./AddProduct.jsx";
import AddEmployee from "./AddEmployee.jsx";
import Employees from "./Employees.jsx";
import ProductScanner from "./ProductScanner.jsx";
import Checkout from "./Checkout.jsx";
import PropTypes from 'prop-types';
import { useState } from "react";

function SubTabs({ activeSubTab }) {

    const [checkoutItems, setCheckoutItems] = useState([]);

    return (
        <div className='subtab'>
            <div className='subtabcontent' id='sold-products-tab'
                 style={{display: activeSubTab === 'sold-products-tab' ? 'block' : 'none'}}>
                 <SoldProducts/>
            </div>
            <div className="subtabcontent" id="add-product-tab"
                 style={{display: activeSubTab === 'add-product-tab' ? 'block' : 'none'}}>
                <AddProduct/>
            </div>
            <div className="subtabcontent" id="existing-products-tab"
                 style={{display: activeSubTab === 'existing-products-tab' ? 'block' : 'none'}}>
                <h2>Products</h2>
                <Products />
            </div>
            <div className="subtabcontent" id='add-employee-tab'
                style={{display: activeSubTab === 'add-employee-tab' ? 'block' : 'none'}}>
                <AddEmployee/>
            </div>
            <div className='subtabcontent' id='existing-products-tab'
                 style={{display: activeSubTab === 'existing-employee-tab' ? 'block' : 'none'}}>
                 <Employees/>
            </div>
            <div className='subtabcontent' id='scan-product-tab'
                 style={{display: activeSubTab === 'scan-product-tab' ? 'block' : 'none'}}>
                 <ProductScanner setCheckoutItems={setCheckoutItems}/>
            </div>
            <div className='subtabcontent' id='checkout-tab'
                 style={{display: activeSubTab === 'checkout-tab' ? 'block' : 'none'}}>
                 <Checkout checkoutItems={checkoutItems} setCheckoutItems={setCheckoutItems}/>
            </div>
        </div>
    );
}

SubTabs.propTypes = {
    activeSubTab: PropTypes.string.isRequired,
};

export default SubTabs;
