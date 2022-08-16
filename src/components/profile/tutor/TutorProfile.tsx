import React, {useEffect, useState} from 'react';
import {Alert, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {useAuth0} from "@auth0/auth0-react";
import Images from "../../../assets/images/Images";

type initialStateType = {
    Firstname: string,
    Lastname: string,
    Email: string,
    Mobile: string,
    Description: string,
    Qualification: string,
    Accountname: string,
    Bankname: string,
    Branchname: string,
    Accountno: string
}


const TutorProfile = () => {
    const navigate = useNavigate();
    const [isEditProfile, setIsEditProfile] = useState(false);
    const [initialState, setInitialState] = useState<initialStateType>({
        Accountname: "K.G.L. Sameera Senevirathne",
        Accountno: "9923612712",
        Bankname: "Bank of Ceylon",
        Branchname: "Galle",
        Description: "I'm having more than 7 years of experience in teaching at a renowned government school as a ICT teacher My students were able to produce great results in the examinations.",
        Email: "sameera@gmail.com",
        Firstname: "Sameera",
        Lastname: "Senevirathne",
        Mobile: "077-1234567",
        Qualification: "Bsc Hons In Information Technology"
    });
    const {user} = useAuth0();
    const params = useParams();
    const [enableEditProfile, setEnableEditProfile] = useState(true);
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [passwordMail, setPasswordMail] = useState(null);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8081/teacher/${params.tutor_id}`,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res: AxiosResponse) => {
            setInitialState({
                Firstname: res.data[0].first_name,
                Lastname: res.data[0].last_name,
                Accountname: res.data[0].account_no,
                Accountno: res.data[0].account_no,
                Bankname: res.data[0].bank_name,
                Branchname: res.data[0].branch_name,
                Description: res.data[0].description,
                Mobile: res.data[0].contact_no,
                Qualification: res.data[0].qualification,
                Email: res.data[0].user.username
            })
            if (res.status === 200) {
                console.log(initialState)
                setIsDataLoading(true);
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }, []);


    return (
        <Col lg={12} className='px-lg-5'>
            <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                <Col lg={12} md={12} xs={12}>
                    <h1 className='text-lg-start header my-lg-3 text-md-center text-center d-flex flex-row align-items-center justify-content-between'>
                        Tutor Profile
                        <AiOutlineCloseCircle className='me-lg-4' style={{cursor: "pointer"}}
                                              onClick={() => navigate(-1)}/>
                    </h1>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg={3} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={Images.tutorpro} className='w-100' style={{borderRadius: "50%"}}/>

                    {passwordMail === "success" &&
                    <Alert variant="success" className="p-1 mt-2"> Check email and reset the password</Alert>
                    }

                </Col>
                <Col className='px-lg-5'>
                    {isDataLoading &&
                    <Formik
                        onSubmit={console.log}
                        initialValues={initialState}
                    >
                        {({
                              values,
                          }) => (
                            <Row className="pb-md-0 pb-4">
                                <Form noValidate>
                                    <Tabs
                                        defaultActiveKey="profile"
                                        id="uncontrolled-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="profile" title="Profile Details">
                                            <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                <Col lg={10} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-2">
                                                        <Form.Label style={{fontWeight: 600}}>First
                                                            Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            value={values.Firstname}
                                                            disabled={enableEditProfile}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={10} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-2" controlId="validationEmail">
                                                        <Form.Label style={{fontWeight: 600}}>Last Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            value={values.Lastname}
                                                            disabled={enableEditProfile}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                <Col lg={10} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-2">
                                                        <Form.Label style={{fontWeight: 600}}>Email</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            value={values.Email}
                                                            disabled={enableEditProfile}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="description" title="Description">
                                            <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                <Col lg={10} md={12} sm={12} xs={12}>
                                                    <Form.Group className="mb-2">
                                                        <Form.Label style={{fontWeight: 600}}>Mobile
                                                            Number</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            value={values.Mobile}
                                                            disabled={enableEditProfile}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                <Col lg={10} md={12} sm={12} xs={12}>
                                                    <Form.Group className="mb-2">
                                                        <Form.Label
                                                            style={{fontWeight: 600}}>Qualification</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            value={values.Qualification}
                                                            disabled={enableEditProfile}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                <Col lg={10} md={12} sm={12} xs={12}>
                                                    <Form.Group className="mb-2">
                                                        <Form.Label
                                                            style={{fontWeight: 600}}>Description</Form.Label>
                                                        <Form.Control as="textarea"
                                                                      rows={4}
                                                                      name="Description"
                                                                      value={values.Description}
                                                                      disabled={enableEditProfile}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="bankdetails" title="Bank Details">
                                            <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                <Col lg={10} md={12} sm={12} xs={12}>
                                                    <Form.Group className="mb-2">
                                                        <Form.Label style={{fontWeight: 600}}>Account Holder's
                                                            Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="AccountName"
                                                            value={values.Accountname}
                                                            disabled={enableEditProfile}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-0 pe-lg-4 mt-md-3 d-flex flex-column">
                                                <Col lg={10} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-2" controlId="validationBankName">
                                                        <Form.Label style={{fontWeight: 600}}>Bank Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="BankName"
                                                            value={values.Bankname}
                                                            disabled={enableEditProfile}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={10} md={6} sm={12} xs={12}>
                                                    <Form.Group className="mb-2" controlId="validationBranchName">
                                                        <Form.Label style={{fontWeight: 600}}>Branch
                                                            Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            value={values.Branchname}
                                                            disabled={enableEditProfile}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mt-lg-0 pe-lg-4 mt-md-3">
                                                <Col lg={10} md={12} sm={12} xs={12}>
                                                    <Form.Group className="mb-2" controlId="validationAccountNo">
                                                        <Form.Label style={{fontWeight: 600}}>Account
                                                            Number</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            value={values.Accountno}
                                                            disabled={enableEditProfile}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Tab>
                                    </Tabs>
                                </Form>
                            </Row>)}
                    </Formik>}
                </Col>
            </Row>
        </Col>
    );
};

export default TutorProfile;