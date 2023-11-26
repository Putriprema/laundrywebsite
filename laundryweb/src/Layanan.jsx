/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards'
import SearchButton from './components/SearchButton'
import new_cards from './assets/NewCards';


const Layanan = () => {
  return (
    <div>
      <Navbar />
      <SearchButton/>
      <h1 className="text-center" style={{ marginTop: "5%", color: 'black', fontSize: '24pt', fontWeight: 'bold' }}>Layanan Laundry yang Tersedia</h1>
      <div className='grid grid-cols-3 place-items-center gap-y-14 pt-20'>
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

      <Footer />
    </div>
  );
};

export default Layanan;