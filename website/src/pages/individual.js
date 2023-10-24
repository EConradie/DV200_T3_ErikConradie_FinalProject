import react from 'react';
import '../App.css';

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { AiFillStar } from 'react-icons/ai';



function Individual() {

    return (
        <>
        <Row className='mt-5'>
            <Col xs={7} >
                <img src="https://via.placeholder.com/200x100" alt="product" style={{ float: 'right', width: '60%', height: '400px', objectFit: 'cover', borderRadius: '0', marginRight: '20px' }} />
            </Col>
            <Col  xs={3}>
                <h1>Product Name</h1>
                <div className="card-rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <p className='mt-2' style={{borderBottom: '1px solid gray', height:'40px'}}>Price: $10.00</p>                
                <p>Description of product</p>
                <div className=" mb-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <Button variant="outline-secondary" size="sm" className="me-2">
                            -
                        </Button>
                        <span className="fs-5">1</span>
                        <Button variant="outline-secondary" size="sm" className="ms-2">
                            +
                        </Button>
                    </div>
                   
                </div>
                <Button variant="primary">Add to Cart</Button>
            </Col>
        </Row>

        <footer class="footer">
                <div class="footer-container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>COMPANY</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>GET HELP</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">shipping</a></li>
                                <li><a href="#">returns</a></li>
                                <li><a href="#">order status</a></li>
                                <li><a href="#">payment options</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>PRODUCTS</h4>
                            <ul>
                                <li><a href="#">Appointments</a></li>
                                <li><a href="#">Book Now</a></li>
                                <li><a href="#">Cancel</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>




        </>
    );

}

export default Individual;