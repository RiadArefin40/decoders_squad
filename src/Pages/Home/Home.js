import React from 'react';
import Aboutus from './Aboutus';
import Banner from './Banner';
import BusinessSumary from './BusinessSumary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <BusinessSumary></BusinessSumary>
        </div>
    );
};

export default Home;