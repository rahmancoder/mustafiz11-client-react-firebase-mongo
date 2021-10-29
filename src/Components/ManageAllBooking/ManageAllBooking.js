import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ManageAllBooking = () => {
    return (
        <div>
            <h3> Will Show all booking from different users from different email and login and their stuffs here</h3>
            <h3> They can delete here</h3>
            <p> GET API MEthod and UPDATE API METHOD Here</p>
            <Button className="mx-2" variant="info"> <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link></Button>

        </div>
    );
};

export default ManageAllBooking;