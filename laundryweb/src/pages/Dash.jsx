/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar3 from '../components/Navbar3';
import Footer2 from '../components/Footer2';
import SearchButton from '../components/SearchButton';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const MyComponent = () => {
  return (
    <>
      <Navbar3 />
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: '20%'}}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div style={{ width: '80%', padding: '20px', marginTop:'5%'}}>
          <h1>Layanan</h1>
          <div style={{marginRight: '10%', marginTop:'-2%'}}>
            <SearchButton />
          </div>
          {/* tabel database*/}
          <div style={{ marginTop: '5%',marginBottom:'6%' }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Layanan</th>
                  <th>Harga</th>
                  <th>Durasi</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Cuci Kilat</td>
                  <td>Rp 20.000</td>
                  <td>1 hari</td>
                  <td>
                    <Button variant="success">Add</Button>
                    <Button variant="primary" className="ml-2">Edit</Button>
                    <Button variant="danger" className="ml-2">Delete</Button>
                  </td>
                </tr> 
            <tr>
              <td>2</td>
              <td>Setrika Kilat</td>
              <td>Rp 50.000</td>
              <td>1 hari</td>
              <td>
                <Button variant="success">Add</Button>
                <Button variant="primary" className="ml-2">Edit</Button>
                <Button variant="danger" className="ml-2">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Cuci Kilat</td>
              <td>Rp 150.000</td>
              <td>3 hari</td>
              <td>
                <Button variant="success">Add</Button>
                <Button variant="primary" className="ml-2">Edit</Button>
                <Button variant="danger" className="ml-2">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Setrika Kilat</td>
              <td>Rp 100.000</td>
              <td>2 hari</td>
              <td>
                <Button variant="success">Add</Button>
                <Button variant="primary" className="ml-2">Edit</Button>
                <Button variant="danger" className="ml-2">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Cuci Kilat</td>
              <td>Rp 60.000</td>
              <td>1 hari</td>
              <td>
                <Button variant="success">Add</Button>
                <Button variant="primary" className="ml-2">Edit</Button>
                <Button variant="danger" className="ml-2">Delete</Button>
              </td>
              </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default MyComponent;
