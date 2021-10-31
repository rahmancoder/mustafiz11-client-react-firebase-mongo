import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const ManageAllBooking = () => {

    const [manageallbooking, setManageallbooking] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:5000/booking")
        fetch("https://frightening-spell-88460.herokuapp.com/booking")
            .then((res) => res.json())
            .then((data) => setManageallbooking(data));


    }, []);


    return (
        <div className="container">
            <h1 className="text-danger">Let's Manage ALL Booking Here</h1>

            <h1 className="text-danger">Managed ALL Booking: {manageallbooking?.length}</h1>
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
                {manageallbooking?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.DestinationName}</td>
                            <td>{pd?.userEmail}</td>
                            <td>{pd?.description}</td>
                            <button className="btn bg-warning">Delete</button>
                            {/* <button onClick={() => handleDeleteUser(myallbooking._id)}>X</button> */}
                        </tr>
                    </tbody>
                ))}
            </Table>




            <Button className="mx-2" variant="info"> <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link></Button>

        </div>
    );
};

export default ManageAllBooking;