import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { Table } from "react-bootstrap";

import useAuth from '../../hooks/useAuth';

const MyBooking = () => {

    const { user } = useAuth();
    const [myallbooking, setMyallbooking] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:5000/booking")
        fetch("https://frightening-spell-88460.herokuapp.com/booking")
            .then((res) => res.json())
            .then((data) => setMyallbooking(data));
        // .then((data) => {
        //     setMyallbooking(data)
        //     const found = myallbooking.filter(d => d.userEmail == user?.email)
        //     console.log('found', found);
        // });


    }, []);


    //  This will work with Firebase Authentication and then it will filter out from there
    useEffect(() => {

        // if (data.userEmail == user?.email)
        const found = myallbooking.filter(d => d.userEmail == user?.email)
        console.log('found', found);
        setMyallbooking(found);


    }, [])
    // [user.email])
    //  [myallbooking, setMyallbooking])


    // DELETE A Privious My Booking
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/booking/${id}`;
            // const url = `http://localhost:5000/mybooking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingbooking = myallbooking.filter(data => data._id !== id);
                        setMyallbooking(remainingbooking);
                    }
                });
        }
    }



    return (
        <div className="container">
            <h1 className="text-danger">Show Indivitual User Booking Information</h1>

            <h1 className="text-danger">My ALL Booking {myallbooking?.length} </h1>
            {/* <h1>My ALL Booking {found?.length}</h1> */}
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



                {/* 
                <tbody> */}
                {/* <tr> */}
                {/* <td>{myallbooking.index}</td> */}
                {/* <td>{myallbooking[0]?.DestinationName}</td> */}
                {/* <td>{myallbooking?.DestinationName}</td> */}
                {/* <td>{myallbooking[0]?.userEmail}</td> */}
                {/* <td>{myallbooking?.description}</td> */}
                {/* <button className="btn bg-warning">Delete</button> */}
                {/* <button onClick={() => handleDeleteUser(myallbooking._id)}>X</button> */}

                {/* <td>{ }</td>
                        <td>{myallbooking?.found.DestinationName}</td>
                        <td>{found[userEmail]}</td>
                        <td>{myallbooking?.found.description}</td> */}
                {/* </tr> */}
                {/* </tbody> */}

                {myallbooking?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.DestinationName}</td>
                            <td>{pd?.userEmail}</td>
                            <td>{pd?.description}</td>
                            {/* <button className="btn bg-warning">Delete</button> */}
                            <button onClick={() => handleDeleteUser(myallbooking._id)}>X</button>
                        </tr>
                    </tbody>
                ))}

            </Table>




            <Button className="mx-2" variant="info"> <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link></Button>

        </div>
    );
};

export default MyBooking;