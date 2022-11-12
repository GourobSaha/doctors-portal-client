import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import ContactUs from './ContactUs';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import Testimonial from './Testimonials/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Banner2></Banner2>
            <Banner3></Banner3>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;