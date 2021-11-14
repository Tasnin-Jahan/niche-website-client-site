import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './MakeReview.css'

const MakeReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://afternoon-beyond-23129.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2>Please Give Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="image url" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                Select your ratings:<select {...register("rating")} style={{
                    width: '20%',
                    marginBottom: '10px'
                }}>
                    <option value="5">5</option>
                    <option value="4.5">4.5</option>
                    <option value="4">4</option>
                    <option value="3.5">3.5</option>
                    <option value="3">3</option>
                    <option value="2.5">2.5</option>
                    <option value="2">2</option>
                    <option value="1.5">1.5</option>
                    <option value="1">1</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeReview;