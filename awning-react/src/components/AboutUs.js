import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Form, Button} from 'react-bootstrap';



const AboutUs = () => {
    
        
   
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1 style={{fontFamily:'Josefin Sans', marginTop:"0px", fontSize:"50px"}}>About us</h1>
                    <p style={{fontFamily:'Josefin Sans', marginTop:"20px", fontSize: "20px"}}> Awning buddy is a web application which takes care of your awnings instead of you. </p>
                    <p style={{fontFamily:'Josefin Sans', marginTop:"20px", fontSize: "20px"}}> It is very easy to use - just put a wind sensor next to your awning and when the speed of the wind reaches a critical number, the app folds the awning instead of you. Likewise, as soon as the wind speed reaches an acceptable number, the app unfolds the awning again.</p>
                    <img width={250} height={200} style ={{marginTop:"20px"}}
                            src="https://irp.cdn-website.com/739d0cb2/dms3rep/multi/dirty+and+broken+awning.jpeg"
                            alt="new"
                            />
                    <p style={{fontFamily:'Josefin Sans', marginTop:"20px", fontSize:"20px"}}>If you don't want your awning to end up like the one on the picture above, make an account and start your AwningBuddy journey now!</p>
                </Col>
            </Row>
        </Container>
    );
    
};

export default AboutUs;