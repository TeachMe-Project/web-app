import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import Feature from "./feature";
import Images from "../../../assets/images/Images";

const AboutUs: React.FC = () => {

    return (
        <Container fluid={true} className='about-us mt-lg-1 py-lg-1' id="About-Us">
            <h1 className='about-us-header text-center'>About Learning</h1>
            <Row style={{display: "flex", flexDirection: "row"}}>
                <Col lg={5} className='d-flex align-items-center'>
                    <Image src={Images.banner} style={{height: "auto"}} className='d-lg-block d-none w-100 my-auto'></Image>
                </Col>
                <Col lg={7} className='d-flex flex-lg-column align-items-center justify-content-evenly my-md-5 flex-md-column-reverse'>
                    <Row className='w-100 ms-md-1'>
                        <Feature
                            title={"Enable teachers to keep track of student online activities during live classroom sessions."}
                            image={Images.monitoring}/>
                        <Feature
                            title={"Enable Institutes to recruit teachers to conduct online courses and improve their\n" +
                                "online presence."} image={Images.virtual_class}/>
                    </Row>
                    <Row className='w-100 ms-md-1 mb-md-3'>
                        <Feature
                            title={"Offer parents to have a comprehensive understanding of their children’s online\n" +
                                "education activities."} image={Images.reading_books}/>
                        <Feature
                            title={"Offer built-in user-friendly video conferencing platform which is more convenient for\n" +
                                "students & teachers."} image={Images.online_lesson}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;