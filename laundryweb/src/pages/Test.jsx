/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Test (){
    
    const [getNavbarValue, setNavbarValue] = useState("");

    const changeNavbarValue = () => {
        setNavbarValue("Profile");
    };

  return (
    <>
        <Navbar navValue={getNavbarValue}/>
        <h1>halo cuk</h1>
        <Button onClick={() => changeNavbarValue ()}>hai aku sapa cuk?</Button>
        </>
  )
}

export default Test;