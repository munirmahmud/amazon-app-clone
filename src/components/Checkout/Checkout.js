import React from 'react';
import { useStateValue } from '../../store/StateProvider';
import './Checkout.styles.css';
import ProductsFromCart from './ProductsFromCart/ProductsFromCart';
import Subtotal from './Subtotal/Subtotal';

const Checkout = () => {
    const [{basket}] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://www.wjbf.com/wp-content/uploads/sites/47/2020/01/APP-BANNER.jpg" alt="Checkout banner"/>

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>

                <div className="products__from-cart-wrapepr">
                    {basket.length > 0 && basket.map(product => <ProductsFromCart key={product.id} product={product} />)}
                </div>

            </div>

            <div className="checkout__right">
                <h2>The subtotal will go here</h2>
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
