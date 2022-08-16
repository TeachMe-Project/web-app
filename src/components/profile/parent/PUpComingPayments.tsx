import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import ParentLayout from "./ParentLayout";
import {useMediaQuery} from "react-responsive";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import {BsCashCoin} from "react-icons/bs";
// @ts-ignore
import swal from "@sweetalert/with-react";

type UpComing = {
    id: number;
    name: string;
    class: string;
    month: string;
    payment: number;
    date: string;
    attendTime: string;
    leaveTime: string;
    classStartTime: string;
    classEndTime: string;
};

const handleTime = (x: Date) => {
    const hour = x.getHours();
    const time = x.toTimeString().substring(0, 5);
    if (hour >= 12) {
        return time + " PM";
    }
    return time + " AM";
}

const data: Array<UpComing> = [
    {
        id: 1,
        name: "Nimal Weerasinghe",
        class: "Mathematics",
        month: "August",
        payment: 1500,
        date: new Date(2022, 8, 20, 15, 30).toDateString(),
        attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
        leaveTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classStartTime: handleTime(new Date(2022, 7, 20, 15, 30)),
        classEndTime: handleTime(new Date(2022, 7, 20, 15, 30)),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "Science",
        month: "August",
        payment: 1500,
        date: new Date(2022, 8, 21, 15, 30).toDateString(),
        attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
        leaveTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classStartTime: handleTime(new Date(2022, 7, 20, 15, 30)),
        classEndTime: handleTime(new Date(2022, 7, 20, 15, 30)),
    },
    {
        id: 1,
        name: "Kamal Weerasinghe",
        class: "History",
        month: "August",
        payment: 1500,
        date: new Date(2022, 8, 22, 15, 30).toDateString(), attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
        leaveTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classStartTime: handleTime(new Date(2022, 7, 20, 15, 30)),
        classEndTime: handleTime(new Date(2022, 7, 20, 15, 30)),
    },
    {
        id: 1,
        name: "Upul Sanasagala",
        class: "English",
        month: "August",
        payment: 1500,
        date: new Date(2022, 8, 23, 15, 30).toDateString(), attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
        leaveTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classStartTime: handleTime(new Date(2022, 7, 20, 15, 30)),
        classEndTime: handleTime(new Date(2022, 7, 20, 15, 30)),
    },
    {
        id: 1,
        name: "Sameera Weerasinghe",
        class: "Commerce",
        month: "August",
        payment: 1500,
        date: new Date(2022, 8, 24, 15, 30).toDateString(), attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
        leaveTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classStartTime: handleTime(new Date(2022, 7, 20, 15, 30)),
        classEndTime: handleTime(new Date(2022, 7, 20, 15, 30)),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "Mathematics",
        month: "September",
        payment: 1500,
        date: new Date(2022, 7, 25, 15, 30).toDateString(), attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
        leaveTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classStartTime: handleTime(new Date(2022, 7, 20, 15, 30)),
        classEndTime: handleTime(new Date(2022, 7, 20, 15, 30)),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "Mathematics",
        month: "September",
        payment: 1500,
        date: new Date(2022, 7, 26, 15, 30).toDateString(),
        attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
        leaveTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classStartTime: handleTime(new Date(2022, 7, 20, 15, 30)),
        classEndTime: handleTime(new Date(2022, 7, 20, 15, 30)),
    },

];

const payment = (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
    // < BsTrashFill
    //     style={{
    //         fontSize: "20px",
    //         color: "#e74c3c",
    //         padding: "7px",
    //         width: "30px",
    //         height: "30px",
    //         borderRadius: "50%",
    //         cursor: "pointer",
    //         boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    //     }}
    //     className='accept-icon'

    // />
    <Button
        className='success-outline'
        style={{
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    }}
            onClick={() => {
                swal({
                    title: "Class Payment",
                    text: `Do you really want to pay ${row.class} class fees for ${row.month}?`,
                    icon: "info",
                    buttons: {
                        cancel: true,
                        confirm: true
                    },
                    // dangerMode: true,
                })
                    .then((willDelete: any) => {
                        if (willDelete) {
                            swal(`Poof! You have successfully paid ${row.class} class fees for ${row.month}`, {
                                icon: "success",
                            });
                        }
                    });
            }}>
        <BsCashCoin style={{marginRight: "5px"}}/> PayNow
    </Button>
);

const columns = [
    {
        dataField: "id",
        text: "",
        hidden: true
    },
    {
        dataField: "class",
        text: "Subject",
    },
    {
        dataField: "month",
        text: "month",
    },
    {
        dataField: "name",
        text: "Tutor Name",
    },
    {
        dataField: "payment",
        text: "Payment(LKR)"
    },
    {
        dataField: "",
        text: "",
        formatter: payment,
        headerAttrs: {width: 150},
        attrs: {width: 100, class: "EditRow"}
    },

];


const PStudentProgress: React.FC = () => {


    // console.log(data);
    // useEffect(() => {
    //     // const fetchUsers = async () => {
    //     // setLoading(true);
    //     // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    //     // setItems(res.data);
    //     // setLoading(false)
    //     // }
    //     // fetchUsers().then();
    //     setItems(data);
    // }, []);
    // // console.log(items);

    const isPc = useMediaQuery({minWidth: 991});
    const {SearchBar} = Search;

    // @ts-ignore
    return (

        <ParentLayout>
            <Col lg={12} className='px-lg-5'>
                <Row className='d-lg-flex flex-lg-column align-items-center text-lg-center'>
                    <Col lg={12} md={12} xs={12}>
                        <h1 className='text-lg-start header my-lg-3 text-md-center text-center'>
                            Pending Payment
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
                                               placeholder="Search Class"
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
                                            <span className='table-card-data'>{item.class}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[2].text}</span>
                                            <span className='table-card-data'>{item.date}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[3].text}</span>
                                            <span className='table-card-data'>{item.attendTime}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[4].text}</span>
                                            <span className='table-card-data'>{item.leaveTime}</span>
                                        </li>
                                    </ul>
                                </Card>
                            );
                        })}
                    </Col>
                    }
                </Row>
            </Col>
        </ParentLayout>
    );

};

export default PStudentProgress;
