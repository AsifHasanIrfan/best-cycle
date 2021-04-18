import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-lg-3 col-md-6 mt-4 mb-lg-0 footer-content col-6 text-center">
            <h6 className="">{props.menuTitle}</h6>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-white">{item.name}</Link></li>)
                 }
            </ul>
        </div>
    );
};

export default FooterCol;