import React from 'react';
import ProductHome from '../../components/Products/ProductHome';
import './Home.styles.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__banner" src="../images/amazon-home-banner.jpg" alt="Large Banner"/>

                <div className="home__row">
                    <ProductHome />
                    <ProductHome />
                </div>
                <div className="home__row">
                    <ProductHome />
                    <ProductHome />
                    <ProductHome />
                </div>
                <div className="home__row">
                    <ProductHome />                    
                </div>
            </div>
        </div>
    );
};

export default Home;
