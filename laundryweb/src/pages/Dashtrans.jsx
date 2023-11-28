/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar3 from '../components/Navbar3';
import Footer2 from '../components/Footer2';
import SearchButton from '../components/SearchButton';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import Sidebar from '../Sidebar';

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
          <h1>Transaksi</h1>
          <div style={{marginRight: '10%', marginTop:'-2%'}}>
            <SearchButton />
          </div>
          {/* tabel database*/}
          <div style={{ marginTop: '5%',marginBottom:'6%' }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>No Hp</th>
                  <th>Transaksi</th>
                  <th>Proses</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rahul</td>
                  <td>Bantul</td>
                  <td>0814353466</td>
                  <td>Cuci Kering</td>
                  <td>Setrika</td>
                  <td>
                    <Button variant="success">Add</Button>
                    <Button variant="primary" className="ml-2">Edit</Button>
                    <Button variant="danger" className="ml-2">Delete</Button>
                  </td>
                </tr> 
            <tr>
                  <td>2</td>
                  <td>Andi</td>
                  <td>Bantul</td>
                  <td>0814353466</td>
                  <td>Cuci Kering</td>
                  <td>Selesai</td>
                  <td>
                    <Button variant="success">Add</Button>
                    <Button variant="primary" className="ml-2">Edit</Button>
                    <Button variant="danger" className="ml-2">Delete</Button>
                  </td>
            </tr>
            <tr>
                  <td>3</td>
                  <td>Ayu</td>
                  <td>Bantul</td>
                  <td>0814353466</td>
                  <td>Cuci Kering</td>
                  <td>Cuci</td>
                  <td>
                    <Button variant="success">Add</Button>
                    <Button variant="primary" className="ml-2">Edit</Button>
                    <Button variant="danger" className="ml-2">Delete</Button>
                  </td>
            </tr>
            <tr>
                  <td>4</td>
                  <td>Mawar</td>
                  <td>Bantul</td>
                  <td>0814353466</td>
                  <td>Cuci Kering</td>
                  <td>Setrika</td>
                  <td>
                    <Button variant="success">Add</Button>
                    <Button variant="primary" className="ml-2">Edit</Button>
                    <Button variant="danger" className="ml-2">Delete</Button>
                  </td>
            </tr>
            <tr>
                  <td>5</td>
                  <td>Budi</td>
                  <td>Bantul</td>
                  <td>0814353466</td>
                  <td>Cuci Kering</td>
                  <td>Setrika</td>
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
