import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Service = ({service}) => {
    const { imageURL, name, description, price, _id } = service;
    const history = useHistory();

    const handleService = () => {
        history.push("/service");
    }
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <Link style={{textDecoration: 'none'}} onClick={handleService} to={`/service/${_id}`}>
            <div className="card service-card rounded shadow-sm border-0">
                <div className="card-body p-4"><img src={imageURL} alt="" className="img-fluid service-img d-block mb-3" />
                    <h4>{name}</h4>
                    <p className="text-warning">${price}</p>
                    <p className="small text-muted font-italic">{description}</p>
                </div>  
            </div>
            </Link>
        </div>
    );
};

export default Service;