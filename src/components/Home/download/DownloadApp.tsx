import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Images from "../../../assets/images/Images";
import {FaDownload} from "react-icons/fa";

const DownloadApp: React.FC = () => {


    return (
        <Container fluid={true} className="pt-4 mb-5 about-us" id="Download">
            <h1 className="about-us-header text-center">Download Desktop Application</h1>
            <Row className="d-flex justify-content-center flex-row mt-4 mx-0 px-0 mb-5">
                <Col lg={7} md={12} xs={12} className='d-flex flex-row align-items-center justify-content-evenly'>
                    <Card style={{display: "flex", flexDirection: "column",alignItems:"center", background: "#fafafa", borderRadius:"10px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", color:"#95a5a6"
                    }}
                    className="px-5 py-3">
                        <Card.Img src={Images.windows} style={{width:"150px"}} className='m-1'></Card.Img>
                        <Card.Body>
                            <Card.Title>Windows</Card.Title>
                        </Card.Body>
                        <Button className='nextBtn'><FaDownload className='me-1'/>Download</Button>
                    </Card>
                    <Card style={{display: "flex", flexDirection: "column",alignItems:"center", background: "#fafafa", borderRadius:"10px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", color:"#95a5a6"
                    }}
                          className="px-5 py-3">
                        <Card.Img src={Images.linux} style={{width:"150px"}} className='m-1'></Card.Img>
                        <Card.Body>
                            <Card.Title>Linux</Card.Title>
                        </Card.Body>
                        <Button className='nextBtn'><FaDownload className='me-1'/>Download</Button>
                    </Card>
                </Col>
                <Col lg={5}>
                    <img src={Images.download} className="w-100 d-lg-block d-none"/>
                </Col>
            </Row>

        </Container>
    );
};

export default DownloadApp;