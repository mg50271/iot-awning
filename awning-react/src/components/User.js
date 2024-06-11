import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Form, Button} from 'react-bootstrap';



const Users = () => {
    const auth = getAuth();
    
        
   
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1 style={{fontFamily:'Josefin Sans'}}>Your awnings</h1>
                    <div>
                    <form>
                    <Button variant="contained" style={{backgroundColor: "black", color:"white"}}>Synchronize awnings</Button>
                    </form>

                    
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
    
};

export default Users;