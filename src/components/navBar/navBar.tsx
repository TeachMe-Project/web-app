import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {Button, Col, Container, Nav, Navbar,Row} from 'react-bootstrap';
import Images from "../../assets/images/Images";
import {useNavigate} from "react-router-dom";

const NavBar: React.FC = () => {

    const {loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently, user} = useAuth0();
    const navigate = useNavigate();

    console.log(user);

    return (
        <Navbar collapseOnSelect expand="lg" variant="light" style={{fontSize: "20px",background:"white"}} className='sticky-top' >
            <Container fluid={true} >
                <Row className='w-100'>
                    <Col lg={2} md={12} xs={12} className='d-flex flex-row justify-content-between mt-md-2'>
                        <Navbar.Brand onClick={()=> navigate(-1)} style={{cursor:"pointer"}}>
                            <img src={Images.logo} style={{maxWidth: "240px"}} alt='logo'/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-2'/>
                    </Col>
                    <Col lg={10}>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-lg-auto ms-lg-3 ms-md-5 ps-md-4">
                                <Nav.Link href="#Home" className="me-2">Home</Nav.Link>
                                <Nav.Link href="#About-Us" className="me-2">About us</Nav.Link>
                                <Nav.Link href="#Pricing" className="me-2">Pricing</Nav.Link>
                                <Nav.Link href="#Download" className="me-2">Downloads</Nav.Link>
                                <Nav.Link href="#ContactUs" className="me-2">Contact us</Nav.Link>
                            </Nav>
                            <Nav className='ms-md-5 ps-md-4'>
                                {isAuthenticated ? (
                                    <>
                                        <Nav.Link>
                                            <Button variant="secondary" className="LoginBtn"
                                                    onClick={() => logout({returnTo: window.location.origin})}
                                                    style={{borderRadius: "20px", width: "100px"}}>
                                                Log out
                                            </Button></Nav.Link>
                                        <Nav.Link>
                                            <Button variant="secondary"  className="LoginBtn"
                                                    onClick={()=> navigate(`/${user?.family_name}`)}
                                                    style={{borderRadius: "20px", width: "100px"}}>
                                                Profile
                                            </Button>
                                        </Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link>
                                            <Button variant="secondary" onClick={loginWithRedirect} className="LoginBtn"
                                                    style={{borderRadius: "20px", width: "100px"}}>
                                                Login
                                            </Button></Nav.Link>
                                        <Nav.Link>
                                            <Button variant="secondary" onClick={()=> navigate('/signup')} className="SignupBtn"
                                                    style={{borderRadius: "20px", width: "100px"}}>
                                                Sign Up
                                            </Button>
                                        </Nav.Link>
                                    </>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default NavBar;