import React from 'react';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Blogs from './Blogs';
import BusinessSumary from './BusinessSumary';
import ContactUs from './ContactUs';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <div className='bg-teal-300 p-3 m-3'>
            <marquee behavior="" direction="">Read Our blog section for more articles. You can also get latest updates about our recent events and upcoming events and product news there.</marquee>
            </div>
             <Products></Products>

            <h1 className='text-3xl text-center'>BLOGS</h1>
            <div className='bg-yellow-300 p-3 m-3'>
            <marquee behavior="" direction="">Read Our blog section for more articles. You can also get latest updates about our recent events and upcoming events and product news there.</marquee>
            </div>
            <Blogs></Blogs>
            <h1 className='text-3xl text-center my-32'>BUSINESS SUMMARY</h1>
            <BusinessSumary></BusinessSumary>
            <h1 className='text-3xl text-center my-32'>FEEDBACK AND REVIEWS</h1>
            <Reviews></Reviews>
            <h1 className='text-3xl text-center'>CONTACT US</h1>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;