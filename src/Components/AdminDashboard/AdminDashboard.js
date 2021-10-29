import React from 'react';
import AddTravelBlog from '../AddTravelBlog/AddTravelBlog';
import ManageAllBooking from '../ManageAllBooking/ManageAllBooking';
import MyBooking from '../MyBooking/MyBooking';

const AdminDashboard = () => {
    return (
        <div>
            <h2>My Orders/ My bookings</h2>
            <h2>Manage All orders</h2>
            <h2>Add a New Service / Add new Booking /Add new Travel blog</h2>
            <h2>CRUD Operation must be here</h2>
            <MyBooking></MyBooking>
            <ManageAllBooking></ManageAllBooking>
            <AddTravelBlog></AddTravelBlog>


        </div>
    );
};

export default AdminDashboard;