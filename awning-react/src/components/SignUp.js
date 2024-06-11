import React, { useState } from 'react';
//import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Form, Button, Container } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('../user', { replace: true });
            })
            .catch((error) => {
                console.error('Error signing up:', error);
            });
    };

    return (
        <Container>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
};

export default SignUp;
