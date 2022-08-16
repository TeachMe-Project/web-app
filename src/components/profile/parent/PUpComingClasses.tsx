import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import ParentLayout from "./ParentLayout";
import {useMediaQuery} from "react-responsive";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// @ts-ignore
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';

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
        return time + " h";
    }
    return time + " h";
}

const data: Array<UpComing> = [
    {
        id: 1,
        name: "Nimal Weerasinghe",
        class: "Mathematics",
        month: "September",
        payment: 1500,
        date: new Date(2022, 7, 20, 15, 30).toDateString(),
        attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
        leaveTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classStartTime: handleTime(new Date(2022, 7, 20, 15, 30)),
        classEndTime: handleTime(new Date(2022, 7, 20, 15, 30)),
    },
    {
        id: 1,
        name: "Upulshanthashantha Sanasagala",
        class: "Science",
        month: "September",
        payment: 1500,
        date: new Date(2022, 7, 21, 15, 30).toDateString(),
        attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
        leaveTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classStartTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classEndTime: handleTime(new Date(2022, 7, 20, 15, 30)),
    },
    {
        id: 1,
        name: "Kamal Weerasinghe",
        class: "History",
        month: "September",
        payment: 1500,
        date: new Date(2022, 7, 22, 17, 30).toDateString(), attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
        leaveTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classStartTime: handleTime(new Date(2022, 7, 20, 15, 30)),
        classEndTime: handleTime(new Date(2022, 7, 20, 15, 30)),
    },
    {
        id: 1,
        name: "Upul Sanasagala",
        class: "English",
        month: "September",
        payment: 1500,
        date: new Date(2022, 7, 23, 15, 30).toDateString(), attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
        leaveTime: handleTime(new Date(2022, 7, 20, 17, 30)),
        classStartTime: handleTime(new Date(2022, 7, 20, 15, 30)),
        classEndTime: handleTime(new Date(2022, 7, 20, 15, 30)),
    },
    {
        id: 1,
        name: "Nimal Weerasinghe",
        class: "Mathematics",
        month: "September",
        payment: 1500,
        date: new Date(2022, 7, 27, 15, 30).toDateString(), attendTime: handleTime(new Date(2022, 7, 20, 15, 35)),
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
        dataField: "name",
        text: "Tutor Name",
    },
    {
        dataField: "date",
        text: "Date"
    },
    {
        dataField: "classStartTime",
        text: "Class Start Time"
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
                            Upcoming Classes
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
                                            <span className='table-card-data'>{item.name}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[3].text}</span>
                                            <span className='table-card-data'>{item.date}</span>
                                        </li>
                                        <li className='d-flex flex-row align-items-center justify-content-between'>
                                            <span className='table-card-label'>{columns[4].text}</span>
                                            <span className='table-card-data'>{item.classStartTime}</span>
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
