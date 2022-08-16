import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Images from "../../assets/images/Images";
import {Formik} from "formik";
import * as yup from 'yup';
// @ts-ignore
import LazyLoad from 'react-lazyload';
import SignUpComplete from "./signUpComplete";
import Footer from "../Home/footer/footer";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";
import Loader from "../utils/Loader";
import ParentLayout from "../profile/parent/ParentLayout";

const schema = yup.object().shape({
    Grade: yup.string().required().matches(
        /Grade-(?:1[01]|0[1-9])|AL-20\d\d/,
        "Grade should in Grade-03 or AL-2022"
    ),
    Firstname: yup.string().required(),
    Lastname: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    Confirm_Password: yup.string().label('Confirm Password').required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ).oneOf([yup.ref('Password'), null], 'Passwords must match'),
});


const initialState = {
    Grade: '',
    Firstname: '',
    Lastname: '',
    Email: '',
    Password: '',
    Confirm_Password: '',
}

const StudentSignup = () => {

    const [loading, setLoading] = useState(false);
    const [pageStage, setPageStage] = useState(1);
    const [gradeValidate, setGradeValidate] = useState<boolean>(false);
    const [fistNameValidate, setFistNameValidate] = useState(false);
    const [lastNameValidate, setLastNameValidate] = useState(false);
    const [emailValidate, setEmailValidate] = useState(false);
    const [passwordValidate, setPasswordValidate] = useState(false);
    const [rPasswordValidate, setRPasswordValidate] = useState(false);
const {user} = useAuth0();

    const changeGradeValidate = (status: boolean): boolean => {
        if (status) {
            setGradeValidate(true);
            return false
        } else {
            setGradeValidate(false);
            return true
        }
    }
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


    const handleOnSubmit = (values: { Grade: any; Firstname: any; Lastname: any; Email: any; Password: any; Confirm_Password?: string; }) => {
        setLoading(true);
        const parentAuthId = user?.sub;
        const data = JSON.stringify({
            "email": `${values.Email}`,
            "Firstname": `${values.Firstname}`,
            "Lastname": `${values.Lastname}`,
            "Password": `${values.Password}`
        });
        axios({
            method: "POST",
            url: "http://localhost:8081/auth/createStudent",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }).then((authRes) => {
                console.log("User created in auth0");
                console.log(authRes.data);
                console.log(parentAuthId)
                const auth0data = JSON.stringify({
                    "auth0_id": `${parentAuthId}`,
                })
                axios({
                    method: "POST",
                    url: "http://localhost:8081/parent/parentIdByAuth",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: auth0data
                }).then((parentRes) => {

                    console.log(parentRes);
                    const apiData = JSON.stringify({
                        "user_id": `${authRes.data.user_id}`,
                        "username": `${values.Email}`,
                        "profile_image": `${authRes.data.picture}`,
                        "first_name": `${values.Firstname}`,
                        "last_name": `${values.Lastname}`,
                        "grade":`${values.Grade}`,
                        "parent_id": `${parentRes.data}`
                    })

                    axios({
                        method: "POST",
                        url: "http://localhost:8081/student/createStudent",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: apiData
                    }).then((apiRes) => {
                        console.log(apiData)
                        console.log("Api user created")
                        console.log(apiRes.status);
                        if (apiRes.status === 200) {
                            setLoading(false);
                            setPageStage(2)
                        }
                    }).catch((error) => {
                        console.log(error.message)
                    })
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
        <ParentLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-center header my-lg-3 text-md-center text-center'>
                            Register Student
                        </h1>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col lg={6} md={12} sm={12} className="d-flex justify-content-lg-center mx-auto">
                        <img src={Images.stundetreg} className="Signup-Image w-75 p-lg-2 mt-md-3 my-lg-auto"
                             alt="teacher-signup"/>
                    </Col>
                    <Col>
                        <Row>
                            <Row className="mt-lg-2 pe-lg-4 mt-md-5 mt-4 pe-0">
                                <Col lg={10} md={12} className="mb-2 mx-lg-auto px-md-5 px-3">
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
                                <Row className="pb-md-0 pb-4 my-lg-auto">
                                    <Form noValidate onSubmit={handleSubmit}>
                                        {(pageStage === 1) && <LazyLoad once>
                                            <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                <Col lg={6} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-3" controlId="validationEmail">
                                                        <Form.Label style={{fontWeight: 600}}>Email</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter the email"
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
                                                    <Form.Group className="mb-3" controlId="validationFirstName">
                                                        <Form.Label style={{fontWeight: 600}}>First
                                                            Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter the first name here"
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
                                            <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                <Col lg={6} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-3" controlId="validationLastname">
                                                        <Form.Label style={{fontWeight: 600}}>Last Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter the last name here"
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
                                                    <Form.Group className="mb-3" controlId="validationGrade">
                                                        <Form.Label style={{fontWeight: 600}}>Grade</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter the grade here"
                                                            name="Grade"
                                                            value={values.Grade}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.Grade && touched.Grade ? changeGradeValidate(false) : changeGradeValidate(true)}
                                                            isValid={touched.Grade}
                                                            onBlur={handleBlur}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.Grade}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-3 pe-lg-4 mt-md-3">
                                                <Col lg={6} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-3" controlId="validationPassword">
                                                        <Form.Label style={{fontWeight: 600}}>Password</Form.Label>
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="Enter the password here"
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
                                                    <Form.Group className="mb-3" controlId="validationRPassword">
                                                        <Form.Label style={{fontWeight: 600}}>Retype
                                                            Password</Form.Label>
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="Retype password here"
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
                                                            onClick={
                                                                () => {
                                                                    if (gradeValidate && fistNameValidate && lastNameValidate && emailValidate && passwordValidate && rPasswordValidate) {
                                                                        handleOnSubmit(values);
                                                                    }
                                                                }
                                                            }
                                                            onClickCapture={() => {
                                                                validateField("Grade");
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
        </ParentLayout>
    );
};

export default StudentSignup;