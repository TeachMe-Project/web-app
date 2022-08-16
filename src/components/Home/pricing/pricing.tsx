import React from 'react';
import PricingCard from "./pricingCard";
import {Container, Row} from "react-bootstrap";

const Pricing: React.FC = () => {




    return (
        <Container fluid={true} id="Pricing" className="about-us pt-4 mb-5">
            <h1 className='about-us-header text-center'>Pricing</h1>
            <Row className="d-flex justify-content-center flex-row mt-4 mx-0 px-0 mb-5">
                <PricingCard title={"Basic"} description={"Free"}/>
                <PricingCard title={"Plus"} description={"$ 25"}/>
                <PricingCard title={"Premium"} description={"$ 199"}/>
            </Row>

        </Container>
    );
};

export default Pricing;