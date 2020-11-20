import React from 'react';
import './Checkout.styles.css';
import Subtotal from './Subtotal/Subtotal';

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://www.wjbf.com/wp-content/uploads/sites/47/2020/01/APP-BANNER.jpg" alt="Checkout banner"/>

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>
            </div>

            <div className="checkout__right">
                <h2>The subtotal will go here</h2>
                <Subtotal />

                {/* Basket Items */}
            </div>
        </div>
    );
};

export default Checkout;
