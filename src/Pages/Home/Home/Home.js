import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;