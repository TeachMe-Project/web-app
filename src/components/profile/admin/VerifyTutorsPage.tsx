import React, {useEffect, useState} from 'react';
import AdminLayout from "./AdminLayout";
import {Card, Col, Row} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import {BsCheckCircleFill} from "react-icons/bs";
import {useMediaQuery} from "react-responsive";
// @ts-ignore
import swal from "@sweetalert/with-react";
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import {FaEye} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import axios, {AxiosResponse} from "axios";
import Loader from '../../utils/Loader';
import {useNavigate} from "react-router-dom";

type appliedTutor = {
    user_id: string,
    teacher_id: number,
    applied_date: string,
    tutor_name: string,
    first_name: string,
    last_name: string
}


const VerifyTutorsPage = () => {


    const isPc = useMediaQuery({minWidth: 991});
    const {SearchBar} = Search;
    const navigate = useNavigate();
    const baseURL = "http://localhost:8081/admin/newTeacherRequests";
    const [teachers, setTeachers] = useState<appliedTutor[]>([]);

    const viewItem = (cell: any, row: appliedTutor, rowIndex: any, formatExtraData: any) => (
        < FaEye
            style={{
                fontSize: "20px",
                color: "#2f3542",
                padding: "7px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }}
            className='accept-icon'
            onClick={() => {
                navigate(`/admin/tutor/${row.user_id}`)
            }}
        />
    );

    const verifyItem = (cell: any, row: appliedTutor, rowIndex: any, formatExtraData: any) => (
        < BsCheckCircleFill
            style={{
                fontSize: "20px",
                color: "#2ed573",
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
                    title: "Tutor Approve",
                    text: `Do you really want to accept ${row.tutor_name}?`,
                    icon: "info",
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
                            url: "http://localhost:8081/auth/unblock",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: apiData
                        }).then((apiRes) => {
                            axios({
                                method: "POST",
                                url: "http://localhost:8081/admin/verifyTeacher",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                data: apiData
                            }).then((apiRes) => {
                                console.log(apiRes.status);
                                if (apiRes.status === 200) {
                                    swal(`Poof! You have successfully approved ${row.tutor_name}`, {
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

    const removeItem = (cell: any, row: appliedTutor, rowIndex: any, formatExtraData: any) => (
        < ImCross
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
                    text: `Do you really want to reject ${row.tutor_name}?`,
                    icon: "warning",
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
                            url: "http://localhost:8081/admin/rejectTeacher",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: apiData
                        }).then((apiRes) => {
                            console.log(apiRes.status);
                            if (apiRes.status === 200) {
                                swal(`Poof! You have successfully reject ${row.tutor_name}`, {
                                    icon: "success",
                                });
                            }
                        }).catch((error) => {
                            console.log(error.message)
                        })


                    });
            }}
        />
    );

    const columns = [
        {
            dataField: "user_id",
            text: "Application ID",
            hidden: true
        },
        {
            dataField: "teacher_id",
            text: "Application ID",
            sort: true,
        },
        {
            dataField: "applied_date",
            text: "Applied Date",
            sort: true,
        },
        {
            dataField: "tutor_name",
            text: "Tutor's Name",
            attrs: {width: 100}
        },
        {
            dataField: "",
            text: "",
            formatter: viewItem,
            headerAttrs: {width: 100},
            attrs: {width: 100, class: "EditRow"}
        },
        {
            dataField: "",
            text: "",
            formatter: verifyItem,
            headerAttrs: {width: 100},
            attrs: {width: 100, class: "EditRow"}
        },
        {
            dataField: "",
            text: "",
            formatter: removeItem,
            headerAttrs: {width: 100},
            attrs: {width: 100, class: "EditRow"}
        },
    ];

    useEffect(() => {
        axios.get(baseURL).then((res: AxiosResponse) => {
            setTeachers(res.data.map((item: appliedTutor) => ({
                user_id: item.user_id,
                teacher_id: item.teacher_id,
                applied_date: item.applied_date,
                tutor_name: item.first_name + " " + item.last_name
            })));
        })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    if (teachers === null) {
        return <Loader/>
    }


    return (

        <AdminLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Verify Tutors
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {isPc &&
                    <ToolkitProvider
                        keyField="id"
                        data={teachers}
                        columns={columns}
                        search>
                        {(props: any) =>
                            (
                                <Row className='next-table'>
                                    <SearchBar {...props.searchProps}
                                               placeholder="Search Users"
                                    />
                                    <BootstrapTable
                                        columns={columns} data={teachers} keyField="id"
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
                        {teachers.map((item: appliedTutor) => {
                            return (
                                <Card className='w-100 p-3 mb-2 table-card'>
                                    <ul className='ps-md-3 ps-0'>
                                        <li className='d-none'>
                                            <span className='table-card-label'>{columns[0].text}</span>
                                            <span className='table-card-data'>{item.user_id}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[1].text}</span>
                                            <span className='table-card-data'>{item.teacher_id}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[2].text}</span>
                                            <span className='table-card-data'>{item.applied_date}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[3].text}</span>
                                            <span className='table-card-data'>{item.tutor_name}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-end mt-2'>
                                            <span className='me-3'>
                                                 {viewItem(null, item, null, null)}
                                            </span>
                                            <span className='me-3'>
                                                 {verifyItem(null, item, null, null)}
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
        </AdminLayout>
    );
};

export default VerifyTutorsPage;