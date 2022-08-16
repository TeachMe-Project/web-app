import React from 'react';
import {Card, Col, Row} from "react-bootstrap";

const FooterHome: React.FC = () => {
    return (
        <Row className='p-0 w-100'>
            <Col className="p-2 mt-3 mb-0">
                <Card className="text-center p-0" style={{border:"none"}}>
                    <Card.Body className="p-0">
                        <Card.Title >©Copyright 2022. All rights reserved.</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default FooterHome;