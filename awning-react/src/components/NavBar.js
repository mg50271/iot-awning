import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
                    <p style={{color:'white', marginLeft: '50px', marginBlockStart: '10px'}} > Welcome {auth.currentUser.email}</p> : <div></div>
                           }
                <Container>
          
                    <Navbar.Brand as={NavLink} to="/">AwningBuddy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                          
                        
                            <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>

                            <Nav.Link as={NavLink} to="/user">Profile</Nav.Link>
                            
                            <Nav.Link as={NavLink} to="/wind-graph">Wind Graph</Nav.Link>
                            
                            <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link> 
                            
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    
        

    
    
};

export {NavBar, NavBarLoggedIn};
