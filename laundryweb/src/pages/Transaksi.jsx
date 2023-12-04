/* eslint-disable no-unused-vars */
import React from "react";
import Navbar3 from "../components/Navbar3";
import Footer2 from "../components/Footer2";
import Button from "react-bootstrap/Button";
import Sidebar from "../components/Sidebar";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"; // tambahkan import Form

const Transaksi = () => {
  return (
    <>
      <Navbar3 />
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{ width: "20%" }}>
          <Sidebar />
        </div>
        {/* Content */}
        <div style={{ width: "80%" }}>
          <Card style={{ padding: "20px" }}>
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
                Nama
              </label>
              <input
                style={{
                  border: "1px solid",
                  borderRadius: "10px",
                  height: "40px",
                }}
                placeholder="Masukan Nama"
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
                Alamat
              </label>
              <input
                style={{
                  border: "1px solid",
                  borderRadius: "10px",
                  height: "40px",
                }}
                placeholder="Masukan Alamat"
              />
            </div>
            {/* Form untuk nomor telepon */}
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
                No. Telephone
              </label>
              <input
                style={{
                  border: "1px solid",
                  borderRadius: "10px",
                  height: "40px",
                }}
                placeholder="Masukan No. Telephone"
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
            >
              <label
                className="flex justify-start"
                style={{ paddingLeft: "1%", fontSize: "16pt" }}
              >
                Transaksi
              </label>
              <input
                style={{
                  border: "1px solid",
                  borderRadius: "10px",
                  height: "40px",
                }}
                placeholder="Masukan Transaksi"
              />
            </div>
            {/* Progress */}
            <h1
              style={{
                marginLeft: "1%",
                textAlign: "left",
                fontSize: "16pt",
                marginBottom: "3%",
              }}
            >
              Progres
            </h1>
            <Form.Group className="flex mb-5 w-3/4" controlId="formBasicCheck">
              <Form.Check
                type="checkbox"
                style={{ color: "black", fontSize: "16pt" }}
                label="Cuci"
              />
            </Form.Group>
            <Form.Group className="flex mb-5 w-3/4" controlId="formBasicCheck">
              <Form.Check
                type="checkbox"
                label="Setrika"
                style={{ fontSize: "16pt" }}
              />
            </Form.Group>
            <Form.Group className="flex mb-5 w-3/4" controlId="formBasicCheck">
              <Form.Check
                type="checkbox"
                label="Selesai"
                style={{ fontSize: "16pt" }}
              />
            </Form.Group>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                marginRight: "20%",
                marginBottom: "3%",
              }}
            >
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
          </Card>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Transaksi;
