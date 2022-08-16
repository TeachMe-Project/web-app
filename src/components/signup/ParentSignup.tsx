import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Images from "../../assets/images/Images";
import {Formik} from "formik";
import * as yup from 'yup';
// @ts-ignore
import LazyLoad from 'react-lazyload';
import SignUpComplete from "./signUpComplete";
import Footer from "../Home/footer/footer";
import NavbarCommon from "../profile/navBar/NavbarCommon";
import axios from "axios";
import Loader from "../utils/Loader";

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


const initialState = {
    Firstname: '',
    Lastname: '',
    Email: '',
    Password: '',
    Confirm_Password: '',
    Mobile: '',
}

const ParentSignup = () => {

    const [loading, setLoading] = useState(false);
    const [pageStage, setPageStage] = useState(1);
    const [fistNameValidate, setFistNameValidate] = useState(false);
    const [lastNameValidate, setLastNameValidate] = useState(false);
    const [emailValidate, setEmailValidate] = useState(false);
    const [passwordValidate, setPasswordValidate] = useState(false);
    const [rPasswordValidate, setRPasswordValidate] = useState(false);
    const [mobileValidate, setMobileValidate] = useState(false);

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
    const changeEmailValidate = (status: boolean): boolean => {
        if (status) {
            setEmailValidate(true);
            return false
        } else {
            setEmailValidate(false);
            return true
        }
    }
    const changePasswordValidate = (status: boolean): boolean => {
        if (status) {
            setPasswordValidate(true);
            return false
        } else {
            setPasswordValidate(false);
            return true
        }
    }
    const changeRPasswordValidate = (status: boolean): boolean => {
        if (status) {
            setRPasswordValidate(true);
            return false
        } else {
            setRPasswordValidate(false);
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

    const handleOnSubmit = (values: { Firstname: any; Lastname: any; Email: any; Password: any; Confirm_Password?: string; Mobile: any; }) => {
        setLoading(true);
        const data = JSON.stringify({
            "email": `${values.Email}`,
            "Firstname": `${values.Firstname}`,
            "Lastname": `${values.Lastname}`,
            "Password": `${values.Password}`
        });
        axios({
            method: "POST",
            url: "http://localhost:8081/auth/createParent",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }).then((res) => {
                console.log("User created in auth0");
                console.log(res.data);
                const apiData = JSON.stringify({
                    "user_id": `${res.data.user_id}`,
                    "username": `${values.Email}`,
                    "profile_image": `${res.data.picture}`,
                    "first_name":`${values.Firstname}`,
                    "last_name":`${values.Lastname}`,
                    "mobile_no":`${values.Mobile}`
                })

                axios({
                    method: "POST",
                    url: "http://localhost:8081/parent/createParent",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: apiData
                }).then((apiRes) => {
                    console.log(apiData)
                    console.log("Api user created")
                    console.log(apiRes.status);
                    if(apiRes.status=== 200){
                        setLoading(false);
                        setPageStage(2)
                    }
                }).catch((error) => {
                    console.log(error.message)
                })
            }
        ).catch((error) => {
            console.log(values)
            console.log("error")
            console.log(error.message)
        })
    }

    return (
        <Container fluid className='w-100 p-0 m-0'>
            <NavbarCommon/>
            <Row
                className="d-flex flex-column align-items-center justify-content-lg-center Signup-Container justify-content-md-start p-0 m-0">
                <Col lg={9} md={12} xs={12}
                     className="Signup d-flex flex-lg-column justify-content-lg-center p-md-3 mt-md-2 mt-3">
                    <Row className="d-flex align-items-center">
                        <h1 className="text-center mb-lg-2 signup-header pt-md-3 mb-2">Signup For Parent</h1>
                        <Col lg={5} md={12} sm={12} className="d-flex justify-content-lg-center mx-auto">
                            <img src={Images.parentSignup} className="Signup-Image w-100 p-lg-2 mt-md-3 my-lg-auto"
                                 alt="teacher-signup"/>
                        </Col>
                        <Col lg={7}>
                            <Row>
                                <Row className="mt-lg-4 px-lg-5 mt-md-5 mt-4 pe-0">
                                    <Col lg={12} md={12} className="mb-3 mx-lg-auto px-md-5 px-3">
                                        <LazyLoad once>
                                            <div className="progressbar">
                                                <div
                                                    className={pageStage === 1 ? 'progress-step progress-step-active' : 'progress-step'}
                                                    data-title="Details"></div>
                                                <div
                                                    className={pageStage === 2 ? 'progress-step progress-step-active' : 'progress-step'}
                                                    data-title="Finished"></div>
                                            </div>
                                        </LazyLoad>
                                    </Col>
                                </Row>
                            </Row>
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
                                            {(pageStage === 1) && <LazyLoad once>
                                                <Row className="mt-lg-2 pe-lg-4 mt-md-3">
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationEmail">
                                                            <Form.Label style={{fontWeight: 600}}>Email</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter email"
                                                                name="Email"
                                                                value={values.Email}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Email && touched.Email ? changeEmailValidate(false) : changeEmailValidate(true)}
                                                                isValid={touched.Email}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Email}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationFirstName">
                                                            <Form.Label style={{fontWeight: 600}}>First
                                                                name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter first name"
                                                                name="Firstname"
                                                                value={values.Firstname}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Firstname && touched.Firstname ? changeFistNameValidate(false) : changeFistNameValidate(true)}
                                                                isValid={touched.Firstname}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Firstname}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-2 pe-lg-4 mt-md-3">
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationLastname">
                                                            <Form.Label style={{fontWeight: 600}}>Last name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Enter last name"
                                                                name="Lastname"
                                                                value={values.Lastname}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Lastname && touched.Lastname ? changeLastNameValidate(false) : changeLastNameValidate(true)}
                                                                isValid={touched.Lastname}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Lastname}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationMobile">
                                                            <Form.Label style={{fontWeight: 600}}>Mobile
                                                                number</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Mobile no. format: 0771234567"
                                                                name="Mobile"
                                                                value={values.Mobile}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Mobile && touched.Mobile ? changeMobileValidate(false) : changeMobileValidate(true)}
                                                                isValid={touched.Mobile}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Mobile}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-2 pe-lg-4 mt-md-3">
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationPassword">
                                                            <Form.Label style={{fontWeight: 600}}>Password</Form.Label>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="Enter password"
                                                                name="Password"
                                                                value={values.Password}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Password && touched.Password ? changePasswordValidate(false) : changePasswordValidate(true)}
                                                                isValid={touched.Password}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Password}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12} xs={12}>
                                                        <Form.Group className="mb-2" controlId="validationRPassword">
                                                            <Form.Label style={{fontWeight: 600}}>Confirm
                                                                password</Form.Label>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="Retype password"
                                                                name="Confirm_Password"
                                                                value={values.Confirm_Password}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.Confirm_Password && touched.Confirm_Password ? changeRPasswordValidate(false) : changeRPasswordValidate(true)}
                                                                isValid={touched.Confirm_Password}
                                                                onBlur={handleBlur}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.Confirm_Password}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                {loading && <Loader/>}
                                                <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                    <Col
                                                        className="d-flex flex-row justify-content-lg-end justify-content-end">
                                                        <Button type="submit" className="px-4 nextBtn"
                                                                variant="primary"
                                                                onClick={
                                                                    () => {
                                                                        if (mobileValidate && fistNameValidate && lastNameValidate && emailValidate && passwordValidate && rPasswordValidate) {
                                                                            handleOnSubmit(values);
                                                                        }
                                                                    }
                                                                }
                                                                onClickCapture={() => {
                                                                    validateField("Mobile");
                                                                    validateField("Firstname");
                                                                    validateField("Lastname");
                                                                    validateField("Email");
                                                                    validateField("Password");
                                                                    validateField("Confirm_Password");
                                                                }
                                                                }
                                                        >Submit</Button>
                                                    </Col>
                                                </Row>
                                            </LazyLoad>}

                                            {(pageStage === 2) && <LazyLoad once>
                                                <SignUpComplete/>
                                            </LazyLoad>}

                                        </Form>
                                    </Row>)}
                            </Formik>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
};

export default ParentSignup;