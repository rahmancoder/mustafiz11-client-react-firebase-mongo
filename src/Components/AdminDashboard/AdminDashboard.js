import React from 'react';
import AddTravelBlog from '../AddTravelBlog/AddTravelBlog';
import ManageAllBooking from '../ManageAllBooking/ManageAllBooking';
import MyBooking from '../MyBooking/MyBooking';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h2>My Orders/ My bookings</h2>
            <h2>Manage All orders</h2>
            <h2>Add a New Service / Add new Booking /Add new Travel blog</h2>
            <h2>CRUD Operation must be here</h2>

            <Button className="mx-2" variant="danger"> <Link className="m-2 text-decoration-none text-light" to="/mybooking">MyBooking</Link></Button>
            <Button className="mx-2" variant="danger"> <Link className="m-2 text-decoration-none text-light" to="/manageallbooking">Manage ALL Booking</Link></Button>

            <Button className="mx-2" variant="danger"> <Link className="m-2 text-decoration-none text-light" to="/addtravelblog">Add Travel Blog</Link></Button>



            {/* <MyBooking></MyBooking>
            <ManageAllBooking></ManageAllBooking>
            <AddTravelBlog></AddTravelBlog> */}


        </div>
    );
};

export default AdminDashboard;