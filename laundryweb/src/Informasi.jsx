/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from './data/Bloginfo';
import './Informasi.css';
import {Link} from 'react-router-dom';
import Footer from './components/Footer';
import Promobulan from './components/Promobulan'; 

function Informasi() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 
  return (
    <>
      <Navbar/>
      <div className='Headline' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '70px' }}>
        <h1 style={{ fontWeight: 'bold', fontSize:'24pt' }}>Temukan Informasi Yang Anda Cari Seputar Laundry</h1>
      </div>
      <div className='App'>
      <Slider {...settings}>
  {dataDigitalBestSeller.map((item) => (
    <div className='card' key={item.id}>
      <div className='card-top'>
        <img src={item.Img} alt={item.title}/>
        <h1>{item.title}</h1>
      </div>
      <div className='card-bottom'>
        <h3>{item.capt}</h3>
        <Link to={`/Artikel/${item.slug}`}>{item.category}</Link>

        {/* Tautan ke artikel kecuali untuk id: 2 dan id: 3 */}
        {/* {(item.id !== 2 && item.id !== 3) && (
          <Link to={`/Artikel${item.id}`}>{item.category}</Link>
        )} */}
        {/* Tautan ke artikel 2 hanya pada item dengan id: 2 */}
        {/* {item.id === 2 && (
          <Link to={`/Artikel2`}>{item.category}</Link>
        )} */}
        {/* Tautan khusus ke artikel 3 hanya pada item dengan id: 3 */}
        {/* {item.id === 3 && (
          <Link to={`/Artikel3`}>{item.category}</Link>
        )} */}
      </div>
    </div>
  ))}
</Slider>

      <Promobulan/>
      </div>
      <Footer/>
    </>
  );
}

export default Informasi;
