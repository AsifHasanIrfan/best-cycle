import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';

const Footer = () => {

    const quickContact = [
        {name: "+625487152154" , link: "/phone"},
        {name: "+546469131348" , link: "/telPhone"},
        {name: "asifhasanirfan@gmail.com" , link: "/email"},
        {name: "Dhaka-Bangladesh, Chuadanga" , link: "location"}
    ]
    const company = [
        {name: "Career" , link: "//google.com/map"},
        {name: "Terms" , link: "//google.com/map"},
        {name: "Policy" , link: "//google.com/map"},
        {name: "Legal" , link: "//google.com/map"},
        {name: "Credits" , link: "//google.com/map"}
    ]
    const quickLink = [
        {name: "Help" , link: "/emergency"},
        {name: "Starter" , link: "/checkup"},
        {name: "Tools" , link: "/tools"},
        {name: "Asset" , link: "/asset"},
        {name: "Library" , link: "/library"}
    ]
    const more = [
        {name: "Repair" , link: "/emergency"},
        {name: "Media" , link: "/checkup"},
        {name: "Adjustment" , link: "/personal-treatment"},
        {name: "Accessories" , link: "/tooth-extract"},
        {name: "Merchandise" , link: "/checkup"}
    ]

    return (
        <footer className="footer-area">
            <div className="overlay">
            <div className="container">
                <div className="row mt-5">
                    <FooterCol key={1} menuTitle={"QUICK CONTACT"} menuItems={quickContact}/>
                    <FooterCol key={2} menuTitle="COMPANY" menuItems={company}/>
                    <FooterCol key={3} menuTitle="QUICK LINK" menuItems={quickLink}/>
                    <FooterCol key={4} menuTitle="MORE" menuItems={more}/>
                </div>
                <div className="mt-5 text-center">
                    <h3 className="text-white">SUBSCRIBE NEWSLETTER</h3>
                    <input className="subscribe" type="text" placeholder="Enter your email address"></input>
                    <div className="mt-3">
                        <button className="brand-btn">SUBMIT</button>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;