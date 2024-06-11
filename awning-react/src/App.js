import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {NavBar, NavBarLoggedIn} from './components/NavBar';

import Home from './components/Home';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import WindGraph from './components/WindGraph';
import Users from './components/User';
import LogOut from './components/LogOut';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, getUsers } from 'react';
import AboutUs from './components/AboutUs';
//import * as firebase from 'firebase';
//import NavBarLoggedIn from "./components/NavBarLoggedIn";


function App() {
    const auth = getAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const authStatus = auth.currentUser;
    
    useEffect(()=>{
        auth.onAuthStateChanged(function(user) {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        })
  },[])


  
    return (
        
        <Router>
            <div className="App">
                
                {isAuthenticated===true ? <NavBarLoggedIn/> : <NavBar/>}
                
                
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/logout" element={<LogOut />} />
                    <Route path="/wind-graph" element={<WindGraph />} />
                    <Route path="/user" element={<Users />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
