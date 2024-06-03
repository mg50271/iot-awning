import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import WindGraph from './components/WindGraph';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/wind-graph" element={<WindGraph />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
