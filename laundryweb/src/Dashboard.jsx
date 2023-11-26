/* eslint-disable no-unused-vars */
import React from 'react';
import { Col } from 'react-bootstrap';
import Navbar2 from './components/Navbar2';
import Footer2 from './components/Footer2';
import icon1 from './assets/icon1.png';
import transaksi from './assets/transaksi.png';  
import './Dasboard.css';

const Dashboard = () => {
    return (
        <>
          <Navbar2 />
          {/* Sidebar */}
          <Col md={2} className="d-none d-md-block" style={{ backgroundColor: '#327094', paddingTop: '375px', paddingBottom: '375px' }}>
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-light active" href="#">
                    <img src={icon1} alt="Layanan" className="icon" /> Layanan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="setting.html">
                    <img src={transaksi} alt="Transaksi" className="icon" /> Transaksi
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          {/* End Sidebar */}
          <Footer2 />
        </>
      );
    };
    
    export default Dashboard;

