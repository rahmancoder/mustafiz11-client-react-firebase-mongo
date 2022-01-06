import React from 'react';
import useFirebase from '../../hooks/useFirebase';

import { Link } from 'react-router-dom';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    // const { handleLogout, user } = useFirebase();
    const { handleLogout, user } = useAuth();
    return (
        <>
            {/* <Navbar sticky="top" bg="primary" variant="dark"> */}
            {/* <Container> */}
            {/* <Navbar.Brand href="/home"> Tourism Travel & Travel Information</Navbar.Brand> */}
            {/* <Link className="m-2 text-decoration-none text-light" to="/home">Tourism Travel & Travel Information</Link> */}
            {/* <Nav className="me-5 p-2 text-center"> */}
            {/* <Button className="bg-warning"><Link className="m-2 text-decoration-none" to="/home">Home</Link> </Button> */}

            {/* <Link className="m-2 text-decoration-none text-light" to="/travel">Travel Now</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/gallery">Gallery</Link> */}
            {/* 
                        <Link className="m-2 text-decoration-none text-light" to="/mybooking">My Booking</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/addtravel">Add Travel</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/manageallbooking">Manage All Booking</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/addtravelblog">Add Blog</Link> */}

            {/* {user?.email ? (

                            <Link className="m-2 text-decoration-none text-light" to="/mybooking">My Booking</Link>

                        ) : (
                            <Link to="/login" className="header-items m-2 text-decoration-none text-light">

                            </Link>
                        )} */}


            {/* {user?.email ? (

                            <Link className="m-2 text-decoration-none text-light" to="/addtravel">Add Travel</Link>

                        ) : (
                            <Link to="/login" className="header-items m-2 text-decoration-none text-light">

                            </Link>
                        )} */}

            {/* {user?.email ? (

                            <Link className="m-2 text-decoration-none text-light" to="/manageallbooking">Manage All Booking</Link>

                        ) : (
                            <Link to="/login" className="header-items m-2 text-decoration-none text-light">

                            </Link>
                        )} */}

            {/* {user?.email ? (

                            <Link className="m-2 text-decoration-none text-light" to="/addtravelblog">Add Blog</Link>

                        ) : (
                            <Link to="/login" className="header-items m-2 text-decoration-none text-light">

                            </Link>
                        )} */}



            {/* {user?.email ? (

                            <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link>

                        ) : (
                            <Link to="/login" className="header-items m-2 text-decoration-none text-light">
                                AdminDashboard
                            </Link>
                        )} */}



            {/* {user?.email ? (

                            <Link className="m-2 text-decoration-none text-light" to="/home">
                                <li onClick={handleLogout} className="header-items">
                                    Logout
                                </li>
                            </Link>

                        ) : (
                            <Link to="/login" className="header-items m-2 text-decoration-none text-light">
                                Login
                            </Link>
                        )} */}
            {/* {
                            user?.email && <Link className="m-2 text-decoration-none text-light" to="/">
                                <li className="header-items">
                                    {user.displayName}
                                </li>
                            </Link>
                        } */}

            {/* <Link className="m-2" to="/notfound">Not Found</Link> */}
            {/* </Nav> */}
            {/* </Container> */}
            {/* </Navbar> */}





            {/*  Responsive Navbar Added */}





            <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
                <Container>
                    <Link className="m-2 text-decoration-none text-light" to="/home">Tourism Travel & Travel Information</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-5 p-2 text-center">
                            <Button className="bg-warning"><Link className="m-2 text-decoration-none" to="/home">Home</Link> </Button>

                            <Link className="m-2 text-decoration-none text-light" to="/travel">Travel Now</Link>
                            <Link className="m-2 text-decoration-none text-light" to="/gallery">Gallery</Link>
                            {/* 
                        <Link className="m-2 text-decoration-none text-light" to="/mybooking">My Booking</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/addtravel">Add Travel</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/manageallbooking">Manage All Booking</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/addtravelblog">Add Blog</Link> */}

                            {user?.email ? (

                                <Link className="m-2 text-decoration-none text-light" to="/mybooking">My Booking</Link>

                            ) : (
                                <Link to="/login" className="header-items m-2 text-decoration-none text-light">

                                </Link>
                            )}


                            {user?.email ? (

                                <Link className="m-2 text-decoration-none text-light" to="/addtravel">Add Travel</Link>

                            ) : (
                                <Link to="/login" className="header-items m-2 text-decoration-none text-light">

                                </Link>
                            )}

                            {user?.email ? (

                                <Link className="m-2 text-decoration-none text-light" to="/manageallbooking">Manage All Booking</Link>

                            ) : (
                                <Link to="/login" className="header-items m-2 text-decoration-none text-light">

                                </Link>
                            )}

                            {user?.email ? (

                                <Link className="m-2 text-decoration-none text-light" to="/addtravelblog">Add Blog</Link>

                            ) : (
                                <Link to="/login" className="header-items m-2 text-decoration-none text-light">

                                </Link>
                            )}



                            {user?.email ? (

                                <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link>

                            ) : (
                                <Link to="/login" className="header-items m-2 text-decoration-none text-light">
                                    AdminDashboard
                                </Link>
                            )}



                            {user?.email ? (

                                <Link className="m-2 text-decoration-none text-light" to="/home">
                                    <li onClick={handleLogout} className="header-items">
                                        Logout
                                    </li>
                                </Link>

                            ) : (
                                <Link to="/login" className="header-items m-2 text-decoration-none text-light">
                                    Login
                                </Link>
                            )}
                            {
                                user?.email && <Link className="m-2 text-decoration-none text-light" to="/">
                                    <li className="header-items">
                                        {user.displayName}
                                    </li>
                                </Link>
                            }

                            {/* <Link className="m-2" to="/notfound">Not Found</Link> */}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;