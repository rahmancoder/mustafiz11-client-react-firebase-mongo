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
            <Navbar sticky="top" bg="primary" variant="dark">
                <Container>
                    {/* <Navbar.Brand href="/home"> Tourism Travel & Travel Information</Navbar.Brand> */}
                    <Link className="m-2 text-decoration-none text-light" to="/home">Tourism Travel & Travel Information</Link>
                    <Nav className="me-5 p-2 text-center">
                        <Button className="bg-warning"><Link className="m-2 text-decoration-none" to="/home">Home</Link> </Button>
                        <Link className="m-2 text-decoration-none text-light" to="/tourism">Tourism Spot</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/travel">Travel Now</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/gallery">Gallery</Link>

                        {/* Admin Dashboard with CRUD operation , let's Design and Implement first next we will take this
                        into our conditional rendering after login */}
                        {/* <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link> */}
                        {/* <Link className="m-2 text-decoration-none text-light" to="/login">LogIn</Link> */}
                        {/* <Link className="m-2 text-decoration-none text-light" to="/register">Register</Link> */}

                        {user?.email ? (

                            <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link>

                        ) : (
                            <Link to="/admin" className="header-items m-2 text-decoration-none text-light">
                                AdminDashboard
                            </Link>
                        )}



                        {user?.email ? (

                            <Link className="m-2 text-decoration-none text-light" to="/tourism">
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
                        <Link className="m-2 text-decoration-none text-light" to="/questions">FAQ</Link>
                        {/* <Link className="m-2" to="/notfound">Not Found</Link> */}
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;