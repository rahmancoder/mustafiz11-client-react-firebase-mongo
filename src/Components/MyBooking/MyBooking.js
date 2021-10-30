import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { Table } from "react-bootstrap";

const MyBooking = () => {

    const [myallbooking, setMyallbooking] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/booking")
            .then((res) => res.json())
            .then((data) => setMyallbooking(data));
    }, []);



    return (
        <div className="container">
            <h3>User email will filter the user all booking here, He can see his all Bookings/ Indivitual booking</h3>

            <h1>My ALL Booking {myallbooking?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>BookingID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {myallbooking?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.DestinationName}</td>
                            <td>{pd?.userEmail}</td>
                            <td>{pd?.description}</td>
                            <button className="btn bg-warning">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>




            <Button className="mx-2" variant="info"> <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link></Button>

        </div>
    );
};

export default MyBooking;