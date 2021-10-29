import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MyBooking = () => {
    return (
        <div>
            <h3>User email will filter the user all booking here, He can see his all Bookings/ Indivitual booking</h3>
            <Button className="mx-2" variant="info"> <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link></Button>

        </div>
    );
};

export default MyBooking;