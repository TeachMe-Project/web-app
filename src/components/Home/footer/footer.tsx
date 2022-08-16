import React from 'react';
import {Col, Row} from "react-bootstrap";

const Footer: React.FC = () => {
    return (
        <Row style={{height: "4vh", position: "absolute", bottom: "0", width: "100vw"}} className="text-center">
            <Col lg={12} className="my-md-0 d-md-block d-none">
                ©Copyright 2022. All rights reserved.
            </Col>
        </Row>
    );
};

export default Footer;