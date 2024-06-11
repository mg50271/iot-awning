import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Form, Button} from 'react-bootstrap';



const Users = () => {
    const auth = getAuth();
    const [showForm, setShowForm] = useState(false);

    const showForm1 = () => {
    setShowForm(!showForm);
    if(showForm===true) {
        setText("Dodaj tendu");
    }
    else{ setText("Poništi");}
    }
    const [text, setText] = useState("Dodaj tendu");
        
   
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1>Your account</h1>
                    <div>
                    <form>
                    <Button variant="contained" style={{backgroundColor: "black", color:"white"}} onClick={showForm1}>{text}</Button>
                    </form>

                    {showForm && (
                    <form style = {{borderColor: "black", border:'10px'}}>
                        <Container>
                        <p>Naziv tende: </p>
                        <input name="query" />
                        <p style={{marginTop: '20px'}}> Lokacija tende: </p>
                        <select name="cars" id="cars" style={{width:'190px', height:'30px'}}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <div style={{marginTop:'20px'}}>
                        <Button variant="contained" style={{backgroundColor: "black", color:"white"}}>Spremi</Button>
                        </div>
                            
                        
                        </Container>
                      
                    </form>
                    
                    )}
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
    
};

export default Users;