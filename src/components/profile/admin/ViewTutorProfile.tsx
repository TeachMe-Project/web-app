import React, {useEffect, useState} from 'react';
import {Alert, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import {useAuth0} from "@auth0/auth0-react";
import {Formik} from "formik";
import axios, {AxiosResponse} from "axios";
import AdminLayout from "./AdminLayout";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useNavigate, useParams} from "react-router-dom";
import TutorProfile from "../tutor/TutorProfile";




const ViewTutorProfile = () => {

    const navigate = useNavigate();
    const {user} = useAuth0();
    const [enableEditProfile, setEnableEditProfile] = useState(true);
    const [passwordMail, setPasswordMail] = useState(null);
    const [isEditProfile, setIsEditProfile] = useState(false);
    const params = useParams();
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [error, setError] = useState('');

    return (
        <AdminLayout>
            <TutorProfile/>
        </AdminLayout>
    );
};

export default ViewTutorProfile;

