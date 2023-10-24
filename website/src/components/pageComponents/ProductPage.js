import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';



const ProductPage = () => {

  return (
    <>
<div id='featured' style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
                <h5 style={{ fontWeight: '200', letterSpacing: '1.5px' }}>JEC Knives</h5>
                <h3 style={{ fontWeight: '300', letterSpacing: '1.5px' }}>ALL SHOP SUPPLY</h3>
            </div>


      <div className="d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-4 g-5 gx-md-5">
          <div className="col">
            <div className="card h-100" style={{ width: '20rem', backgroundColor: 'black' }}>
              <img src="https://via.placeholder.com/200x100" className="card-img-top mx-auto d-block" alt="product" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0' }} />
              <div className="card-body text-center" style={{ marginTop: '20px' }}>
                <h5 className="card-title text-white">Product Name</h5>
                <div className="card-rating">
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                </div>
                <p className="card-text text-white" style={{ marginTop: '10px' }}>$10.00</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100" style={{ width: '20rem', backgroundColor: 'black' }}>
              <img src="https://via.placeholder.com/200x100" className="card-img-top mx-auto d-block" alt="product" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0' }} />
              <div className="card-body text-center" style={{ marginTop: '20px' }}>
                <h5 className="card-title text-white">Product Name</h5>
                <div className="card-rating">
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                </div>
                <p className="card-text text-white" style={{ marginTop: '10px' }}>$10.00</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100" style={{ width: '20rem', backgroundColor: 'black' }}>
              <img src="https://via.placeholder.com/200x100" className="card-img-top mx-auto d-block" alt="product" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0' }} />
              <div className="card-body text-center" style={{ marginTop: '20px' }}>
                <h5 className="card-title text-white">Product Name</h5>
                <div className="card-rating">
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                </div>
                <p className="card-text text-white" style={{ marginTop: '10px' }}>$10.00</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100" style={{ width: '20rem', backgroundColor: 'black' }}>
              <img src="https://via.placeholder.com/200x100" className="card-img-top mx-auto d-block" alt="product" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0' }} />
              <div className="card-body text-center" style={{ marginTop: '20px' }}>
                <h5 className="card-title text-white">Product Name</h5>
                <div className="card-rating">
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                  <StarBorder sx={{ color: '#fff' }} />
                </div>
                <p className="card-text text-white" style={{ marginTop: '10px' }}>$10.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
