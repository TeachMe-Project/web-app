import React, {useState} from 'react';
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarHeader,} from 'react-pro-sidebar';
import {HiOutlineMenu} from "react-icons/hi";
import {useNavigate} from "react-router-dom";
import {FaUserAlt, FaUsers} from "react-icons/fa";
import {SiCoursera} from "react-icons/si";
import {useMediaQuery} from 'react-responsive';

type InstituteSidebarProps = {
    toggle: boolean,
    handleToggleSidebar: () => void
}

const InstituteSidebar: React.FC<InstituteSidebarProps> = (props: InstituteSidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const {toggle, handleToggleSidebar} = props;

    const handleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const isTab = useMediaQuery({maxWidth: 991, minWidth: 768});
    const isMobile = useMediaQuery({maxWidth: 768});

    return (
        <ProSidebar
            collapsed={collapsed || isTab}
            toggled={toggle}
            breakPoint="md"
            style={{
                height: '90vh',
                overflowY: "hidden",
                boxShadow: "rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }}
            onToggle={handleToggleSidebar}
            className='SideBar'
        >
            {
                !isMobile && !isTab ? (<SidebarHeader>
                        <div
                            style={{
                                fontWeight: 'bold',
                                fontSize: 50,
                                marginLeft: 15
                            }}
                        >
                            <HiOutlineMenu onClick={handleCollapsed}/>
                        </div>
                    </SidebarHeader>) :
                    (<SidebarHeader></SidebarHeader>)
            }

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<SiCoursera/>} onClick={() => navigate('/institute')}>
                        Manage Courses
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaUsers/>} onClick={() => navigate('/institute/tutors')}>
                        Manage Tutors
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaUsers/>} onClick={() => navigate('/institute/addtutors')}>
                        Add New Tutor
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaUserAlt/>} onClick={() => navigate('/institute/profile')}>
                        Manage Profile
                    </MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};

export default InstituteSidebar;