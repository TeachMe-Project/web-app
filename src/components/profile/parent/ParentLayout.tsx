import React, {useState} from 'react';
import ProfileNavBar from "../navBar/profileNavBar";
import {Col, Container, Row} from "react-bootstrap";
import ParentSidebar from "./ParentSidebar";
import {useMediaQuery} from "react-responsive";

type ParentLayoutProps = {
    children: React.ReactNode
}

const ParentLayout: React.FC<ParentLayoutProps> = (props: ParentLayoutProps) => {

    const {children} = props;
    const [toggled, setToggled] = useState(false);
    const isMobile = useMediaQuery({maxWidth: 768});

    const handleToggleSidebar = () => {
        if (!toggled) {
            setToggled(true);
            return toggled;
        }
        setToggled(false);
    };

    return (
        <Container fluid={true} className="profile-actions m-0 px-0 py-0">
            <ProfileNavBar handleToggleSidebar={handleToggleSidebar} isMobile={isMobile}/>
            <Row className="ps-0 action-page mx-0 py-0">
                <Col lg={12} className="d-flex flex-row p-0">
                    <ParentSidebar handleToggleSidebar={handleToggleSidebar} toggle={toggled}/>
                    <Row className='px-0 d-flex mx-auto mt-lg-1 w-100'>
                        {children}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ParentLayout;
