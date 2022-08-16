import React from 'react';
import InstituteLayout from "./InstituteLayout";
import {Button, Card, Col, ListGroup, Row, Form} from "react-bootstrap";
import Images from "../../../assets/images/Images";
import {FaSearch} from "react-icons/fa";

const data = {
    id: 10000102345,
    tutor_name: 'Amila Banadaranayake',
    email: "amilabandaranayake@gmail.com",
    subject: 'Business & Accounting Studies',
    contact:"0771234567",
    descriprtion: 'I\'m having more than 7 years of experience in teaching at a renowned\n' +
        '                    government school as a Business & Accounting Studies teacher\n My students were able to produce great results in the examinations.\n'
};

const InstituteAddTutor = () => {
    return (
        <InstituteLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Add Tutor
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="px-3 d-flex flex-row align-items-center">
                        <Form.Control type="text" placeholder="Enter email of the tutor" className='mb-3'/>
                        <Button variant='secondary' className='mb-3 ms-2' style={{borderRadius:"50%"}}><FaSearch/></Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='d-flex flex-column align-items-center  next-table-list'>
                        <Card className='d-flex flex-row w-100'>
                            <Card.Img style={{width: "200px",height:"200px", borderRadius: "50%"}} className='my-auto' variant="top"
                                      src={Images.tutorpro}/>
                            <Card.Body>
                                <Card.Title>Tutor Name: {data.tutor_name}</Card.Title>
                            <ListGroup className="list-group-flush" style={{width:"fit-content"}}>
                                <ListGroup.Item className="px-0"><span style={{fontWeight:"700", marginRight:"10px"}}>Subject:</span> {data.subject}</ListGroup.Item>
                                <ListGroup.Item className="px-0"><span style={{fontWeight:"700", marginRight:"10px"}}>Email:</span> {data.email}</ListGroup.Item>
                                <ListGroup.Item className="px-0"><span style={{fontWeight:"700", marginRight:"10px"}}>Contact-No:</span> {data.contact}</ListGroup.Item>
                                <ListGroup.Item className="px-0"><span style={{fontWeight:"700", marginRight:"10px"}}>Description</span></ListGroup.Item>
                            </ListGroup>
                                <Card.Text>
                                    {data.descriprtion}
                                </Card.Text>
                                <Button style={{float:"right", borderRadius:"15px"}} variant='secondary'>Add to Institute</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </InstituteLayout>
    );
};

export default InstituteAddTutor;