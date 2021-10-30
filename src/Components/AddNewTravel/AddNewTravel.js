import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import './AddNewTravel.css';

const AddNewTravel = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        // axios.post('http://localhost:5000/blog', data)
        axios.post('http://localhost:5000/travel', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <h3> Add A NEW Travel LIST</h3>
            <h3> GET API , UPDATE/POST API , DELETE API </h3>

            <div className="add-travel">
                <h2>Please Add a New Travel List</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ height: '10vh' }} {...register("Travel_destination", { required: true, maxLength: 20 })} placeholder="Travel Destination" />
                    <textarea style={{ height: '10vh' }} {...register("travel_description")} placeholder="Travel Description and Information" />
                    <input style={{ height: '5vh' }} type="number" {...register("travel_cost")} placeholder="Travel Cost" />
                    <input style={{ height: '5vh' }} {...register("picture")} placeholder="Destination image url" />
                    <input type="submit" />
                </form>
            </div>
            <Button className="mx-2" variant="info"> <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link></Button>


        </div>
    );
};

export default AddNewTravel;