import React from 'react';
import './Brands.css';
import logoipsum from '../../../images/logoipsum.png'
import logoipsum1 from '../../../images/logoipsum1.png'
import logoipsum2 from '../../../images/logoipsum2.png'
import logoipsum3 from '../../../images/logoipsum3.png'

const Brands = () => {
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h2>Brands we work on</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row my-5">
                <div className="col-lg-3 col-md-6 d-flex mt-3">
                    <img className="img-fluid" src={logoipsum} alt="" />
                </div>
                <div className="col-lg-3 col-md-6 d-flex mt-3">
                    <img className="img-fluid" src={logoipsum1} alt="" />
                </div>
                <div className="col-lg-3 col-md-6 d-flex mt-3">
                    <img className="img-fluid" src={logoipsum2} alt="" />
                </div>
                <div className="col-lg-3 col-md-6 d-flex mt-3">
                    <img className="img-fluid" src={logoipsum3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brands;