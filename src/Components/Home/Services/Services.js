import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://lit-earth-86489.herokuapp.com/services')
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className="services-section">   
            <div className="container">
                <div className="services-content">
                    <h2>Our Services</h2>
                    <p>Drop off by appointment only Email or call to schedule. All service inquiries qualify for a free estimate.</p>
                </div>
                <div className="row mb-5 pb-5">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }                        
                </div>
            </div>
        </section>
    );
};

export default Services;