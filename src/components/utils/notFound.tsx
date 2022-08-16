import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import images from "../../assets/images/Images";
import {useNavigate} from "react-router-dom";

const NotFound: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Container fluid={true} className='d-flex align-items-center' style={{height: "100vh"}}>
            <Row className='d-flex justify-content-center m-0'>
                <Col lg={5} className='my-auto text-center'>
                    <img src={images.notFound} className='w-75' alt='not found'/>
                    <h3 className='mt-1'>We're sorry, the page you requested could not be found</h3>
                    <h3>Please go back to the homepage</h3>
                    <Button variant="secondary" className='mt-2 px-4 py-2' style={{borderRadius: "20px"}}
                            onClick={() => navigate('/')}>GO HOME</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;