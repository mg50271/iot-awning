import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, getUsers } from 'react';

const NavBar = () => {
    
    
    const auth = getAuth();
    
    
            return (
                <Navbar bg="dark" variant="dark" expand="lg">
                    
                    <Container>
              
                        <Navbar.Brand as={NavLink} to="/">AwningBuddy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                
                              
                            
                                <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
                                
                                <Nav.Link as={NavLink} to="/wind-graph">Wind Graph</Nav.Link>
                                
                                <Nav.Link as={NavLink} to="/login">Log In</Nav.Link> 
                                
                                <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link> 
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            );
        
    
    
    
};

const NavBarLoggedIn = () => {
    
    
    const auth = getAuth();
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                {auth.currentUser !== null ? 
                <div>
                <Container>
                    <Row className="justify-content-md-center">
                    <Col md="auto">
                    <img width={50} height={50} style= {{marginLeft: '30px'}}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
                            alt="new"
                            /> </Col>
                            <Col md="auto">
                <p style={{color:'white', marginBlockStart: '10px'}} > Welcome {auth.currentUser.email}</p> </Col>
                </Row>
                </Container>
                </div>
                     : <div></div>
                           }
                <Container>
          
                    <Navbar.Brand as={NavLink} to="/">AwningBuddy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                          
                        
                            <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/aboutus" >About Us</Nav.Link>

                            <Nav.Link as={NavLink} to="/user">Your awnings</Nav.Link>
                            
                            <Nav.Link as={NavLink} to="/wind-graph">Wind Graph</Nav.Link>
                            
                            <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link> 
                            
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    
        

    
    
};

export {NavBar, NavBarLoggedIn};
