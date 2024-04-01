import Products from "./Products.jsx";
import PropTypes from 'prop-types';

function SubTabs({ activeSubTab }) {


    return (
        <div>
            <div className="subtabcontent" id="add-product-tab"
                 style={{display: activeSubTab === 'add-product-tab' ? 'block' : 'none'}}>
                <p>Add Product Content Here</p>
            </div>
            <div className="subtabcontent" id="existing-products-tab"
                 style={{display: activeSubTab === 'existing-products-tab' ? 'block' : 'none'}}>
                <h2>Products</h2>
                <Products />
            </div>
            <div id="purchase" className="tabcontent">

            </div>
            <div id="employee" className="tabcontent">

            </div>
        </div>
    );
}

SubTabs.propTypes = {
    activeSubTab: PropTypes.string.isRequired,
};

export default SubTabs;
