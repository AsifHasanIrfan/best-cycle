import React from 'react';
import './Works.css';
import work1 from '../../../images/work-1.jpg';
import work2 from '../../../images/work-2.jpg';
import work3 from '../../../images/work-3.jpg';
import work4 from '../../../images/work-4.jpg';

const Works = () => {
    return (
        <section className="our-works">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <img className="img-fluid work-img" src={work1} alt="" />
                            </div>
                            <div className="col-md-6 p-0">
                                <img className="img-fluid work-img" src={work2} alt="" />
                            </div>
                            <div className="col-md-6 p-0">
                                <img className="img-fluid work-img" src={work3} alt="" />
                            </div>
                            <div className="col-md-6 p-0">
                                <img className="img-fluid work-img" src={work4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 work-details mb-4 mb-lg-0">
                        <h3>How we Work</h3>
                        <h2>BOOK APPOINTMENT,<br/>AND WE WILL SOLVE ALL YOUR<br/> PROBLEMS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className="btn btn-info text-white">Read More</button>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;