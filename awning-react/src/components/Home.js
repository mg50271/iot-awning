import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1>Welcome to AwningBuddy App!</h1>
                    <p>
                        This app is designed to help you determine the wind speed and direction at your location and decide whether it is safe to use your awning.
                        You can sign up or log in to access the wind graph feature.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
