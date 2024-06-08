import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from "firebase/auth";



const Users = () => {
    const auth = getAuth();
    
        
   
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1>Your account</h1>
                    <p>
                     {auth.currentUser.email}
                    </p>
                </Col>
            </Row>
        </Container>
    );
    
};

export default Users;