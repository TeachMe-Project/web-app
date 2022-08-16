import React, {useState} from 'react';
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarHeader,} from 'react-pro-sidebar';
import {HiOutlineMenu} from "react-icons/hi";
import {useNavigate} from "react-router-dom";
import {FaTachometerAlt} from "react-icons/fa";
import {IoIosSchool} from "react-icons/io";
import {MdPersonAddAlt} from "react-icons/md";
import {useMediaQuery} from 'react-responsive';
import {BsCashCoin} from "react-icons/bs";

type AdminSidebarProps = {
    toggle: boolean,
    handleToggleSidebar: () => void
}

const AdminSidebar: React.FC<AdminSidebarProps> = (props: AdminSidebarProps) => {

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
                    <MenuItem icon={<IoIosSchool/>} onClick={() => navigate('/parent')}>
                        Upcoming Classes
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt/>} onClick={() => navigate('/parent/history')}>
                        Student Progress
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<BsCashCoin/>} onClick={() => navigate('/parent/payments')}>
                        Pending Payments
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<MdPersonAddAlt/>} onClick={() => navigate('/parent/stuSignup')}>
                        Register Student
                    </MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};

export default AdminSidebar;
