/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layanan from './pages/Layanan';
import Informasi from './pages/Informasi';
import FAQ from './pages/FAQ';
import TentangKami from './pages/TentangKami';
import Notifikasi from './pages/Notifikasi';
import Artikel1 from './pages/Artikel1';
import Artikel2 from './pages/Artikel2';
import Artikel3 from './pages/Artikel3';
import Artikel from "./pages/Artikel";
import Loginoption from "./pages/Loginoption";
import Loginpelanggan from "./pages/Loginpelanggan";
import Loginmitra from "./pages/Loginmitra";
import Signuppelanggan from "./pages/Signuppelaggan";
import Signupmitra from "./pages/Signupmitra";
import Pemulihan from './pages/Pemulihan';
import Toko from './pages/Toko';
import Dash from "./pages/Dash";
import Dashtrans from "./pages/Dashtrans";
import Newpass from "./pages/Newpass";
import Newpassm from "./pages/Newpassm";
import Transaksi from "./pages/Transaksi";
import Transaksi2 from "./pages/Transaksi2";
import Payment from "./Payment";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* kalo ada eror yang ga keliatan pagenya itu krn /homenya ygn belum ke isi/ atau ke refresh :( */}
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/Informasi' element={<Informasi/>}></Route>
        <Route path='/FAQ' element={<FAQ/>}></Route>
        <Route path='/Layanan' element={<Layanan/>}></Route>
        <Route path='/Toko/:url' element={<Toko/>}></Route>
        <Route path='/TentangKami' element={<TentangKami/>}></Route>
        <Route path='/Notifikasi' element={<Notifikasi/>}></Route>
        <Route path='/artikel/:slug' element={<Artikel/>}></Route>
        <Route path='/Artikel1' element={<Artikel1/>}></Route>
        <Route path='/Artikel2' element={<Artikel2/>}></Route>
        <Route path='/Artikel3' element={<Artikel3/>}></Route>
        <Route path='/Login-option' element={<Loginoption/>}></Route>
        <Route path='/Login-pelanggan' element={<Loginpelanggan/>}></Route>
        <Route path='/Login-mitra' element={<Loginmitra/>}></Route>
        <Route path='/Sign-up-pelanggan' element={<Signuppelanggan/>}></Route>
        <Route path='/Sign-up-mitra' element={<Signupmitra/>}></Route>
        <Route path='/Pemulihan' element={<Pemulihan/>}></Route>
        <Route path='/Dash' element={<Dash/>}></Route>
        <Route path='/Dashtrans' element={<Dashtrans/>}></Route>
        <Route path='/Newpass' element={<Newpass/>}></Route>
        <Route path='/Newpassm' element={<Newpassm/>}></Route>
        <Route path='/Transaksi' element={<Transaksi/>}></Route>
        <Route path='/Transaksi2' element={<Transaksi2/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
      </Routes>
    </Router>
  );
};
export default App;