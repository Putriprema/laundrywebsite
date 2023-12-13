import Routing from "./routes";


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
        <Route path='/simpanKeranjang' element={<SimpanKeranjang/>}></Route>
      </Routes>
    </Router>
  );

export default App;

// Routenya ku pindah ke folder routes, file index.jsx