import React from 'react';
import {Col, Row, Tab, Tabs, Card} from "react-bootstrap";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
// @ts-ignore
import swal from "@sweetalert/with-react";
import {FaEye} from "react-icons/fa";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import {useMediaQuery} from "react-responsive";


const CourseProfile = () => {
    const navigate = useNavigate();
    const {SearchBar} = Search;
    const isPc = useMediaQuery({minWidth: 991});

    const gotoCourse = (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
        < FaEye
            style={{
                fontSize: "20px",
                color: "#181312",
                padding: "7px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }}
            className='accept-icon'
            onClick={() => {
                swal({
                    title: "User Removal",
                    text: `Do you really want to remove ${row.username}?`,
                    icon: "error",
                    buttons: {
                        cancel: true,
                        confirm: true
                    },
                    // dangerMode: true,
                })
                    .then((willDelete: any) => {
                        if (willDelete) {
                            swal(`Poof! You have successfully removed ${row.username}`, {
                                icon: "success",
                            });
                        }
                    });
            }}
        />
    );


    const columns = [
        {
            dataField: "student_id",
            text: "Student ID",
            sort: true,
        },
        {
            dataField: "username",
            text: "Student Name",
            sort: true,
        },
        {
            dataField: "contact",
            text: "Parent",
        },
        {
            dataField: "",
            text: "",
            formatter: gotoCourse,
            headerAttrs: {width: 100},
            attrs: {width: 100, class: "EditRow"}
        },
    ];

    const column2 = [
        {
            dataField: "date",
            text: "Date",
            sort: true,
        },
        {
            dataField: "time",
            text: "Time",
            sort: true,
        },
        {
            dataField: "duration",
            text: "Duration",
        }
    ];


    const data = [
        {
            student_id: 12345678,
            username: "samana@gmail.com",
            contact: "0987654321"
        }
    ];

    const data2 = [
        {
            date: "2022-02-23",
            time: "05.00PM",
            duration:"2hrs"
        }
    ]


    return (
        <Row className='view-courses'>
            <Col lg={12} className='px-5'>
                <h1 style={{color: "#2c3e50"}}
                    className='text-lg-start header my-lg-3 text-md-center text-center d-flex flex-row align-items-center justify-content-between'>Mathematics
                    <AiOutlineCloseCircle className='me-lg-4' style={{cursor: "pointer"}}
                                          onClick={() => navigate(-1)}/>
                </h1>
                <h3 style={{color: "#2c3e50"}}>Mr. Saman Kamalanath</h3>
                <Tabs
                    defaultActiveKey="details"
                    id="uncontrolled-tab-example"
                    className="mt-0"
                >
                    <Tab eventKey="details" title="Course Details">
                        <Row>
                            <Col lg={3} className='d-flex flex-column course-titles'>
                            <span className='mt-4 mb-2'>
                                Title
                            </span>
                                <span className='my-2'>
                                Subject
                            </span>
                                <span className='my-2'>
                                Grade
                            </span>
                                <span className='my-2'>
                                Description
                            </span>
                                <span className='my-2'>
                                Medium
                            </span>
                                <span className='my-2'>
                                Fee
                            </span>
                                <span className='my-2'>
                                Start Date
                            </span>
                                <span className='my-2'>
                                End Date
                            </span>
                                <span className='my-2'>
                                Class Day
                            </span>
                                <span className='my-2'>
                                Start Time
                            </span>
                            </Col>
                            <Col lg={1} className='d-flex flex-column'>
                            <span className='mt-4 mb-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                                <span className='my-2'>
                                :
                            </span>
                            </Col>
                            <Col lg={7} className='d-flex flex-column ms-3'>
                            <span className='mt-4 mb-2'>
                                Mathematics By Mr Saman Kamalanath
                            </span>
                                <span className='my-2'>
                                Mathematics
                            </span>
                                <span className='my-2'>
                                Grade 08
                            </span>
                                <span className='my-2'>
                                Mathematics lessons for Student from Grade 6 , Grade 7 , Grade 8
                            </span>
                                <span className='my-2'>
                                Sinhala
                            </span>
                                <span className='my-2'>
                                LKR 2500
                            </span>
                                <span className='my-2'>
                                2022-03-24
                            </span>
                                <span className='my-2'>
                                2022-03-24
                            </span>
                                <span className='my-2'>
                                Thursday
                            </span>
                                <span className='my-2'>
                                05:00 PM
                            </span>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="students" title="Students">
                        <Col className='mt-2'>
                        {isPc &&
                        <ToolkitProvider
                            keyField="id"
                            data={data}
                            columns={columns}
                            search>
                            {(props: any) =>
                                (
                                    <Row className='next-table'>
                                        <SearchBar {...props.searchProps}
                                                   placeholder="Search Courses"
                                        />
                                        <BootstrapTable
                                            columns={columns} data={data} keyField="id"
                                            {...props.baseProps}
                                            bootstrap4={true}
                                            pagination={paginationFactory({sizePerPage: 5, hideSizePerPage: true})}
                                            rowStyle={{
                                                fontSize: "16px",
                                                fontWeight: "500",
                                                borderCollapse: "separate",
                                                borderSpacing: "0 30px",
                                                color: "#95a5a6",
                                            }}

                                            headerWrapperClasses="next-table"
                                            defaultSortDirection="asc"

                                        />
                                    </Row>
                                )
                            }
                        </ToolkitProvider>
                        }
                        {/*{!isPc &&*/}
                        {/*<Col md={12} className='d-flex flex-column align-items-center  next-table-list'>*/}
                        {/*    {data.map((item:any) => {*/}
                        {/*        return (*/}
                        {/*            <Card className='w-100 p-3 mb-2 table-card'>*/}
                        {/*                <ul className='ps-md-3 ps-0'>*/}
                        {/*                    <li className='d-none'>*/}
                        {/*                        <span className='table-card-label'>{columns[0].text}</span>*/}
                        {/*                        <span className='table-card-data'>{item.id}</span>*/}
                        {/*                    </li>*/}
                        {/*                    <li className='d-flex flex-row align-items-center justify-content-between'>*/}
                        {/*                        <span className='table-card-label'>{columns[1].text}</span>*/}
                        {/*                        <span className='table-card-data'>{item.grade}</span>*/}
                        {/*                    </li>*/}
                        {/*                    <li className='d-flex flex-row align-items-center justify-content-between'>*/}
                        {/*                        <span className='table-card-label'>{columns[2].text}</span>*/}
                        {/*                        <span className='table-card-data'>{item.subject}</span>*/}
                        {/*                    </li>*/}
                        {/*                    <li className='d-flex flex-row align-items-center justify-content-between'>*/}
                        {/*                        <span className='table-card-label'>{columns[3].text}</span>*/}
                        {/*                        <span className='table-card-data'>{item.tutor_name}</span>*/}
                        {/*                    </li>*/}
                        {/*                    <li className='d-flex flex-row align-items-center justify-content-between'>*/}
                        {/*                        <span className='table-card-label'>{columns[4].text}</span>*/}
                        {/*                        <span className='table-card-data'>{item.institute_name}</span>*/}
                        {/*                    </li>*/}
                        {/*                    <li className='d-flex flex-row align-items-center justify-content-end mt-2'>*/}
                        {/*                    <span className='me-3'>*/}
                        {/*                         {gotoCourse(null, item, null, null)}*/}
                        {/*                    </span>*/}
                        {/*                    </li>*/}
                        {/*                </ul>*/}
                        {/*            </Card>*/}
                        {/*        );*/}
                        {/*    })}*/}
                        {/*</Col>*/}
                        {/*}*/}
                        </Col>
                    </Tab>
                    <Tab eventKey="schedule" title="Class-Schedules">
                        <Col className='mt-3'>
                        {isPc &&
                        <ToolkitProvider
                            keyField="id"
                            data={data2}
                            columns={column2}
                            search>
                            {(props: any) =>
                                (
                                    <Row className='next-table'>
                                        <BootstrapTable
                                            columns={column2} data={data2} keyField="id"
                                            {...props.baseProps}
                                            bootstrap4={true}
                                            pagination={paginationFactory({sizePerPage: 5, hideSizePerPage: true})}
                                            rowStyle={{
                                                fontSize: "16px",
                                                fontWeight: "500",
                                                borderCollapse: "separate",
                                                borderSpacing: "0 30px",
                                                color: "#95a5a6",
                                            }}

                                            headerWrapperClasses="next-table"
                                            defaultSortDirection="asc"

                                        />
                                    </Row>
                                )
                            }
                        </ToolkitProvider>
                        }
                        </Col>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    );
};

export default CourseProfile;