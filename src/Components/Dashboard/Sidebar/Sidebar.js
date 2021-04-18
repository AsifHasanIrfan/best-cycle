import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://lit-earth-86489.herokuapp.com/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: sessionStorage.getItem('email')})
        })
        .then(response => response.json())
        .then(data => {
            setIsAdmin(data);
        })
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        window.location.reload(false);
    }
    return ( 
        <div className="sidebar">
            <header>My App</header>
        <ul>
        <li><Link to="/service/dashboard/book">Book</Link></li>
        <li><Link to="/service/dashboard/booking">Booking List</Link></li>
        <li><Link to="/service/dashboard/review">Review</Link></li>
        {isAdmin && <div>
            <li><Link to="/dashboard/order">Order List</Link></li>
            <li><Link to="/dashboard/addService">Add Service</Link></li>
            <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
            <li><Link to="/dashboard/manageService">Manage Service</Link></li>
        </div>}
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default Sidebar;