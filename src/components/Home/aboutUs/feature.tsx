import React from 'react';
import {Card, Col} from "react-bootstrap";

type FeatureProps = {
    title: string,
    image: string
}

const Feature: React.FC<FeatureProps> = (props) => {

    const {title, image} = props;

    return (
        <Col style={{margin: "5px"}}>
            <Card style={{display: "flex", flexDirection: "column", background: "#fafafa", borderRadius:"10px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", color:"#95a5a6"
            }}>
                <Card.Img src={image} style={{width: "90px"}} className='p-2 m-1'></Card.Img>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Feature;