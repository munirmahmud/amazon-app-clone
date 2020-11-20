import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.css';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src="../../images/amazon.png" alt="Amazon"/>
            </Link>

            <div className="header__search">
                <input type="text" className="header__search-input" />
                <SearchIcon className="header__search-icon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__option-small">
                        Hello, Gues
                    </span>
                    <span className="header__option-mid">
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__option-small">
                        Returns
                    </span>
                    <span className="header__option-mid">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__option-small">
                        Your
                    </span>
                    <span className="header__option-mid">
                        Prime
                    </span>
                </div>
                <div className="header__option header__option-cart">
                    <Link to="/checkout">
                        <ShoppingBasketIcon className="shopping_basket" />
                        <span className="total__in-cart">0</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
