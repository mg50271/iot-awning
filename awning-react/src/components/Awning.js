import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Awning = () => {

    const { id }= useParams()
    const auth = getAuth();
    const [dataa, setData] = useState([]);
    const [lastSpeed, setLastSpeed] = useState([]);
    const [time, setTime] = useState([]);
    const [last5, setLast5] = useState([]);

    React.useEffect(() => {
        
        axios.get("http://localhost:5000/api/awnings/"+id + "/" + auth.currentUser.email).then((response) => {
          setData(response.data);
          
        });

        axios.get("http://localhost:5000/api/wind-data/last/" + id).then((response) => {
            setLastSpeed(response.data);
        });

        axios.get("http://localhost:5000/api/wind-data/last5/" + id).then((response) => {
            setLast5(response.data);
            
        });


      }, []);
    
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1 style={{fontFamily:'Josefin Sans', marginTop:"0px", fontSize:"50px"}}>{dataa.name}</h1>
                    
                    <p style={{fontSize: "30px", fontFamily:'Josefin Sans'}}>Folded: {dataa.is_folded ? "Yes" : "No"}</p>
                    <p style = {{fontSize: "30px", fontFamily:'Josefin Sans'}} > Last recorded speed: {lastSpeed.speed}km/h </p>
                    <p> recorded at: {lastSpeed.createdAt}</p>

                    <p style={{fontSize: "30px", fontFamily:'Josefin Sans'}}> Previous recordings: </p>
                    <p style={{fontSize: "20px", fontFamily:'Josefin Sans'}}>{last5[1] ? last5[1].speed +'km/h': 'No recording'}</p>
                    <p style={{fontSize: "20px", fontFamily:'Josefin Sans'}}>{last5[2] ? last5[2].speed +'km/h': 'No recording'}</p>
                    <p style={{fontSize: "20px", fontFamily:'Josefin Sans'}}>{last5[3] ? last5[3].speed +'km/h': 'No recording'}</p>
                    <p style={{fontSize: "20px", fontFamily:'Josefin Sans'}}>{last5[4] ? last5[4].speed +'km/h': 'No recording'}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Awning;