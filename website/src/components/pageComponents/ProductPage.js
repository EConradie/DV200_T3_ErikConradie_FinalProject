import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const ProductPage = () => {

   
  return (
    <div>
        <Button variant="contained" size="small">Back To Home</Button>
        <h3>Available Stock: X Units</h3>
        <h1>ProductName</h1>
        <p>Product Description:</p>
        <p>Description Here</p>
        <h3>Variations In Stock</h3>
        <p>Green: X</p>
        <p>Red: X</p>
        <p>Blue: X</p>
    </div>
  )
}

export default ProductPage
