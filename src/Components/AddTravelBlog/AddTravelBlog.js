import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddTravelBlog.css';

const AddTravelBlog = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }



    return (
        <div>
            <h3> Main CRUD Operation here</h3>
            <h3> GET API , UPDATE/POST API , DELETE API </h3>

            <div className="add-blog">
                <h2>Please Add a Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ height: '10vh' }} {...register("name", { required: true, maxLength: 20 })} placeholder="Travel Blog Name" />
                    <textarea style={{ height: '10vh' }} {...register("description")} placeholder="Travel Description and Information" />
                    <input style={{ height: '5vh' }} type="number" {...register("price")} placeholder="Travel Cost" />
                    <input style={{ height: '5vh' }} {...register("img")} placeholder="Travel image url" />
                    <input type="submit" />
                </form>
            </div>
            <Button className="mx-2" variant="info"> <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link></Button>


        </div>
    );
};

export default AddTravelBlog;