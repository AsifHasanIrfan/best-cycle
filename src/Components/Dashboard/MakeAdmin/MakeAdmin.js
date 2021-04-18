import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        
        fetch('https://lit-earth-86489.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(response){
                alert('Admin added successfully')
            }
        })
        e.target.reset()
    };

    return (
        <div className="review-area">
            <h3 className="text-white p-5">Make A Admin</h3>
            <form className='review-form pt-5' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email Address</label>
                <input name="email" type="text" placeholder="Enter email" required ref={register} />
                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;