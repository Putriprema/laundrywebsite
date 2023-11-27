/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import Home from './Home'
import Blog from './Blog'
import Layanan from './Layanan';
import Informasi from './informasi';
import FAQ from './FAQ';
import TentangKami from './TentangKami';
import Artikel1 from './Artikel1';
import Artikel2 from './Artikel2';
import Artikel3 from './Artikel3';
import Artikel from "./Artikel";
import Loginpelangganmintra from "./Loginpelangganmintra";
import Login from "./Login";
import Dash from "./Dash";
import Dashtrans from "./Dashtrans";


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
        <Route path='/TentangKami' element={<TentangKami/>}></Route>
        <Route path='/artikel/:slug' element={<Artikel/>}></Route>
        <Route path='/Artikel1' element={<Artikel1/>}></Route>
        <Route path='/Artikel2' element={<Artikel2/>}></Route>
        <Route path='/Artikel3' element={<Artikel3/>}></Route>
        <Route path='/Loginpelangganmintra' element={<Loginpelangganmintra/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Dash' element={<Dash/>}></Route>
        <Route path='/Dashtrans' element={<Dashtrans/>}></Route>
      </Routes>
    </Router>
  );
};
export default App;