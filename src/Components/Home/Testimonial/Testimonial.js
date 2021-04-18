import React from 'react';

const Testimonial = ({review}) => {
    const { name, description, imageURL } = review;
    return (
        <div className="col-md-4 text-center mt-4">
            <div className="profile">
                <img className="user img-fluid" src={imageURL} alt="" />
                <h3>{name}</h3>
                <blockquote>{description}</blockquote>
            </div>
        </div>
    );
};

export default Testimonial;