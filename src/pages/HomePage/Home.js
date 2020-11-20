import React from 'react';
import ProductHome from '../../components/Products/ProductHome';
import './Home.styles.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__banner" src="../images/amazon-home-banner.jpg" alt="Large Banner"/>

                <div className="home__row">
                    <ProductHome 
                        title="AmazonBasics 2 Slice, Extra-Wide Slot Toaster with 6 Shade Settings, Black"
                        image="https://images-na.ssl-images-amazon.com/images/I/81smEEgnhfL._AC_SX679_.jpg"
                        price={22.99}
                        rating={5}
                    />
                    <ProductHome 
                        title="Acer SB220Q bi 21.5 Inches Full HD IPS Ultra-Thin Zero Frame Monitor"
                        image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX679_.jpg"
                        price={93.99}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <ProductHome 
                        title="TP-Link N300 WiFi Extender WiFi Range Extender supports up to"
                        image="https://images-na.ssl-images-amazon.com/images/I/61bDT8tAmvL._AC_SY879_.jpg"
                        price={18.99}
                        rating={4}
                    />
                    <ProductHome 
                        title="Philips Hue Indoor Motion Sensor for Smart Lights Exclusively"
                        image="https://images-na.ssl-images-amazon.com/images/I/613bdyy5GgL._AC_SX522_.jpg"
                        price={37.98}
                        rating={5}
                    />
                    <ProductHome 
                        title="Nintendo Switch Pro Controller"
                        image="https://images-na.ssl-images-amazon.com/images/I/61drpi3cYUL._SX522_.jpg"
                        price={59.99}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                <ProductHome 
                    title="SAMSUNG 75-inch Class QLED Q70T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN75Q70TAFXZA, 2020 Model)"
                    image="https://images-na.ssl-images-amazon.com/images/I/51d1lfcMIaL._AC_SX522_.jpg"
                    price={179.99}
                    rating={3}
                />                  
                </div>
            </div>
        </div>
    );
};

export default Home;
