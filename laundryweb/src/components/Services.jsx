/* eslint-disable no-unused-vars */
import React from 'react';
import '../components/Service.css'; 
import logo from "../assets/logo.jpeg";
import putri from "../assets/putri.jpeg";
import arif from "../assets/arif.jpeg";
import kurniawan from "../assets/kurniawan.jpeg";
import wanda from "../assets/wanda.jpeg";
import ridho from "../assets/ridho.jpeg";
import farida from "../assets/farida.jpeg";

function Services() { 
  return (
    <>
    {/* baris ke 1 */}
    <section className='section-white' style={{ marginTop: '5%' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2 className='section-title'style={{fontSize:'27pt',fontWeight:'bold'}} >
             Anggota Tim Kami
            </h2>
            <p className='section-subtitle'style={{ marginTop: '3%', fontSize:'16pt' }}>
            Tim LaundryEasey, tim bersemangat yang bertekad untuk menghadirkan layanan laundry yang terjangkau, handal, dan nyaman bagi pelanggan kami.
            Setiap anggota tim kami berdedikasi untuk memberikan layanan yang berkualitas tinggi dan memastikan setiap pakaian Anda dirawat dengan baik.
            </p>
          </div>
          {/* ridho */}
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img src={ridho} className='item-img' alt="pict" />
            <h3>Ridho</h3>
            <div className='team-info'>
              <p> Hustler</p>
              <p>Bertanggung jawab untuk mengembangkan Laundryease dan Berkolaborasi dengan tim untuk memperbaiki atau mengembangkan produk dan layanan yang lebih baik sesuai dengan kebutuhan pasar</p>
              <ul className='team-icon'>
                  <li><a href='#' className='ig'><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/_neonea_/?hl=id' className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-email'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>

          {/* wanda */}
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img src={wanda} className='item-img' alt="pict" />
            <h3>Wanda</h3>
            <div className='team-info'>
              <p>Hipster</p>
              <p>Berkontribusi pada pengembangan produk laundryease yang unik dan menarik bagi pasar, membangun identitas merek , mencakup desain, estetika, dan fokus pada pengalaman pengguna yang inovatif</p>
              <ul className='team-icon'>
                  <li><a href='#' className='ig'><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/wndty__/' className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-email'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>

          {/* farida */}
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img src={farida} className='item-img' alt="pict" />
            <h3>Farida</h3>
            <div className='team-info'>
              <p>Hispter</p>
              <p>Berkontribusi pada pengembangan produk laundryease yang unik dan menarik bagi pasar, membangun identitas merek , mencakup desain, estetika, dan fokus pada pengalaman pengguna yang inovatif.</p>
              <ul className='team-icon'>
                  <li><a href='#' className='ig'><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/anisa27616' className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* baris ke 2 */}
    <section className='section-white'>
      <div className='container'>
        <div className='row'>
          {/* kurniawan */}
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img src={kurniawan} className='item-img' alt="pict" />
            <h3>Kurniawan</h3>
            <div className='team-info'>
              <p>Hacker</p>
              <p>Berkontribusi dalam pengembangan perangkat lunak, termasuk mengidentifikasi bug, menyusun kode, dan mengevaluasi keamanan sistem.
              Memastikan perlindungan data pengguna dengan menerapkan enkripsi yang kuat untuk data sensitif
              </p>
              <ul className='team-icon'>
                  <li><a href='#' className='ig'><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/wann.monn/' className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-email'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>

          {/* Putri */}
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img src={putri} className='item-img' alt="pict" />
            <h3>Putri</h3>
            <div className='team-info'>
              <p>Hacker</p>
              <p>Berkontribusi dalam pengembangan perangkat lunak, termasuk mengidentifikasi bug, menyusun kode, dan mengevaluasi keamanan sistem.
              Memastikan perlindungan data pengguna dengan menerapkan enkripsi yang kuat untuk data sensitif
              </p>
              <ul className='team-icon'>
                  <li><a href='' className='ig'><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-email'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/putriwirawaan/' className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>

          {/* Arif */}
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img src={arif} className='item-img' alt="pict" />
            <h3>Arif</h3>
            <div className='team-info'>
              <p>Head of SEO</p>
              <p>Berkontribusi dalam pengembangan perangkat lunak, termasuk mengidentifikasi bug, menyusun kode, dan mengevaluasi keamanan sistem.
              Memastikan perlindungan data pengguna dengan menerapkan enkripsi yang kuat untuk data sensitif</p>
              <ul className='team-icon'>
                  <li><a href='#' className='ig'><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-email'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/muhammad._arif_/' className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Services; 
