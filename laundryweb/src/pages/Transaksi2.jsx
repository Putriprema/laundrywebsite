/* eslint-disable no-unused-vars */
import React from "react";
import Navbar3 from "../components/Navbar3";
import Footer2 from "../components/Footer2";
import Button from "react-bootstrap/Button";
import Sidebar from "../components/Sidebar";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Transaksi2 = () => {
  return (
    <>
      <Navbar3 />
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{ width: "20%" }}>
          <Sidebar />
        </div>
        {/* Content */}
        <div style={{ width: "80%", marginTop: "10%" }}>
          {/* Form untuk nama */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              paddingBottom: "40px",
              paddingTop: "20px",
            }}
          >
            <label
              className="flex "
              style={{ paddingLeft: "1%", fontSize: "16pt" }}
            >
              Nama Layanan
            </label>
            <input
              style={{
                border: "1px solid",
                borderRadius: "10px",
                height: "40px",
              }}
              placeholder="Masukan Nama Layanan"
            />
          </div>
          {/* Form untuk alamat */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              paddingBottom: "40px",
              paddingTop: "20px",
            }}
          >
            <label
              className="flex justify-start"
              style={{ paddingLeft: "1%", fontSize: "16pt" }}
            >
              Harga
            </label>
            <input
              style={{
                border: "1px solid",
                borderRadius: "10px",
                height: "40px",
              }}
              placeholder="Masukan Harga"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              paddingBottom: "40px",
              paddingTop: "20px",
            }}
          >
            <label
              className="flex justify-start"
              style={{ paddingLeft: "1%", fontSize: "16pt" }}
            >
              Durasi
            </label>
            <input
              style={{
                border: "1px solid",
                borderRadius: "10px",
                height: "40px",
              }}
              placeholder="Masukan Durasi"
            />
          </div>
          {/* Form untuk transaksi */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              paddingBottom: "40px",
              paddingTop: "20px",
            }}
          ></div>
          <div style={{ display: "flex", marginLeft: "20%", marginTop: "3%" }}>
            <Button
              style={{
                backgroundColor: "red",
                width: "150px",
                height: "60px",
                marginRight: "3%",
                border: "none",
                fontSize: "16pt",
              }}
            >
              Kembali
            </Button>
            <Button
              style={{
                backgroundColor: "blue",
                width: "150px",
                height: "60px",
                fontSize: "16pt",
              }}
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Transaksi2;
