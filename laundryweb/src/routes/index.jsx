import {Routes, Route} from 'react-router-dom';
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation

import PublicRoutes from './PublicRoutes';
import AuthRoutes from './AuthRoutes';
import Home from "../pages/Home";
import Blog from '../pages/Blog'
import Layanan from '../pages/Layanan';
import Informasi from '../pages/Informasi';
import FAQ from '../pages/FAQ';
import TentangKami from '../pages/TentangKami';
import Notifikasi from '../pages/Notifikasi';
import LoginOptions from '../pages/LoginsOption'
import Artikel1 from '../pages/Artikel1';
import Artikel2 from '../pages/Artikel2';
import Artikel3 from '../pages/Artikel3';
import Artikel from "../pages/Artikel";
import Pelanggan from "../pages/auth/auth-form";
import Loginmitra from "../pages/Loginmitra";
import Signupmitra from "../pages/Signupmitra";
import Pemulihan from '../pages/Pemulihan';
import Toko from '../pages/Toko';
import Dash from "../pages/Dash";
import Dashtrans from "../pages/Dashtrans";
import Newpass from "../pages/Newpass";
import Newpassm from "../pages/Newpassm";
import Transaksi from "../pages/Transaksi";
import Transaksi2 from "../pages/Transaksi2";
import Payment from '../Payment';
import SimpanKeranjang from '../pages/SimpanKeranjang';
import NotFound from '../pages/page404';

const Routing = () => {
    const token = localStorage.getItem('Authorization');
    const isLoggin = token === null ? false : true;
    return (
        <Routes>
            {/* kalo ada eror yang ga keliatan pagenya itu krn /homenya ygn belum ke isi/ atau ke refresh  */}
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path="*" element={<NotFound />}/>
            {/* Pubclic Routes */}
            <Route element={<PublicRoutes isLoggin={isLoggin} />}>
                <Route path="/login-options" element={<LoginOptions />}/>
                <Route path='/regis-login-pelanggan' element={<Pelanggan/>}></Route>
                <Route path='/Login-mitra' element={<Loginmitra/>}></Route>
                <Route path='/Sign-up-mitra' element={<Signupmitra/>}></Route>
                <Route path='/Pemulihan' element={<Pemulihan/>}></Route>
            </Route>
            {/* Private Routes */}
            {/* <Route element={<AuthRoutes isLoggin={isLoggin} />}>  */}
            {/* syntax di atas untuk membatasi akses menu navbar, kecuali beranda, user harus login terlebih dahulu untuk bisa mengakses menu navbar yang lain */}
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/informasi' element={<Informasi/>}></Route>
                <Route path='/faq' element={<FAQ/>}></Route>
                <Route path='/layanan' element={<Layanan/>}></Route>
                <Route path='/tentang-kami' element={<TentangKami/>}></Route>
                <Route path='/notifikasi' element={<Notifikasi/>}></Route>
                <Route path='/Toko/:url' element={<Toko/>}></Route>
                <Route path='/artikel/:slug' element={<Artikel/>}></Route>
                <Route path='/Artikel1' element={<Artikel1/>}></Route>
                <Route path='/Artikel2' element={<Artikel2/>}></Route>
                <Route path='/Artikel3' element={<Artikel3/>}></Route>
                <Route path='/Dash' element={<Dash/>}></Route>
                <Route path='/Dashtrans' element={<Dashtrans/>}></Route>
                <Route path='/Newpass' element={<Newpass/>}></Route>
                <Route path='/Newpassm' element={<Newpassm/>}></Route>
                <Route path='/Transaksi' element={<Transaksi/>}></Route>
                <Route path='/Transaksi2' element={<Transaksi2/>}></Route>
                <Route path='/payment' element={<Payment/>}></Route>
                <Route path='/simpanKeranjang' element={<SimpanKeranjang/>}></Route>
            {/* </Route> */}
        </Routes>
    );
};

export default Routing;