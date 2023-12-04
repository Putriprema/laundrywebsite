/* eslint-disable no-unused-vars */
import React, { useState }from 'react'
import {Box, TextField} from '@mui/material'
import { Button } from 'react-bootstrap';
import axios from 'axios'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Payment = () => {
    const [name, setName] = useState("");
    const [order_id, setOrder_id] = useState("");
    const [total, setTotal] = useState(0);



    const process = async () => {
        const data = {
            name: name,
            order_id: order_id,
            total: total
        }

        const config = {
          Headers: {
            "Content-Type" : "application/json"
          }
        }

        const response = await axios.post("http://localhost:1000/api/payment/process-transaction", data, config)

        console.log(response)
        
    }

  return (
    <>
    <Navbar/>
    <Box sx={{display: 'flex', flexDirection:'column', height:'100vh', width: '190vh', p: 4, marginBottom:'5%', fontSize:'16pt' }}>Silahkan di isi sesuai nominal pembayaran
    <TextField type="text" label='nama' value={name} onChange={(e) => setName(e.target.value)} sx={{mb: 2}}/>
    <TextField type="text" label="order ID"  value={order_id} onChange={(e) => setOrder_id(e.target.value)} sx={{mb: 2}}/>
    <TextField type="number" label='Total' value={total} onChange={(e) => setTotal(e.target.value)}  />
    <Box>
        <Button onClick={process} style={{ marginTop:'2%', background: "#3579F6", border: "none", padding: "10px 25px"}}>Proses</Button>
        </Box>
    </Box>
    <Footer/>
    </>
  )
}


export default Payment