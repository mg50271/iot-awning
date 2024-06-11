import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            <Container>
            <Row className="justify-content-md-center">
            <Col md="auto" style={{marginRight:"100px"}}>
                <p>Contact us: </p>
                <p> +385 99 001 100</p>
                <p>Facebook: https://facebook.com/awningbuddy</p>
                <p>Instagram: @awningbuddy</p>
                <p>Twitter: @awningbuddy</p>
            </Col>
            <Col md="auto">
            <img width={250} height={200}
                            src="https://static.vecteezy.com/system/resources/previews/023/608/598/non_2x/cute-store-umbrella-free-png.png"
                            alt="new"
                            />
            </Col>
            </Row>
            </Container>
        </footer>
    );
};

export default Footer;
