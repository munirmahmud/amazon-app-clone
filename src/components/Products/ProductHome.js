import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';
import './ProductHome.styles.css';

const ProductHome = ({title, image, price, rating}) => {
    return (
        <div className="product">
            <div className="product__info">
                <h2>{title}</h2>
                <div className="product__price">
                    <small>$</small>
                    <strong>{Number(price.toFixed(2))}</strong>
                </div>
                <div className="product__rating">
                    <span><StarIcon /></span>
                    <span><StarIcon /></span>
                    <span><StarIcon /></span>
                    <span><StarIcon /></span>
                    <span><StarBorderIcon /></span>
                </div>
            </div>
            <img src={image} alt={title} />

                <button>Add to Basket</button>
        </div>
    );
};

export default ProductHome;
