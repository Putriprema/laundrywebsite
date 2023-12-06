/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import centang from "../assets/centang.png";

const SimpanKeranjang = () => {
  return (
    <>
    <Navbar />
    <div className='flex justify-center items-center pt-40 pb-20'>
      <Card style={{width: '50rem', height: '50vh', background: '#D9EAF4', border: 'none', boxShadow: '0px -3px 4px grey', paddingTop: '80px'}}>
      <img
                        style={{ width: "100px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",}}
                        src={centang}
                        alt=""
                      />
        <Card.Body>
          <Card.Title><h2>Pesanan anda sudah di tambahkan di keranjang</h2></Card.Title>
          <Card.Text className='px-32 pt-4'>
            Silahkan melakukan pembayaran
          </Card.Text>
          <Link to='/Payment'>
            <Button
              style={{ borderRadius: '20px', width: '20%' }}
              variant="primary"
            >
              Lanjutkan
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
   
    <div className='pt-20'>
      <Footer />
    </div>
  </>
);
}


export default SimpanKeranjang