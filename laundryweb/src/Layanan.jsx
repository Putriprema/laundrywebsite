/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from 'react-bootstrap/Button';
import Cards from './components/Cards'
import SearchButton from './components/SearchButton'

const Layanan = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <Navbar />
      <SearchButton/>
      <h1 className="text-center" style={{ marginTop: "5%", color: 'black', fontSize: '24pt', fontWeight: 'bold' }}>Layanan Laundry yang Tersedia</h1>
      <Cards/>
      <Footer />
    </div>
  );
};

export default Layanan;