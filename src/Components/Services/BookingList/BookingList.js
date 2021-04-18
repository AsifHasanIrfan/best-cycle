import React, { useEffect, useState } from 'react';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://lit-earth-86489.herokuapp.com/booking?email='+sessionStorage.getItem('email'))
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])

    return (
        <div className="">
            <h3 className="mx-5 mb-5">My Booking</h3>
        <div className="row w-75 mx-auto mb-5 pb-5">
            {
                bookings.length === 0 && <h3>You have no booking yet.</h3>
            }
            {
                bookings.map(book => <div className="col-md-6 mb-4">
                    <div className="card rounded shadow-sm border-0">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <img src={book.service.imageURL} alt="" className="img-fluid service-img d-block mb-3" />
                                <h3 style={{
                                    backgroundColor: '#000080',
                                    color: '#fff',
                                    padding: '5px 20px',
                                    borderRadius: '5px'
                                }}>{book.status}</h3>
                            </div>
                            <h4>{book.service.name}</h4>
                            <p className="text-warning">${book.service.price}</p>
                            <p className="small text-muted font-italic">{book.service.description}</p>
                        </div>  
                    </div>
                </div>
            )
            }                 
        </div>
        </div>
    );
};

export default BookingList;