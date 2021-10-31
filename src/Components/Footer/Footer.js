import React from 'react';
import footerimage from '../../images/footerimages/footerimage.png';

const Footer = () => {
    return (
        <div className="bg-dark text-light text-center">
            <div className="d-flex  mt-4 ">
                <div className="col-md-5 mt-4 mx-3">
                    <h5>Tourism Travel & Travel Information</h5>
                    <p>
                        Select Exciting Travel Packages at Affordable Rates. Visit or Call Us and Let Us Help. Join a Fun and Adventurous Travel Tour and Enjoy Sightseeing in a New Destination. Highlights: Founded In 2016, Non-Profit Organization, Annual Report Available
                    </p>
                </div>
                <div className="mt-4 mx-5">
                    <h5>CONTACT US</h5>
                    <p><i class="far fa-envelope-open"></i> EMAIL:tourismtravel@gmail.com</p>
                    <p><i class="fas fa-mobile-alt"></i> Phone:+8801871414746</p>
                    <p><i class="fas fa-map-marker-alt"></i> Address:Dhaka, Bangladesh</p>
                    <p><i class="fas fa-fax"></i> Fax:www.sayhemrahman.com</p>
                </div>
                <div className="mt-4 mx-4">
                    <h5>New Places</h5>
                    <p>Air Ticket</p>
                    <p>Booking Us</p>
                    <p>Travel Blog</p>
                    <p>Travel Membership</p>

                </div>
                <div className="mt-4 mx-4">
                    <h5>COMPANY</h5>
                    <p>Meet Traveller </p>
                    <p>Traveller Community</p>
                    <p>Tourist Spot</p>
                    <p>Inside and Outside Country Tourism</p>
                    <p>On Demand Ticket</p>
                </div>
                <div>
                    <img className="w-50 mt-5" src={footerimage} alt="" />
                </div>

            </div>
            <hr />
            <p>Created by © MD Mustafizur Rahman  All rights reserved</p>

        </div>
    );
};

export default Footer;