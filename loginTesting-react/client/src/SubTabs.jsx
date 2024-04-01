import Products from "./Products.jsx";
import AddProduct from "./AddProduct.jsx";
import AddEmployee from "./AddEmployee.jsx";
import Employees from "./Employees.jsx";
import PropTypes from 'prop-types';

function SubTabs({ activeSubTab }) {


    return (
        <div className='subtab'>
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

        </div>
    );
}

SubTabs.propTypes = {
    activeSubTab: PropTypes.string.isRequired,
};

export default SubTabs;
