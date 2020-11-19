import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';
import './ProductHome.styles.css';

const ProductHome = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>Lenovo IdeaPad 3 14" Laptop, 14.0" FHD 1920 x 1080 Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD</p>
                <div className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </div>
                <div className="product__rating">
                    <span><StarIcon /></span>
                    <span><StarIcon /></span>
                    <span><StarIcon /></span>
                    <span><StarIcon /></span>
                    <span><StarBorderIcon /></span>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71dqjxW8g5L._AC_SX679_.jpg" alt="Lenovo IdeaPad"/>

                <button>Add to Basket</button>
        </div>
    );
};

export default ProductHome;
