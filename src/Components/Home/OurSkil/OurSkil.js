import React from 'react';
import './OurSkil.css';
import ProgressBar from 'react-customizable-progressbar'
import team from '../../../images/team-work.jpg';

const OurSkil = () => {
    return (
        <section className="Skil-area">
        <div className="container">
            <div className="text-center">
                <h2>HOW WE PERSUE PERFECTION</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
                <div className="col-md-4 mt-4 px-4 d-flex">
                    <div className="text-center">
                    <ProgressBar
                        radius={100}
                        progress={85}
                        strokeWidth={5}
                        strokeColor="#ee4d01"
                        strokeLinecap="square"
                        trackStrokeWidth={5}
                        transition='0.3s ease'
                        className="mx-auto"
                    >
                        <div className="indicator">
                            <div className="my-auto">85%</div>
                        </div>
                    </ProgressBar>
                    <div>
                        <h4 className="text-center">SERVICE</h4>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mt-4 px-4 d-flex">
                    <div className="text-center">
                    <ProgressBar
                        radius={100}
                        progress={90}
                        strokeWidth={5}
                        strokeColor="#ee4d01"
                        strokeLinecap="square"
                        trackStrokeWidth={5}
                        transition='0.3s ease'
                        className="mx-auto"
                    >
                        <div className="indicator">
                            <div className="my-auto">90%</div>
                        </div>
                    </ProgressBar>
                    <div>
                        <h4 className="text-center">VALUE</h4>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mt-4 px-4 d-flex">
                    <div className="text-center">
                    <ProgressBar
                        radius={100}
                        progress={85}
                        strokeWidth={5}
                        strokeColor="#ee4d01"
                        strokeLinecap="square"
                        trackStrokeWidth={5}
                        transition='0.3s ease'
                        className="mx-auto"
                    >
                        <div className="indicator">
                            <div className="my-auto">95%</div>
                        </div>
                    </ProgressBar>
                    <div>
                        <h4 className="text-center">INTEGRITY</h4>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row skil-content">
                <div className="col-lg-6 col-md-12 px-4">
                    <h3>SAY HELLO TO US</h3>
                    <h2>MEET THE TEAM</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h1>36 MECHANIC</h1>
                    <h6>READY TO SOLVE YOUR PROBLEMS.</h6>
                </div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center">
                    <img className="img-fluid" src={team} alt="" />
                </div>
            </div>
        </div>
        </section>
    );
};

export default OurSkil;