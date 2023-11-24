/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Logo from './assets/logo.jpeg';
import Footer from './components/Footer';
import Card from 'react-bootstrap/Card';
import Services from './components/Services';

const TentangKami = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="font-bold text-2x2" style={{ color: 'black', marginLeft: '5%', marginTop: '5%' }}>
          Laundry Ease
        </h1>
        <div className='d-flex justify-content-around' style={{ display: 'flex', alignItems: 'center', marginTop: '1%', fontSize: '18pt' }}>
          <p style={{ textAlign: 'justify', marginLeft: '5%', marginRight: '5%', flex: '1',  marginTop:'2%' }}>
          Laundry Ease adalah penyedia layanan laundry terpercaya yang tak hanya menawarkan cuci kering, cuci setrika, dan sebagainya. Melalui platform online yang mudah digunakan, kami tidak hanya mengambil dan membersihkan pakaian Anda dengan efisiensi tinggi, tetapi juga mengantarkannya kembali dengan kehandalan yang tak tertandingi. Dengan fokus pada kenyamanan pelanggan, kami berkomitmen untuk menjadi mitra yang dapat diandalkan dalam merawat pakaian Anda. Dari kebersihan hingga kenyamanan, kami berdedikasi untuk memberikan layanan berkualitas tinggi dengan kepuasan pelanggan sebagai prioritas utama kami. Kami melampaui sekadar mencuci dan menyetrika; kami berkomitmen untuk merawat pakaian Anda sebaik mungkin, memberikan ketenangan pikiran dan waktu luang tambahan untuk menikmati momen-momen penting dalam hidup Anda. Dalam dunia yang sibuk ini, percayakan pada kami untuk merawat pakaian Anda dengan cermat, memberikan hasil terbaik, dan membuat pengalaman laundry Anda lebih dari sekadar tugas rutin, tapi menjadi perawatan yang menyenangkan
          </p>
          <img
            src={Logo}
            alt="Logo Laundry Ease"
            style={{ width: '500px', height: 'auto', marginRight:'5%'}}
          />
        </div>

        {/* visi misi */}
        <div>
          <div className="d-flex justify-content-around" style={{ marginTop: "5%", }}>
          <h1 className="text-center flex justify-center items-center" >Visi</h1>
          <h1 className="text-center flex justify-center items-center" >Misi</h1>
          </div>
          {/* bagian card kelebihan kami */}
          <div className="d-flex justify-content-around" style={{ marginTop: "3%" }}>
            {/* Visi*/}
            <Card
              style={{
                width: "40rem",
                height: "30rem",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                borderRadius: "20px",
                border: '1px solid black'
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}>
              </div>
              <Card.Body style={{ textAlign: "justify", display: 'flex', justifyContent: 'center' }}>
                <Card.Title style={{ fontWeight: "normal", fontSize:'16pt', marginLeft:'3%', marginRight:'3%', marginTop:'6%' }}>
                Menjadi platform terdepan dalam industri laundry, menyediakan solusi yang inovatif, efisien, dan ramah lingkungan untuk memenuhi kebutuhan pelanggan, sambil mendorong pertumbuhan berkelanjutan bagi mitra bisnis kami.kami di Laundry Ease adalah menjadi platform terdepan dalam industri laundry. Kami berkomitmen menyediakan solusi inovatif, efisien, dan ramah lingkungan yang tidak hanya memenuhi kebutuhan pelanggan, tetapi juga memberikan nilai tambah bagi lingkungan sekitar. Dalam upaya kami untuk mencapai tujuan ini, kami tidak hanya berfokus pada pelayanan pelanggan yang superior
                </Card.Title>
              </Card.Body>
            </Card>

            {/* Misi*/}
            <Card
              style={{
                width: "40rem",
                height: "30rem",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                borderRadius: "20px",
                border: '1px solid black'
              }}>
              <div
                style={{
                  
                  justifyContent: "center",
                  marginTop: "20px",
                }}>
              </div>
              <Card.Body style={{ textAlign: "justify", display: 'flex', justifyContent: 'center' }}>
                <Card.Title style={{ fontWeight: "normal", fontSize:'16pt', marginLeft:'3%', marginRight:'3%', marginTop:'6%' }}>
                Memberikan pengalaman pelanggan terbaik melalui layanan laundry yang cepat, handal, dan hemat waktu, dengan fokus pada kepuasan pelanggan yang tinggi.Kami bertekad untuk menyediakan layanan laundry yang tidak hanya efisien dalam pengambilan dan pengantaran, tetapi juga andal dalam proses pencucian dan penanganan pakaian. Dengan menekankan efisiensi waktu, kami memahami betapa berharganya waktu pelanggan kami, dan kami berusaha memberikan layanan yang menghargai waktu mereka. 
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <Services/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TentangKami;
