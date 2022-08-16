import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import SignUpCategory from "./components/signup/SignUpCategory";
import TeacherSignup from "./components/signup/TeacherSignup";
import InstituteSignup from "./components/signup/InstituteSignup";
import StudentSignup from "./components/signup/StudentSignup";
import ParentSignup from "./components/signup/ParentSignup";
import PUpComingClasses from "./components/profile/parent/PUpComingClasses";
import PUpComingPayments from './components/profile/parent/PUpComingPayments';
import PStudentProgress from './components/profile/parent/PStudentProgress';
import ManageUsers from "./components/profile/admin/ManageUsers";
import AdminManageCourses from "./components/profile/admin/ManageCourses";
import VerifyTutorsPage from "./components/profile/admin/VerifyTutorsPage";
import VerifyInstitutesPage from "./components/profile/admin/VerifyInstitutesPage";
import {ProtectedRoute} from "./components/utils/protected-routes";
import NotFound from "./components/utils/notFound";
import TutorPayments from "./components/profile/admin/TutorPayments";
import InstituteTutorsPage from "./components/profile/institute/InstituteTutorsPage";
import InstituteManageCourses from "./components/profile/institute/InstituteManageCourses";
import InstituteAddTutor from "./components/profile/institute/InstituteAddTutor";
import ProfileEdit from "./components/profile/navBar/ProfileEdit";
import ViewInstituteProfile from "./components/profile/admin/ViewInstituteProfile";
import InstituteManageProfile from "./components/profile/institute/InstituteManageProfile";
import ViewTutorProfile from "./components/profile/admin/ViewTutorProfile";
import PStudentSummery from "./components/profile/parent/PStudentSummery";
import ViewInstituteTutorProfile from "./components/profile/institute/ViewTutorProfile"
import AdminNotification from "./components/profile/admin/AdminNotification";
import InstituteNotification from "./components/profile/institute/InstituteNotification";
import ParentNotification from "./components/profile/parent/ParentNotification";
import CourseProfile from "./components/profile/tutor/CourseProfile";
import ViewCourse from "./components/profile/admin/ViewCourse";

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<PStudentProgress/>}/>
                <Route path="/signup" element={<SignUpCategory/>}/>
                <Route path="/signup/teacher" element={<TeacherSignup/>}/>
                <Route path="/signup/institute" element={<InstituteSignup/>}/>
                <Route path="/signup/parent" element={<ParentSignup/>}/>

                <Route path="/parent" element={<ProtectedRoute component={PUpComingClasses} role={'parent'}/>}/>
                <Route path="/parent/payments"
                       element={<ProtectedRoute component={PUpComingPayments} role={'parent'}/>}/>
                <Route path="/parent/stuSignup" element={<ProtectedRoute component={StudentSignup} role={'parent'}/>}/>
                <Route path="/parent/history" element={<ProtectedRoute component={PStudentProgress} role={'parent'}/>}/>
                <Route path="/parent/summery" element={<ProtectedRoute component={PStudentSummery} role={'parent'}/>}/>
                <Route path="/parent/notification"
                       element={<ProtectedRoute component={ParentNotification} role={'parent'}/>}/>



                <Route path="/admin" element={<ProtectedRoute component={ManageUsers} role={'admin'}/>}/>
                <Route path="/admin/managecourses"
                       element={<ProtectedRoute component={AdminManageCourses} role={'admin'}/>}/>
                <Route path="/admin/verifytutors"
                       element={<ProtectedRoute component={VerifyTutorsPage} role={'admin'}/>}/>
                <Route path="/admin/verifyinstitutes"
                       element={<ProtectedRoute component={VerifyInstitutesPage} role={'admin'}/>}/>
                <Route path="/admin/viewInstitute"
                       element={<ProtectedRoute component={ViewInstituteProfile} role={'admin'}/>}/>
                <Route path="/admin/tutor/:tutor_id"
                       element={<ProtectedRoute component={ViewTutorProfile} role={'admin'} />}/>
                <Route path="/admin/institute/:institute_id"
                       element={<ProtectedRoute component={ViewInstituteProfile} role={'admin'} />}/>
                <Route path="/admin/tutor/:institute_id"
                       element={<ProtectedRoute component={InstituteManageProfile} role={'admin'} />}/>
                <Route path="/admin/tutorpayment"
                       element={<ProtectedRoute component={TutorPayments} role={'admin'}/>}/>
                <Route path="/admin/notification"
                       element={<ProtectedRoute component={AdminNotification} role={'admin'}/>}/>
                <Route path="/admin/course"
                       element={<ProtectedRoute component={ViewCourse} role={'admin'}/>}/>


                <Route path="/institute"
                       element={<ProtectedRoute component={InstituteManageCourses} role={'institute'}/>}/>
                <Route path="/institute/tutors"
                       element={<ProtectedRoute component={InstituteTutorsPage} role={'institute'}/>}/>
                <Route path="/institute/profile"
                       element={<ProtectedRoute component={InstituteManageProfile} role={'institute'} />}/>
                <Route path="/institute/addtutors"
                       element={<ProtectedRoute component={InstituteAddTutor} role={'institute'}/>}/>
                <Route path="/institute/tutors/:tutor_id"
                       element={<ProtectedRoute component={ViewInstituteTutorProfile} role={'institute'} />}/>
                <Route path="/institute/notification"
                       element={<ProtectedRoute component={InstituteNotification} role={'institute'}/>}/>

                <Route path="/parent/profile" element={<ProtectedRoute component={ProfileEdit} role={'parent'}/>}/>
                <Route path="/admin/profile" element={<ProtectedRoute component={ProfileEdit} role={'admin'}/>}/>

                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;