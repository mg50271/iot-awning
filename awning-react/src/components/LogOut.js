import React from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                
                navigate('../', { replace: true });
            })
            .catch((error) => {
                console.error('Error logging out:', error);
            });
    };

    const handleNo = () => {
        
            navigate('../user/' + auth.currentUser.uid, { replace: true });
            
            
    };

    return (
        <div>
            <p>
            Are you sure you want to log out?
            </p>
            <Button variant="secondary" onClick={handleLogOut}>
            Yes
        </Button>
        <Button variant = "secondary" onClick = {handleNo}>No</Button>
        </div>
        
    );
};

export default LogOut;
