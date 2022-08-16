import React, {useState} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import Images from "../../../assets/images/Images";
import {GrSend} from "react-icons/gr";
import {Formik} from "formik";
import * as yup from 'yup';
import axios, {AxiosResponse} from "axios";
// @ts-ignore
import swal from "@sweetalert/with-react";

const schema = yup.object().shape({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    Subject: yup.string().required(),
    Message: yup.string().required(),
});

const initialState = {
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
}
const ContactUs: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const handleOnSubmit = (values:any) => {
        setLoading(true);
        const data = JSON.stringify({
            "email": `${values.Email}`,
            "name": `${values.Name}`,
            "subject": `${values.Subject}`,
            "message": `${values.Message}`
        });
        axios({
            method: "POST",
            url: "http://localhost:8081/contact/contactUs",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }).then((res: AxiosResponse) => {
                if (res.status === 200) {
                    swal({
                        title: "Thanks you!",
                        text: `Thank you for contacting us, we'll be in touch very soon.`,
                        icon: "success",
                        buttons: {
                            confirm: true
                        },
                    })
                }
            }
        ).catch((error) => {
            console.log(values)
            console.log("error")
            console.log(error.message)
        })
    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleOnSubmit}
            initialValues={initialState}
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  errors,
              }) => (
                <Container fluid={true} id='ContactUs' className='about-us'>
                    <h1 className='about-us-header text-center
                    '>Contact Us</h1>
                    <Row className="m-0" style={{height: "fit-content"}}>
                        <Col lg={6} className="d-flex flex-row justify-content-center">
                            <Image src={Images.contactUs} className='w-75'></Image>
                        </Col>
                        <Col lg={5} className="d-flex flex-column justify-content-center p-3 ms-lg-5">
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group className="mb-1" controlId="validationName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the name here"
                                        name="Name"
                                        value={values.Name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Name && touched.Name}
                                        isValid={touched.Name}
                                        onBlur={handleBlur('Name')}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="validateEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the email here"
                                        name="Email"
                                        value={values.Email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Email && touched.Email}
                                        isValid={touched.Email}
                                        onBlur={handleBlur("Email")}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="validateSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the subject here"
                                        name="Subject"
                                        value={values.Subject}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Subject && touched.Subject}
                                        isValid={touched.Subject}
                                        onBlur={handleBlur("Subject")}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Subject}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="validateMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea"
                                                  placeholder="Enter the message here"
                                                  rows={4}
                                                  name="Message"
                                                  value={values.Message}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.Message && touched.Message}
                                                  isValid={touched.Message}
                                                  onBlur={handleBlur("Message")}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button type="submit" variant="primary" className="mt-2 px-4 py-2"
                                        style={{borderRadius: "20px", float: "right"}}><GrSend
                                    style={{marginRight: "3px"}}
                                    /> Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="d-flex flex-row justify-content-evenly mt-2">
                        <Col xl={3} md={5}>
                            <Card className='d-flex flex-row' style={{
                                padding: "10px",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                            }}>
                                <Card.Img variant="top" src={Images.location} className='contact-card-img'/>
                                <Card.Body style={{padding: "0", paddingTop: "10px"}}>
                                    <Card.Title style={{textAlign: "center"}}>Address</Card.Title>
                                    <Card.Text style={{textAlign: "center"}}>No 35 ,Reid Avenue, Colombo 07</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} md={5}>
                            <Card className='d-flex flex-row  my-2' style={{
                                padding: "10px",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            }}>
                                <Card.Img variant="top" src={Images.phone} className='contact-card-img'/>
                                <Card.Body style={{padding: "0", paddingTop: "10px"}}>
                                    <Card.Title style={{textAlign: "center"}}>Phone</Card.Title>
                                    <Card.Text style={{textAlign: "center"}}>+9477-1234567</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} md={6}>
                            <Card className='d-flex flex-row' style={{
                                padding: "10px",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            }}>
                                <Card.Img variant="top" src={Images.email} className='contact-card-img'/>
                                <Card.Body style={{padding: "0", paddingTop: "10px"}}>
                                    <Card.Title style={{textAlign: "center"}}>Email</Card.Title>
                                    <Card.Text style={{textAlign: "center"}}>contactus.learning.io@gmail.com</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>)}
        </Formik>
    );
};

export default ContactUs;