import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './pages/HomePage/Home';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
