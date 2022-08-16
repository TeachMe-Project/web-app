import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import Images from "../../../assets/images/Images";

const Banner: React.FC = () => {
    return (
        <Container fluid={true} className='banner mb-lg-5' id="Home">
            <Row className="mt-3 d-flex flex-lg-row flex-column-reverse">
                <Col lg={5} md={12} className='d-lg-flex flex-lg-column justify-content-lg-center'>
                    <Row className="ms-lg-3">
                        <Col lg={12} className="m-0 px-lg-4 text-lg-start text-md-center text-center">
                            <h1 className='banner-header text-lg-start text-center'>
                                Step into a brand new learning experience
                            </h1>
                            <p className='mt-lg-3 banner-text text-md-start '>
                                It is the convenient mode of learning and #1 online platform
                                in Sri Lanka to offer reliable education courses with a unique set of
                                features.
                            </p>
                            <Button className="px-md-4 py-2 mt-3 GetStartedBtn" href="#About-Us"
                                    style={{marginRight: "5px", fontSize: "1rem", fontWeight: "600"}}> Get Started
                            </Button>

                        </Col>
                    </Row>
                </Col>
                <Col lg={7} md={12}>
                    <Row>
                        <Col lg={12} md={12} className='mx-md-auto'>
                            <Image src={Images.home} className='w-100'></Image>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
};

export default Banner;