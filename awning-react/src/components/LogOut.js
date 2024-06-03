import React from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { Button } from 'react-bootstrap';

const LogOut = () => {
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log('User logged out');
            })
            .catch((error) => {
                console.error('Error logging out:', error);
            });
    };

    return (
        <Button variant="secondary" onClick={handleLogOut}>
            Log Out
        </Button>
    );
};

export default LogOut;
