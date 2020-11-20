import { ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.styles.css';

const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                         <p>
                            {/* Subtotal (0 items): ({ShoppingBasket.length} item): */}
                            Subtotal (0 items): 
                            <span>
                                <strong>0</strong> 
                                <ShoppingBasket />
                            </span>
                         </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                // value={getBasketTotal(basket)}
                displayType="text"
                thousandSeparator={true}
                prefix="$"
            />

            <button>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;
