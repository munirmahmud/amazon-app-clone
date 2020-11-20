import React from 'react';
import './ProductsFromCart.styles.css';

const ProductsFromCart = ({ product }) => {
    return (
        <div className="products__from-cart">
            <img src={product?.image} alt={product?.title} />
            <div className="cart__product-info">
                <h2>{product?.title}</h2>
                <span className="price">{product?.price}</span>
                <button className="btn">Remove from basket</button>
            </div>
        </div>
    );
};

export default ProductsFromCart;
