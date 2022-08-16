import React from 'react';
import {Button, Card, Col, ListGroup} from "react-bootstrap";
import {FcOk} from "react-icons/fc";
import {BsFillCartCheckFill} from "react-icons/bs";
import {IconContext} from "react-icons";

type PricingCardProps = {
    title: string,
    description: string
}

const PricingCard: React.FC<PricingCardProps> = (props) => {

    const {title, description} = props;
    return (
        <Col xl={3} md={5} xs={10} className="d-flex justify-content-center h3">
            <Card>
                <Card.Body style={{textAlign: "center"}}>
                    <Button style={{
                        width: "100%",
                        margin: "auto",
                        fontSize: "25px",
                        border: "none",
                        fontWeight: "700",
                        color:"#2d3436"
                    }}>{title}</Button>
                    <Card.Text style={{fontSize: "50px", margin: "20px", color:"#012250"}}>{description}</Card.Text>
                    <ListGroup variant="flush" style={{fontSize: "16px", textAlign: "left", color:"#2d3436"}}>
                        <ListGroup.Item style ={{color:"#2d3436"}}> <FcOk/> Upto 2 hour Class duration</ListGroup.Item>
                        <ListGroup.Item style ={{color:"#2d3436"}}> <FcOk/> Upto 100 Students</ListGroup.Item>
                        <ListGroup.Item style ={{color:"#2d3436"}}> <FcOk/> Upto 4 classes for month</ListGroup.Item>
                        <ListGroup.Item style ={{color:"#2d3436"}}> <FcOk/> Upto 2 Institute administrators</ListGroup.Item>
                        <ListGroup.Item style ={{color:"#2d3436"}}> <FcOk/> Upto 4 classes for month</ListGroup.Item>
                    </ListGroup>
                    <IconContext.Provider value={{style:{margin:"5px"}}}>
                        <Button variant="primary" style={{
                            borderRadius: "10px",
                            margin: "auto",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop:"20px",
                            fontSize:"18px",
                            color:"#fff",
                            backgroundColor:"#012250",
                            borderWidth:"1px",
                            borderColor:"#012250"
                        }}><BsFillCartCheckFill/> Select Plan</Button>
                    </IconContext.Provider>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PricingCard;