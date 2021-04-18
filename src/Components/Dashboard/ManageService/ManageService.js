import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://lit-earth-86489.herokuapp.com/services')
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])

const deleteService = (id) => {
    fetch(`https://lit-earth-86489.herokuapp.com/delete/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if(data){
            alert('This service has been deleted')
        }
    })
}

    return (
        <div>
            <h3 className="text-info p-5">Manage services</h3>
            <div className="row m-5 bg-warning mb-5 p-4">
                    {
                        services.map(service => <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card rounded shadow-sm border-0">
                            <div className="card-body p-4"><img src={service.imageURL} alt="" className="img-fluid service-img d-block mb-3" />
                                <h4>{service.name}</h4>
                                <p className="text-warning">${service.price}</p>
                                <button onClick={() => deleteService(`${service._id}`)} className="btn btn-danger w-100">Delete</button>
                            </div>
                        </div>
                        </div>
                    )
                    }                        
            </div>
        </div>
    );
};

export default ManageService;