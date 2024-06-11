import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Home = () => {

    
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1 style={{fontFamily:'Josefin Sans', marginTop:"0px", fontSize:"50px"}}>Welcome to AwningBuddy App!</h1>
                    <Container className="mt-5">
                        <Row className="justify-content-md-center">
                        <Col md="auto">
                        <img width={250} height={200}
                            src="https://th.bing.com/th/id/R.036b46b4cc5bd5ab08e18b3f61c0b0a2?rik=D4WEK%2fCYbtuJeA&riu=http%3a%2f%2fwww.awningsnow.com%2fwp-content%2fuploads%2f2013%2f10%2fresidential-retractable-awning.jpg&ehk=yI3PhsQkjpBcl1wpgYUvJpeOezRG5e4SaCncsuUDcfE%3d&risl=&pid=ImgRaw&r=0"
                            alt="new"
                            />
                    
                        </Col>
                        <Col md="auto">
                        <img width={250} height={200}
                            src="https://www.marygrove.com/wp-content/uploads/2021/05/retractable-awning-on-home-marygrove-awnings.jpg"
                            alt="new"
                            />
                    
                        </Col>
                        </Row>
                        <Row className="justify-content-md-center" style={{marginTop: "20px"}}>
                        <Col md="auto">
                        <img width={250} height={200}
                            src="https://th.bing.com/th/id/R.ff1c3480d2917617a9c72bad98a3d018?rik=Ax8wdQewkTG04g&pid=ImgRaw&r=0"
                            alt="new"
                            />
                    
                        </Col>
                        <Col md="auto">
                        <img width={250} height={200}
                            src="https://th.bing.com/th/id/R.b651b330787b4e498e0a919097963fd4?rik=Dlb7gC6D8Q6PzQ&riu=http%3a%2f%2flightnshade.com%2fwp-content%2fuploads%2f2017%2f03%2fawnings.jpg&ehk=imoXKYUMf5NJ3Qan5SI5IMbSlPPkS%2bWq278biDF%2b%2f2U%3d&risl=&pid=ImgRaw&r=0"
                            alt="new"
                            />
                    
                        </Col>
                        </Row>

                        <p style={{marginTop: "20px", fontFamily:'Josefin Sans', fontSize:"20px"}}> Here we take care of your awnings so you don't have to!</p>
        </Container>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
