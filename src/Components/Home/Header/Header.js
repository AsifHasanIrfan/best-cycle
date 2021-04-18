import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <section className="header-section">
            <Navbar />
            <div className="content container">
                    <h1>Revolution bicycles <br/> service & repair</h1>
                    <p>We service all brands of bicycles, whether you need a minimum quick adjustment or a performance check, our trained mechanics will get you safely back out riding.</p>
                    <button className="brand-btn" type="button">Get started</button>
            </div>
            <div className="wave">
                
            </div>
        </section>
    );
};

export default Header;