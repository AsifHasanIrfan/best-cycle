import React from 'react';
import StripePayment from '../StripePayment/StripePayment';

const Book = ({service}) => {
  console.log(service)
    const handlePaymentSuccess = (paymentId, billing_details) => {
        const orderDetails = {
        user: sessionStorage.getItem('email'),
        service: service,
        paymentId,
        billing_details,
        status: 'Pending',
        orderTime: new Date()
        }
        fetch('https://lit-earth-86489.herokuapp.com/addBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(result => {
        if(result){
            alert('Your order has been placed successfully')
        }
        })
    }

    return (
        <div className="h-100 d-flex justify-content-center align-items-center">
            {
                service === undefined ? <h3 className="my-auto">No service selected. please select a service first</h3>
                :
                <div className="w-50">
                <h4 className="px-3">Service: {service?.name}</h4>
                <StripePayment service={service} handlePayment={handlePaymentSuccess} />
                </div>
            }
        </div>
    );
};

export default Book;