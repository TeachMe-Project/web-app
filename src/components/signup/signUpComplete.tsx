import React from 'react'
import Images from "../../assets/images/Images";
import {Button, Col, Row} from "react-bootstrap"; // load image
import {useNavigate} from "react-router-dom";

const SignUpComplete = () => {

    // const stateOutput = (`JSON Data Form-Completed: ${JSON.stringify(state, null, 2)}`)
    // console.log(stateOutput) // output to console.log
    const navigate = useNavigate();

    return (
        <Row style={{fontFamily: "'Poppins', sans-serif"}} className="Signup-Complete">
            <Col lg={12} className="d-lg-flex flex-column align-items-center mt-2">
                <h1 className="mb-3 text-center">Signup Completed</h1>
                <Row className="d-lg-flex flex-lg-column justify-content-lg-center">
                    <Col lg={8} md={4} xs={6} className="mx-auto">
                        <img src={Images.formComplete} className="w-75" alt="Success"/>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <h4>Thank you for being part of Learning!</h4>
                        <h5>Please check your email and verify your email</h5>
                    </Col>
                </Row>
                <Row className="d-lg-flex flex-lg-column justify-content-lg-center mt-2 mb-2 mt-md-3 mt-3">
                    <Col className="d-flex justify-content-center">
                        <Button variant="primary" className="p-2 px-3 nextBtn" onClick={() => navigate('/')}>
                            Go Back To Home Page
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>

    );

}

export default SignUpComplete;
//
// import React from 'react'
// import { useSelector } from 'react-redux'
// import IMGgreentick from '../../assets/imgs/green-tick.svg'; // load image
// import './styles.scss';
//
// function FormUserResult({ pageTitle, successMessage }) {
//
//     // Get Redux Form State and output to JSON format
//     const state = useSelector(state => state)
//     const stateOutput = (`JSON Data Form-Completed: ${JSON.stringify(state, null, 2)}`)
//     console.log(stateOutput) // output to console.log
//
//     return (
//
//         <>
//
//             <div className="form-complete">
//
//                 <h2>{pageTitle || 'Confirmation'}</h2>
//
//                 <img
//                     className="fade-in-image"
//                     src={IMGgreentick}
//                     alt={successMessage || 'Success!'}
//                 />
//
//                 <p>
//                     {successMessage || 'Thank you, please check your email!'}
//                 </p>
//
//             </div>
//
//             <div className="code-output">
//                 <pre>{stateOutput}</pre>
//             </div>
//
//         </>
//
//     );
//
// }
//
// export default FormUserResult;