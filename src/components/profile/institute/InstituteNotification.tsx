import React from 'react';
import {Accordion, Col, Row} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";
import InstituteLayout from "./InstituteLayout";

// const columns = [
//     {
//         dataField: "user_id",
//         text: "User ID",
//         sort: true,
//         hidden: true
//     },
//     {
//         dataField: "username",
//         text: "User Name",
//         sort: true,
//     },
//     {
//         dataField: "first_name",
//         text: "First Name",
//     },
//     {
//         dataField: "last_name",
//         text: "Last Name"
//     },
//     {
//         dataField: "type",
//         text: "User Type"
//     },
//     {
//         dataField: "",
//         text: "",
//         formatter: removeItem,
//         headerAttrs: {width: 100},
//         attrs: {width: 100, class: "EditRow"}
//     },
// ];


const InstituteNotification = () => {

    // const baseURL = "http://localhost:8081/user/allUsers";
    // const [users, setUsers] = useState<any[]>([]);

    // useEffect(() => {
    //     axios.get(baseURL).then((res: AxiosResponse) => {
    //         res.data.map((item: any) => {
    //             if (item.type === 'teacher') {
    //
    //                 setUsers(prevState => [...prevState, {
    //                     user_id: item.user_id,
    //                     username: item.username,
    //                     type: "Teacher",
    //                     first_name: item.teacher.first_name,
    //                     last_name: item.teacher.last_name
    //                 }])
    //             } else if (item.type === 'student') {
    //                 setUsers(prevState => [...prevState, {
    //                     user_id: item.user_id,
    //                     username: item.username,
    //                     type: "Student",
    //                     first_name: item.student[0].first_name,
    //                     last_name: item.student[0].last_name
    //                 }])
    //             } else if (item.type === 'institute') {
    //                 console.log(item)
    //                 setUsers(prevState => [...prevState, {
    //                     user_id: item.user_id,
    //                     username: item.username,
    //                     type: "Institute",
    //                     first_name: item.institute[0].institute_name,
    //                     last_name: '-'
    //                 }])
    //             } else if (item.type === 'parent') {
    //                 console.log(item.parent[0])
    //                 setUsers(prevState => [...prevState, {
    //                     user_id: item.user_id,
    //                     username: item.username,
    //                     type: "Parent",
    //                     first_name: item.parent[0].first_name,
    //                     last_name: item.parent[0].last_name
    //                 }])
    //             }
    //         })
    //         console.log(users)
    //     })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, []);

    const isPc = useMediaQuery({minWidth: 991});


    // if (users === null) {
    //     return
    //
    // }

    return (

        <InstituteLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Notification
                        </h1>
                    </Col>
                </Row>
                <Row className="Notifications">
                    <Col lg={12} className="PanelBody">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className="mb-2">
                                <Accordion.Header>Your payment for Course Science by D.H.Silva is successful
                                    !"</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="mb-2">
                                <Accordion.Header>Your payment for Course "Mathematics by D.H.Silva is successful
                                    !"</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className="mb-2">
                                <Accordion.Header>Your payment for Course "History by D.H.Silva is successful
                                    !"</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Col>
        </InstituteLayout>
    );
};

export default InstituteNotification;