import React, {useState} from 'react';
import {Alert, Button, ButtonGroup, Col, Container, Form, Row} from "react-bootstrap";
import ProfileNavBar from "./profileNavBar";
import {useMediaQuery} from "react-responsive";
import {useAuth0} from "@auth0/auth0-react";
import {Formik} from "formik";
import * as yup from "yup";
import axios from "axios";
import {BsPencilSquare} from "react-icons/bs";
import Images from "../../../assets/images/Images";

const schema = yup.object().shape({
    Firstname: yup.string().required(),
    Lastname: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must contain 8 characters including 1 uppercase, 1 lowercase, 1 number & 1 special character"
    ),
    Confirm_Password: yup.string().label('Confirm Password').required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must contain 8 characters including 1 uppercase, 1 lowercase, 1 number & 1 special character"
    ).oneOf([yup.ref('Password'), null], 'Passwords must match'),
    Mobile: yup.string().required().matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\(\d{2,3}\\)[ \\-]*)|(\d{2,4})[ \\-]*)*?\d{3,4}?[ \\-]*\d{3,4}?$/,
        "Phone number is invalid")
});


const ProfileEdit = () => {
    const [toggled, setToggled] = useState(false);
    const isMobile = useMediaQuery({maxWidth: 768});
    const {user} = useAuth0();
    const [fistNameValidate, setFistNameValidate] = useState(false);
    const [lastNameValidate, setLastNameValidate] = useState(false);
    const [mobileValidate, setMobileValidate] = useState(false);
    const [formEnable, setFormEnable] = useState(true);
    const [passwordMail, setPasswordMail] = useState(null);

    const initialState = {
        Firstname: user?.given_name,
        Lastname: user?.name,
        Email: user?.email,
        Password: '',
        Confirm_Password: '',
        Mobile: '077-1234567',
    }


    const handleToggleSidebar = () => {
        if (!toggled) {
            setToggled(true);
            return toggled;
        }
        setToggled(false);
    };

    const changeFistNameValidate = (status: boolean): boolean => {
        if (status) {
            setFistNameValidate(true);
            return false
        } else {
            setFistNameValidate(false);
            return true
        }
    }
    const changeLastNameValidate = (status: boolean): boolean => {
        if (status) {
            setLastNameValidate(true);
            return false
        } else {
            setLastNameValidate(false);
            return true
        }
    }
    const changeMobileValidate = (status: boolean): boolean => {
        if (status) {
            setMobileValidate(true);
            return false
        } else {
            setMobileValidate(false);
            return true
        }
    }

    const changePassword = () => {
        const options = {
            method: 'POST',
            url: "https://learningsl.us.auth0.com/dbconnections/change_password",
            headers: {'content-type': 'application/json'},
            data: {
                client_id: "MfDW7eqZ6yFDxDukb3rINlB0269uTekx",
                email: user?.email,
                connection: "Username-Password-Authentication"
            }
        };
        axios.request(options).then(function (response) {
            // @ts-ignore
            return setPasswordMail("success");
        }).catch(function (error) {
            return setPasswordMail(error.message);
        });
    }

    return (
        <Container fluid={true} className='p-0 m-0 w-100'>
            <ProfileNavBar isMobile={isMobile} handleToggleSidebar={handleToggleSidebar}/>
            <Row className='d-flex flex-row align-items-center justify-content-center profile m-0'>
                <Col lg={8} className='card'>
                    <Row className='p-2'>
                        <h1 className='text-center profile-header'>User Profile</h1>
                        <Col lg={4} className='d-flex flex-column align-items-center'>
                            <img src={Images.parentpro} style={{borderRadius: "50%"}} className='w-75'/>

                            {passwordMail === "success" &&
                            <Alert variant="success" className="p-1 mt-2"> Check email and reset the password</Alert>
                            }

                        </Col>
                        <Col>
                            <Formik
                                validationSchema={schema}
                                onSubmit={console.log}
                                initialValues={initialState}
                            >
                                {({
                                      handleSubmit,
                                      handleChange,
                                      handleBlur,
                                      values,
                                      touched,
                                      errors,
                                      validateField,

                                  }) => (
                                    <Row className="pb-md-0 pb-4">
                                        <Form noValidate onSubmit={handleSubmit}>
                                            <Row className="mt-lg-1 pe-lg-4 mt-md-3">
                                                <Col lg={12} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-3" controlId="validationEmail">
                                                        <Form.Label style={{fontWeight: 600}}>Email</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter email"
                                                            name="Email"
                                                            value={values.Email}
                                                            disabled={true}
                                                            onChange={handleChange}
                                                            isValid={touched.Email}
                                                            onBlur={handleBlur}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.Email}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-1 pe-lg-4 mt-md-3">
                                                <Col lg={12} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-1" controlId="validationFirstName">
                                                        <Form.Label style={{fontWeight: 600}}>First
                                                            name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter first name"
                                                            name="Firstname"
                                                            value={values.Firstname}
                                                            disabled={formEnable}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.Firstname ? changeFistNameValidate(false) : changeFistNameValidate(true)}
                                                            isValid={touched.Firstname}
                                                            onBlur={handleBlur}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.Firstname}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-1 pe-lg-4 mt-md-3">
                                                <Col lg={12} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-2" controlId="validationLastname">
                                                        <Form.Label style={{fontWeight: 600}}>Last name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter last name"
                                                            name="Lastname"
                                                            value={values.Lastname}
                                                            disabled={formEnable}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.Lastname ? changeLastNameValidate(false) : changeLastNameValidate(true)}
                                                            isValid={touched.Lastname}
                                                            onBlur={handleBlur}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.Lastname}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-1 pe-lg-4 mt-md-3">
                                                <Col lg={12} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-2" controlId="validationMobile">
                                                        <Form.Label style={{fontWeight: 600}}>Mobile
                                                            number</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Mobile no. format: 0771234567"
                                                            name="Mobile"
                                                            value={values.Mobile}
                                                            disabled={formEnable}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.Mobile ? changeMobileValidate(false) : changeMobileValidate(true)}
                                                            isValid={touched.Mobile}
                                                            onBlur={handleBlur}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.Mobile}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-2 mb-lg-1 pe-lg-4 mt-md-3">
                                                <Col>
                                                    { formEnable ?
                                                        <Button className="mt-4 px-3 profile-edit-btn"
                                                                style={{width: "fit-content", borderRadius: "15px"}}
                                                                variant="outline-secondary"
                                                                onClick={() => {
                                                                    setFormEnable(false);
                                                                }}>
                                                            <BsPencilSquare style={{marginRight: "10px"}}/>Edit
                                                            Profile</Button>
                                                        : (
                                                            <>
                                                                <Button className='mt-4 ms-2 profile-edit-btn'
                                                                        style={{width: "fit-content", borderRadius: "15px"}}
                                                                        variant='outline-secondary'>Update Profile</Button>
                                                                <Button className='mt-4 ms-3 profile-edit-btn'
                                                                        style={{width: "fit-content", borderRadius: "15px"}}
                                                                        variant='outline-secondary'
                                                                        onClick={changePassword}>Change Password</Button>
                                                            </>)
                                                    }

                                                </Col>
                                            </Row>
                                        </Form>
                                    </Row>)}
                            </Formik>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfileEdit;