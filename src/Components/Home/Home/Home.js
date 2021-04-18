import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Works from '../Works/Works';
import Brands from '../Brands/Brands';
import OurSkil from '../OurSkil/OurSkil';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Works />
            <Testimonials />
            <OurSkil />
            <Brands />
            <Footer />
        </div>
    );
};

export default Home;