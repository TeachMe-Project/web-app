import React from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import Images from "../../../assets/images/Images";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import {BsFillBellFill} from 'react-icons/bs';
import {FiMenu} from 'react-icons/fi';
import {useMediaQuery} from "react-responsive";
// @ts-ignore
import swal from "@sweetalert/with-react";

type InstituteNavBarProps = {
    isMobile: boolean,
    handleToggleSidebar: () => void
}




const InstituteNavBar: React.FC<InstituteNavBarProps> = (props: InstituteNavBarProps) => {

    const {user, logout} = useAuth0();
    const navigate = useNavigate();
    const {isMobile, handleToggleSidebar} = props;
    const isPc = useMediaQuery({minWidth: 991});

    const userLogOut = () => {
            swal({
                title: "Log out",
                text: `Do you really want to logout?`,
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: true
                },
            })
                .then((willDelete: any) => {
                    if (willDelete) {
                        logout();
                    }
                })
        };

    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className="profile-navbar"
                style={{fontSize: "20px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 25px 20px -20px"}}>
            <Container fluid={true} className='mx-0 py-0' style={{width: "100vw"}}>
                <Row className='w-100'>
                    <Col lg={2} md={12} xs={12} className='d-flex flex-row justify-content-between mt-md-2 py-0'>
                        <Row className='d-flex flex-row align-content-center'>
                            <Col>
                                {isMobile && <Button className='ms-0 me-1 p-1 pb-2' variant='outline-light'
                                                     style={{color: "#82807c", verticalAlign: "middle"}}
                                                     onClick={handleToggleSidebar}><FiMenu
                                    className='navbar-toggler-icon'/></Button>
                                }
                                <Navbar.Brand onClick={() => navigate('/')} style={{cursor: "pointer"}}>
                                    <img src={Images.logo} style={{maxWidth: "240px"}} alt='logo'
                                         className='profile-nav-logo'/>
                                </Navbar.Brand>
                            </Col>
                        </Row>
                        {!isPc &&
                        <Row className='d-flex flex-row-reverse align-items-center'>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='p-0 border-none m-0'
                                           style={{width: "fit-content", borderRadius: "50%"}}
                            ><img src={user?.picture}
                                  style={{height: "35px", borderRadius: "50%"}}
                                  alt='user'/></Navbar.Toggle>
                            <BsFillBellFill className='profile-notification me-3'/>

                        </Row>
                        }
                    </Col>
                    <Col lg={10} className='ps-2'>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav
                                className='ps-md-4 ms-auto d-flex flex-lg-row flex-column align-items-end navbar-expand-card'>
                                {isPc &&
                                <Nav.Link>
                                    <BsFillBellFill className='profile-notification' onClick={() => navigate(`/${user?.family_name}/notification`)}/>
                                </Nav.Link>}
                                <Nav.Link>
                                    <Button variant="secondary" className="LoginBtn"
                                            style={{borderRadius: "20px", width: "100px"}}
                                            onClick={() => userLogOut()}>
                                        Logout
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default InstituteNavBar;