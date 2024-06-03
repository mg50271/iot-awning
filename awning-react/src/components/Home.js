import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1>Welcome to My React App!</h1>
                    <p>
                        This is a simple hero unit, a simple Jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
