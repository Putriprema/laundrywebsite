/* eslint-disable no-unused-vars */
import React from "react";
import Card from "react-bootstrap/Card";
import toko_1 from "../assets/toko_1.png";
import stars from "../assets/stars.png";

function Cards() {
  return (
    <>
      <div className="container" style={{ marginTop: "5%" }}>
      <div className="row ">
          {/* First Row - Three Cards */}
          <div className="col-lg-4" style={{ marginBottom: "20px" }}>
            <Card
              style={{
                width: "22rem",
                marginTop: "5%",
                marginLeft: "5%",
                borderRadius: "5%",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              }}
            >
              <Card.Img variant="top" src={toko_1} />
              <Card.Body>
                <Card.Title style={{ width: "22rem", marginRight: "8%" }}>
                  <h3>
                    <b>Den Gebol</b>
                  </h3>
                </Card.Title>
                <Card.Text>
                  <div>
                    <p>2.3 km | Krapyak, Bantul</p>
                    <br />
                  </div>
                  <div className="flex justify-between">
                    <div className="text-center">
                      <h4>Harga Mulai</h4>
                      <h5>Rp5.000</h5>
                    </div>
                    <div className="text-center">
                      <h4>Transaksi</h4>
                      <h5>1</h5>
                    </div>
                  </div>
                  <br />
                  <div className="flex justify-end">
                    <img className="w-7 h-7" src={stars} alt="" />
                    <p className="pt-1">4.5</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
    </div>
    </div>
    </div>
    </>
  );
}

export default Cards;
