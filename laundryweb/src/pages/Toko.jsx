// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import SearchButton from '../components/SearchButton'
import Footer from '../components/Footer'
import { Accordion, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import plus from '../assets/plus_circle.png'

const Toko = () => {
  return (
    <div>
        <Navbar />
        <SearchButton data-aos="fade-up"/>
        <div className='mx-20'>
            <div style={{boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.2)', borderRadius: '10px', border: 'none'}} className='flex justify-between mt-10'>
                <div className='flex'>
                    <div style={{background: 'grey', width: '150px',height: '150px' , margin: '10px', objectFit: 'cover'}}>
                        <img style={{width: '200px'}} src={logo} alt="" />
                    </div>
                    <div className='flex flex-col justify-between pl-5'>
                        <div className='flex pt-4'>
                            <h2>Den Gobel</h2>
                            <img src='' alt="" />
                        </div>
                        <div>
                            <p>Bantul</p>
                        </div>
                        <div className='flex justify-between items-center pb-3'>
                            <p style={{background: '#D23D3D', color: 'white', width: '60px', padding: '6px', borderRadius: '5px'}}>TUTUP</p>
                            <Link to='/'><Button style={{background: '#D9EAF4', border: 'none', color: 'black', margin: '0 15px 12px'}}>Info Outlet</Button></Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '15px 40px'}}>
                            <h4 className='mb-4'>Rating Outlet</h4>
                            <p><b>0.0</b></p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '15px 40px'}}>
                            <h4 className='mb-4'>Mulai Dari</h4>
                            <p><b>Rp5.000</b></p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '15px 40px'}}>
                            <h4 className='mb-4'>Transaksi Berhasil</h4>
                            <p><b>0 </b>Transaksi</p>
                        </div>
                    </div>
                    <div>
                        <h5 className='ml-10 mb-3'>Layanan Outlet: <span className='ml-5'>Kurir Outlet</span></h5>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between',  marginTop: '30px'}}>
                <div style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', borderRadius: '10px', width: '57%'}}>
                    <h3 className='pl-5 pb-5'>Daftar Layanan</h3>
                    <Accordion>
                        <Accordion.Item style={{border: 'none'}} eventKey="0">
                            <Accordion.Header><h5>Cuci Kering - 3 jam</h5></Accordion.Header>
                            <Accordion.Body>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 3 jam</h5>
                                        <p>Rp8.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 4 jam</h5>
                                        <p>Rp6.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 6 jam</h5>
                                        <p>Rp5.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 24 jam</h5>
                                        <p>Rp3.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item style={{border: 'none'}} eventKey="1">
                            <Accordion.Header><h5>Cuci Setrika - 3 Hari</h5></Accordion.Header>
                            <Accordion.Body>
                            <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 3 jam</h5>
                                        <p>Rp8.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 4 jam</h5>
                                        <p>Rp6.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 6 jam</h5>
                                        <p>Rp5.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 24 jam</h5>
                                        <p>Rp3.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item style={{border: 'none'}} eventKey="2">
                            <Accordion.Header><h5>Cuci Kering - 1 Hari</h5></Accordion.Header>
                            <Accordion.Body>
                            <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 3 jam</h5>
                                        <p>Rp8.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 4 jam</h5>
                                        <p>Rp6.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 6 jam</h5>
                                        <p>Rp5.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h5>Cuci Kering 24 jam</h5>
                                        <p>Rp3.000/kg</p>
                                    </div>
                                    <div>
                                        <img style={{width: '25px'}} src={plus} alt="" />
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div style={{background: 'blue', width: '40%'}}>
                    <div style={{background: 'green'}}>
                        <h3>Hello</h3>
                    </div>
                    <div style={{background: 'yellow'}}>
                        <h3>Hello</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-20'>
            <Footer />
        </div>
    </div>
  )
}

export default Toko