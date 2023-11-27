import React from "react";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  let Links = [
    { name: "Beranda", link: "/home" },
    {
      name: "Artikel",
      link: "/blog",
      dropdown: [
        { subName: "Informasi", subLink: "/Informasi" },
        { subName: "FA&Q", subLink: "/FAQ" },
      ],
    },
    { name: "Layanan", link: "/layanan" },
    { name: "Tentang Kami", link: "/tentangkami" },
  ];

  return (
    <Navbar
      expand="lg"
      style={{ color: "white", backgroundColor: "#327094", height: "100px" }}
    >
      <Container fluid>
        <div className="flex items-center cursor-pointer font-[poppins] text-white">
          <img
            src={logo}
            alt="Logo"
            className="h-16 mr-2"
            style={{ height: "150px", marginLeft: "30px" }}
          />
        </div>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="ml-auto" style={{ gap: "40px", fontSize: "16pt" }}>
            {Links.map((link) => (
              <React.Fragment key={link.name}>
                {link.dropdown ? (
                  <NavDropdown
                    title={link.name}
                    id={link.name}
                    menuVariant="primary"
                    style={{ color: "white" }} // properti style untuk NavDropdown
                  >
                    {link.dropdown.map((subLink) => (
                      <NavDropdown.Item
                        key={subLink.subName}
                        href={subLink.subLink}
                        style={{ color: "black" }} // Ubah warna teks F&aQ menjadi hitam
                      >
                        {subLink.subName}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    href={link.link}
                    className="text-white navbar-link"
                    style={{ color: "black", transition: "color 0.3s" }} // Ubah warna teks Layanan menjadi hitam
                    onMouseEnter={(e) => {
                      e.target.style.color = "cyan";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "white";
                    }}
                  >
                    {link.name}
                  </Nav.Link>
                )}
              </React.Fragment>
            ))}
            <Nav.Link className="text-white">
              <ion-icon
                name="notifications-outline"
                style={{ fontSize: "24pt" }}
              ></ion-icon>
            </Nav.Link>
            <Link to="/Loginpelangganmintra">
              <Button
                variant="outline-info"
                className="ml-2 text-white"
                style={{ marginRight: "20px", marginTop:'6%', borderColor: "white" }}
              >
                Masuk
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
