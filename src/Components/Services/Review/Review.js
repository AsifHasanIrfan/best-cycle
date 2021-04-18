import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Review.css';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data, e) => {
        const reviewData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL
        }
        fetch('https://lit-earth-86489.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(response => {
            if(response){
                alert('Review added successfully')
            }
        })
        e.target.reset()
    };
    
    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'c02c3069981bf3b5935d19ccd946c94d')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(response => {
            setImageURL(response.data.data.display_url)
        })
        .catch(err => {
            console.log(err)
        })

    }

    return (
        <div className="review-area">
            <h3 className="text-white p-4">Review</h3>
            <form className='review-form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" placeholder="Enter Name" required ref={register} />

                <label htmlFor="Image">Image</label>
                <input name="file" type="file" placeholder="Upload image" onChange={handleImageUpload} required />

                <label htmlFor="description">Description</label>   
                <textarea name="description" type="text" placeholder="Description" required ref={register}  />
                
                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default Review;