import React from 'react';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import Images from "../../../assets/images/Images";
import {useNavigate} from "react-router-dom";

const NavbarCommon = () => {
    const navigate = useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className="profile-navbar sticky-top"
                style={{fontSize: "20px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 25px 20px -20px", background: "#fff"}}>
            <Container fluid={true} className='mx-0 py-0' style={{width: "100vw"}}>
                <Row className='w-100'>
                    <Col lg={2} md={12} xs={12} className='d-flex flex-row justify-content-between mt-md-2 py-0'>
                        <Row className='d-flex flex-row align-content-center'>
                            <Col>
                                <Navbar.Brand onClick={() => navigate(-1)} style={{cursor: "pointer"}}>
                                    <img src={Images.logo} style={{maxWidth: "240px"}} alt='logo'
                                         className='profile-nav-logo'/>
                                </Navbar.Brand>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default NavbarCommon;