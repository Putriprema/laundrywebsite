/* eslint-disable no-unused-vars */
import React from "react";
import { Col } from "react-bootstrap";
import icon1 from "../assets/icon1.png";
import transaksi from "../assets/transaksi.png";
import "../pages/Dasboard.css";


const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <Col
        md={6}
        className="d-none d-md-block"
        style={{
          backgroundColor: "#327094",
          paddingTop: "375px",
          paddingBottom: "375px",
          minHeight: '101vh'
        }}
      >
      </Col>
      {/* End Sidebar */}
      
    </>
  );
};

export default Sidebar;
