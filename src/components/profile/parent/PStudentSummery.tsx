import React from 'react';
import ParentLayout from "./ParentLayout";
import {Col, ListGroup, Row, Tab, Tabs} from "react-bootstrap";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const PStudentSummery = () => {

    const navigate = useNavigate();

    return (
        <ParentLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center d-flex flex-row align-items-center justify-content-between'>
                            Summery
                            <AiOutlineCloseCircle className='me-lg-4' style={{cursor: "pointer"}}
                                                  onClick={() => navigate(-1)}/>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} className='d-flex align-items-center flex-column justify-content-center
                    '>
                        <ListGroup className="list-group-flush text-start p-1" style={{width: "fit-content", border:"2px solid grey", borderRadius:"10px"}}>
                            <ListGroup.Item className="px-0"><span style={{
                                fontWeight: "700",
                                marginRight: "10px"
                            }}>Subject:</span> Mathematics</ListGroup.Item>
                            <ListGroup.Item className="px-0"><span style={{
                                fontWeight: "700",
                                marginRight: "10px"
                            }}>Tutor:</span> Saman Karunanayaka</ListGroup.Item>
                            <ListGroup.Item className="px-0"><span
                                style={{fontWeight: "700", marginRight: "10px"}}>Date:</span> 2022-08-22
                            </ListGroup.Item>
                            <ListGroup.Item className="px-0"><span
                                style={{fontWeight: "700", marginRight: "10px"}}>Start Time:</span> 15.30 h
                            </ListGroup.Item>
                            <ListGroup.Item className="px-0"><span
                            style={{fontWeight: "700", marginRight: "10px"}}>End Time:</span> 17.30 h
                        </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={9} >
                        <Tabs
                            defaultActiveKey="analytics"
                            id="uncontrolled-tab-example"
                            className="mb-3 mt-2"
                        >
                            <Tab eventKey="analytics" title="Analytics">
                                <h1>Tab 1</h1>
                                <h1>Tab 1</h1>
                                <h1>Tab 1</h1>
                                <h1>Tab 1</h1>
                                <h1>Tab 1</h1>
                                <h1>Tab 1</h1>
                            </Tab>
                            <Tab eventKey="usedapps" title="Used Unwanted Apps">
                                <h1>Tab 2</h1>
                            </Tab>
                            <Tab eventKey="photos" title="Captures of Student">
                                <h1>Tab 3</h1>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Col>
        </ParentLayout>
    );
};

export default PStudentSummery;