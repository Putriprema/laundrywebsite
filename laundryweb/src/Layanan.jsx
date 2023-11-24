/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from 'react-bootstrap/Button';
import Cards from './components/Cards'
import SearchButton from './components/SearchButton'

import new_cards from './assets/NewCards';


const Layanan = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <Navbar />

      <SearchButton/>
      <h1 className="text-center" style={{ marginTop: "5%", color: 'black', fontSize: '24pt', fontWeight: 'bold' }}>Layanan Laundry yang Tersedia</h1>
      <Cards/>

      <div className='Search' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className="form-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Cari..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              width: '1500px',
              height: '50px',
              padding: '10px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              border: 'none',
              outline: 'none',
              borderRadius: '20px',
              marginRight: '10px',
              marginTop: '70px'
            }}
          />
          <Button className="ml-2 text-white" style={{ marginTop: '70px', width: '50px', height: '50px', backgroundColor: '#327094', transition: 'background-color 0.5s', boxShadow: '2px 2px 4px rgba(1, 1, 1, 1.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ion-icon name="search-outline" style={{ width: '20px', height: '20px', fontWeight: 'bold', display: 'block' }}></ion-icon>
          </Button>
        </div>
        <h1 className='py-5'>Layanan Laundry yang Tersedia</h1>
        <div className='grid grid-cols-3 gap-x-14 gap-y-20 place-items-center'>
          {new_cards.map(cards => (
            <Cards
              key={cards.id}
              image={cards.image}
              name={cards.name}
              locate={cards.locate}
              price={cards.price}
              transaction={cards.transaction}
              rate={cards.rate}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layanan;