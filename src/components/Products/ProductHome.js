import StarIcon from '@material-ui/icons/Star';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';
import { useStateValue } from '../../store/StateProvider';
import './ProductHome.styles.css';

const ProductHome = ({id, title, image, price, rating}) => {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({ 
            type: 'ADD_TO_BASKET',
            item: {
                id, title, image, price, rating
            }
        });
    };
    
    return (
        <div className="product">
            <div className="product__info">
                <h2>{title}</h2>
                <div className="product__price">
                    <small>$</small>
                    <strong>{Number(price.toFixed(2))}</strong>
                </div>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <span key={i}><StarIcon /></span>

                    ))}
                    {/* <span><StarIcon /></span>
                    <span><StarIcon /></span>
                    <span><StarIcon /></span>
                    <span><StarBorderIcon /></span> */}
                </div>
            </div>
            <img src={image} alt={title} />

                <button onClick={addToBasket} className="btn">Add to Basket</button>
        </div>
    );
};

export default ProductHome;
