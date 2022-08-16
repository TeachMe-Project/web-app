import React, {useEffect, useState} from 'react';
import TextTransition, {presets} from "react-text-transition";
import {Button, Col, Container, Row} from "react-bootstrap";
import {ImArrowLeft2} from "react-icons/im";
import Images from "../../assets/images/Images";
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Footer from "../Home/footer/footer";

const TEXTS = [
    "Get started today and let Learning deliver your online learning. So, you can focus on the quality of your tutoring.",
    "Learning is an on-demand, easy-to-use, and cost-effective online learning solution for higher education institutions.",
    "Want to have a comprehensive understanding of your kid's online tution classes? You have arrived at the right place!"
];

const SignUpCategory = () => {

    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const {loginWithRedirect} = useAuth0();

    useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            5000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


    return (
       <>
        <Container fluid={true} className="signupCategory d-flex flex-column">
            <Row className="d-flex flex-row align-items-center">
                <Col lg={6} md={12} sm={12} className="leftSide d-flex flex-column justify-content-center">
                    <Row className="ms-lg-5 me-lg-4">
                        <Col>
                            <div
                                className="d-lg-flex d-md-flex flex-column align-items-lg-start align-items-md-start justify-content-between mt-4 mb-md-4">
                                <button onClick={()=> navigate('/')} style={{background:"none"}}
                                   className="backBtn d-lg-flex flex-row align-items-center text-decoration-none mb-lg-5 d-md-none d-sm-none border-0 bg">
                                    <ImArrowLeft2 style={{marginRight: "4px"}}/> Go Back
                                </button>
                                <img src={Images.logo} className="logo mt-lg-2" onClick={() => navigate('/')}
                                     alt="logo"/>
                            </div>
                            <h1 className="mt-lg-4 mt-md-5 mb-md-4 ms-md-2 Header mt-3">
                                Let's get started with Learning
                            </h1>
                            <p className="mt-lg-5 transformText ms-md-2 ms-sm-5">
                                <TextTransition springConfig={presets.wobbly}>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition>
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={12} sm={12}
                     className="d-flex flex-lg-row justify-content-lg-center justify-content-md-center mt-md-3 justify-content-md-center">
                    <Row className="categoryForm p-4">
                        <Col md={12} className="d-flex flex-column ms-2">
                            <img src={Images.bannerSignup} className="formImage" alt="form-category"/>
                            <h1 className="text-center my-lg-2 mt-sm-2">Sign up as</h1>
                            <Button onClick={() => navigate('/signup/teacher')}
                                    className="userBtn mt-lg-3 mt-md-3 mx-auto  mt-3">Teacher</Button>
                            <Button onClick={() => navigate('/signup/institute')}
                                    className="userBtn mt-lg-3 mt-md-3 mx-auto  mt-3">Institute</Button>
                            <Button onClick={() => navigate('/signup/parent')}
                                    className="userBtn mt-lg-3 mt-md-3 mx-auto userBtn mt-sm-2 mt-3">Parent</Button>
                            <Row>
                                <Col
                                    className="d-flex flex-row align-items-center justify-content-center mt-lg-4 mt-md-3 loginFooter">
                                    <h6 className="text-center mb-0">Already have an account?</h6>
                                    <button
                                       onClick={loginWithRedirect}
                                       className="ms-3 p-0 mb-0 text-decoration-none fw-bold login-button border-0 bg-transparent"
                                       style={{color: "#45484c"}}>Login</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    <Footer/>
    </>
    );
};

export default SignUpCategory;