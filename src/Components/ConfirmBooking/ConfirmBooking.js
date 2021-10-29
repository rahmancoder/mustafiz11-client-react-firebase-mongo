import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import './ConfirmBooking.css';

const ConfirmBooking = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('/mustafiztravel.json', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }



    return (
        <div>
            <h2>This is Confirm Booking Page POST Your Travel BOOK NOW</h2>

            <div className="add-booking">
                <h2>Please Confirm Your Booking</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ height: '10vh' }} {...register("name", { required: true, maxLength: 20 })} placeholder="Destination" />
                    <textarea style={{ height: '10vh' }} {...register("description")} placeholder="Any Extra Query about the Journey?" />
                    <input style={{ height: '5vh' }} type="number" {...register("price")} placeholder="Travel Cost" defaultValue="2000" />
                    <input style={{ height: '5vh' }} {...register("img")} placeholder="User Email" />
                    <input className="bg-danger text-light" type="submit" />
                </form>
            </div>
            <Button className="mx-2" variant="dark"> <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link></Button>

        </div>
    );
};

export default ConfirmBooking;