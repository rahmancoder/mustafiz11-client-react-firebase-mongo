import React from 'react';
import AddTravelBlog from '../AddTravelBlog/AddTravelBlog';
import ManageAllBooking from '../ManageAllBooking/ManageAllBooking';
import MyBooking from '../MyBooking/MyBooking';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import adminimg from '../../images/admin/adminimg.jpg';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Admin Panel and Manage Task</h2>
            <img src={adminimg} alt="" />

            <Button className="mx-2" variant="danger"> <Link className="m-2 p-5 text-decoration-none text-light" to="/mybooking">MyBooking</Link></Button>
            <Button className="mx-2" variant="danger"> <Link className="m-2 p-5 text-decoration-none text-light" to="/manageallbooking">Manage ALL Booking</Link></Button>

            <Button className="mx-2" variant="danger"> <Link className="m-2 p-5 text-decoration-none text-light" to="/addtravel">Add Travel to Home Page </Link></Button>

            <Button className="mx-2" variant="danger"> <Link className="m-2 p-5 text-decoration-none text-light" to="/addtravelblog">Add Travel Blog</Link></Button>



            {/* <MyBooking></MyBooking>
            <ManageAllBooking></ManageAllBooking>
            <AddTravelBlog></AddTravelBlog> */}


        </div>
    );
};

export default AdminDashboard;