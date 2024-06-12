import React, {useState, useMemo} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Form, Button} from 'react-bootstrap';
import { useTable } from "react-table";
import axios from 'axios';
import Table from './Table';
import { Route, Routes, useNavigate } from 'react-router-dom';





const Users = () => {
    
    
    const auth = getAuth();
    const navigate = useNavigate();
    const [dataa, setData] = useState([]);

    React.useEffect(() => {
        
        axios.get("http://localhost:5000/api/awnings/"+auth.currentUser.email).then((response) => {
          setData(response.data.sort(compare));
          
        });
      }, []);

      function compare(a, b) {
        return a.id - b.id;
      }

      const ChangeState = (id) => {
        axios.put("http://localhost:5000/api/awnings/"+id+"/"+auth.currentUser.email).then((response) => {
            axios.get("http://localhost:5000/api/awnings/"+auth.currentUser.email).then((response) => {
                setData(response.data.sort(compare));
            
              }); }
        )

        
      }

      function handleClick (id) {
        
            navigate('../awning/'+id, { replace: true });
        
            
        
        
      }
      
   
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1 style={{fontFamily:'Josefin Sans'}}>Your awnings</h1>
                    
                    <div>
                    
                    <table id='data' style={{padding: '15px',
                        textAlign: 'left', marginTop:'40px'}}>
                 <tbody >
                 <tr><th style={{borderBottom:'1px solid #ddd', padding: '15px'}}>ID</th> <th style={{borderBottom:'1px solid #ddd', padding: '15px'}}>Name</th> <th style={{borderBottom:'1px solid #ddd', padding: '15px'}}>Is Folded</th> <th></th> <th></th> </tr>
                    {Object.entries(dataa).map(([key,value]) => (<tr className="item" key={value.id}>
            
          <td style={{borderBottom:'1px solid #ddd', padding: '15px'}}>{value.id}</td> <td style={{borderBottom:'1px solid #ddd', padding: '15px'}}> {value.name} </td> <td style={{borderBottom:'1px solid #ddd', padding: '15px'}}> {value.is_folded === 0? 'No' : 'Yes'} </td><td> <Button style={{backgroundColor: "black", color:"white"}} onClick={function(){ChangeState(value.id)}}>Change state</Button></td> <td><Button style ={{backgroundColor:"black", color:"white"}} onClick={function(){handleClick(value.id)}}>More data</Button></td> </tr>
         ))}
         </tbody>
         </table>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
    
};



export default Users;