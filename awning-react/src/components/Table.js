import React, {useState, useMemo, Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Form, Button} from 'react-bootstrap';
import { useTable } from "react-table";
import axios from 'axios';

class Table extends Component {
    constructor(dataa) {
       super(dataa) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = { //state is by default an object
          data: dataa
       }
    }
 
    renderTableHeader() {
        let header = Object.keys(this.state.data)
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    renderTableData() {
        return Object.entries(this.state.data).map(([key,value]) => {
        
           const { id, name, location, is_folded } = value //destructuring
           return (
            
              <tr key={key}>
                
                 <td>{value.id}</td>
                 
                 <td>{value.name}</td>
                 <td>{value.location}</td>
                 <td>{value.is_folded}</td>
              </tr>
           )
        })
     }

    render() {
        return (
           <div>
              
              <table id='data' >
                 <tbody style={{border: '1px solid'}}>
                 <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
    } 


    export default Table;