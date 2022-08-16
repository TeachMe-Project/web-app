import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import {useMediaQuery} from "react-responsive";
// @ts-ignore
import swal from "@sweetalert/with-react";
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import {FaEye} from "react-icons/fa";
import InstituteLayout from "./InstituteLayout";
import {BsTrashFill} from "react-icons/bs";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const removeItem = (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
    < BsTrashFill
        style={{
            fontSize: "20px",
            color: "#e74c3c",
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
                text: `Do you really want to remove ${row.first_name} ${row.last_name} ?`,
                icon: "error",
                buttons: {
                    cancel: true,
                    confirm: true
                },
                // dangerMode: true,
            })
                .then((willDelete: any) => {
                    const apiData = JSON.stringify({
                        "user_id": `${row.user_id}`
                    })
                    axios({
                        method: "POST",
                        url: "http://localhost:8081/auth/block",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: apiData
                    }).then((apiRes) => {
                        axios({
                            method: "POST",
                            url: "http://localhost:8081/user/removeUser",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: apiData
                        }).then((apiRes) => {
                            console.log(apiRes.status);
                            if (apiRes.status === 200) {
                                swal(`Poof! You have successfully removed ${row.first_name} ${row.last_name}`, {
                                    icon: "success",
                                });
                            }
                        }).catch((error) => {
                            console.log(error.message)
                        })

                    }).catch((error) => {
                        console.log(error.message)
                    })
                });
        }}
    />
);


const data = [{
    id: 10000102398,
    username: 'sameera@gmail.com',
    first_name: 'Sameera',
    last_name: 'Senevirathne',
    contact_no: '0713455673',
},
    {
        id: 10000102345,
        username: 'pramuka@gmail.com',
        first_name: 'Pramuka',
        last_name: 'Senevirathne',
        contact_no: '071345567',
    },
    {
        id: 1000010299,
        username: 'anajani@gmail.com',
        first_name: 'Anajani',
        last_name: 'Bandara',
        contact_no: '0713455673',
    },
    {
        id: 10000102300,
        username: 'chirath@gmail.com',
        first_name: 'Chirath',
        last_name: 'Edirisinghe',
        contact_no: '0713455673',
    }
    , {
        id: 10000102356,
        username: 'thilina@gmail.com',
        first_name: 'Thilina',
        last_name: 'Dissanayake',
        contact_no: '0713455673',
    }
    ,]



const InstituteTutorsPage = () => {

    const isPc = useMediaQuery({minWidth: 991});
    const {SearchBar} = Search;
    const navigate = useNavigate();

    const gotoTutorProfile = (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
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
                navigate(`/institute/tutors/${row.user_id}`)
            }}
        />
    );

    const columns = [
        {
            dataField: "id",
            text: "Tutor ID",
            sort: true,
        },
        {
            dataField: "username",
            text: "Username ",
        },
        {
            dataField: "first_name",
            text: "First Name",
        },
        {
            dataField: "last_name",
            text: "Last name"
        },
        {
            dataField: "contact_no",
            text: "Contact No"
        },
        {
            dataField: "",
            text: "",
            formatter: gotoTutorProfile,
            headerAttrs: {width: 60},
            attrs: {width: 100, class: "EditRow"}
        },
        {
            dataField: "",
            text: "",
            formatter: removeItem,
            headerAttrs: {width: 60},
            attrs: {width: 100, class: "EditRow"}
        },
    ];


    // @ts-ignore
    return (

        <InstituteLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Manage Tutors
                        </h1>
                    </Col>
                </Row>
                <Row>
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
                                               placeholder="Search Tutors"
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
                    {!isPc &&
                    <Col md={12} className='d-flex flex-column align-items-center  next-table-list'>
                        {data.map((item) => {
                            return (
                                <Card className='w-100 p-3 mb-2 table-card'>
                                    <ul className='ps-md-3 ps-0'>
                                        <li className='d-none'>
                                            <span className='table-card-label'>{columns[0].text}</span>
                                            <span className='table-card-data'>{item.id}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[1].text}</span>
                                            <span className='table-card-data'>{item.username}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[2].text}</span>
                                            <span className='table-card-data'>{item.first_name}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[3].text}</span>
                                            <span className='table-card-data'>{item.last_name}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[4].text}</span>
                                            <span className='table-card-data'>{item.contact_no}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-end mt-2'>
                                            <span className='me-3'>
                                                 {gotoTutorProfile(null, item, null, null)}
                                            </span>
                                            <span className='me-3'>
                                                 {removeItem(null, item, null, null)}
                                            </span>
                                        </li>
                                    </ul>
                                </Card>
                            );
                        })}
                    </Col>
                    }
                </Row>
            </Col>
        </InstituteLayout>
    );
};

export default InstituteTutorsPage;

