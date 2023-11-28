/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import vector from '../assets/vector_pelanggan.png'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Loginpelanggan() {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Form className='flex flex-col justify-center items-center w-1/2'>
          <div className='flex justify-start w-3/4 mb-20'>
            <h2>Selamat Datang di Laundry Ease</h2>
          </div>
          <div className='flex justify-start w-3/4 mb-10'>
            <h3>Masuk</h3>
          </div>
          <Form.Group style={{marginBottom: '12px', width: '75%'}} controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}} type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mt-4 mb-2 w-3/4" controlId="formBasicPassword">
            <Form.Label>Kata Sandi</Form.Label>
            <Form.Control style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}} type="password" placeholder="Kata Sandi" />
          </Form.Group>
          <Form.Group className="flex justify-end mb-3 w-3/4" controlId="formBasicPassword">
            <Link style={{textDecoration: 'none'}} to='/'><p style={{color: 'black'}}>Lupa Kata Sandi?</p></Link>
          </Form.Group>
          <Form.Group>
            <Link to='/'><Button style={{padding: '8px 35px', borderRadius: '13px', boxShadow: '1px 3px 4px grey', marginBottom: '20px'}} variant="primary" type="submit">
              Masuk
            </Button></Link>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <p>Belum Punya Akun? <Link style={{textDecoration: 'none'}} to="/Sign-up-pelanggan"><span style={{color: 'black'}}>Daftar</span></Link></p>
          </Form.Group>
        </Form>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', height: '130vh', background: '#C4DAE8'}} >
          <img src={vector} alt="image" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Loginpelanggan;