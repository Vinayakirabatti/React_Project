import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

export default class ListCustomer extends Component {

    constructor ()
    {
        super();
        this.state ={
            list:null
        }
    }

    componentDidMount() {
      fetch("http://localhost:8080/Users").then((response) => {
        response.json().then((result) => {
          console.log(result);
          this.setState({ list: result });
        })
      })
    }

  render() {
    return (
      <div>
        <h1>List Customers</h1>
        {
          this.state.list ?
          <div>
            <Table>
              <thead>
                <tr>
                  <td>No</td>
                  <td>Bank Name</td>
                  <td>UID</td>
                  <td>Account Number</td>
                  <td>IBAN</td>
                  <td>EMAIL Address</td>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.list.map((item,i) =>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.bank_name}</td>
                      <td>{item.uid}</td>
                      <td>{item.account_number}</td>
                      <td>{item.iban}</td>
                      <td>{item.Emailadd}</td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
          </div>
          : <p>Please wait ...</p>
        }
      </div>
    )
  }
}
