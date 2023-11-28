/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import vector from './assets/vector_login.png'
import { Link } from 'react-router-dom';

function LoginPelanggan() {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Form className='w-2/4'>
          <Form.Text>Selamat Datang di Laundry Ease</Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Kata Sandi</Form.Label>
            <Form.Control type="password" placeholder="Kata Sandi" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Text>Lupa Kata Sandi?</Form.Text>
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit">
              Masuk
            </Button>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Text>Belum Punya Akun? <Link to=""><span>Daftar</span></Link></Form.Text>
          </Form.Group>
        </Form>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', height: '89.1vh', background: '#C4DAE8'}} >
          {/* <img src={vector} alt="" /> */}
        </div>
      </div>
    </>
  );
}

export default LoginPelanggan;