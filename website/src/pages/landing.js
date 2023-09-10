import react from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiFillStar } from 'react-icons/ai';


function Landing() {

    return (
        <>

            <div className='p-5 bg-image' style={{ backgroundImage: "url(https://alecsteeleshop.com/cdn/shop/files/P1077354_edited_2000x.jpg?v=1664581845)", width: '100%', backgroundPosition: 'bottom center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className='mask' style={{}}>
                    <div className='d-flex'>
                        <div className='text-white' style={{ marginTop: '400px' }}>
                            <h6 style={{ fontWeight: 'lighter' }} className='mb-3'> KNIFEMAKING NEEDS</h6>
                            <h1 style={{ fontWeight: '300', letterSpacing: '3px' }} className='mb-3'>KNIVES - EQUIPMENT - MATERIALS</h1>
                            <a style={{ fontWeight: 'lighter' }} className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                LEVEL UP NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id='featured' style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
                <h5 style={{ fontWeight: '200', letterSpacing: '1.5px' }}>FEATURED</h5>
                <h3 style={{ fontWeight: '300', letterSpacing: '1.5px' }}>TOP TOOLING FOR YOUR WORKSHOP NEEDS</h3>
            </div>

            <div style={{ width: "80%", margin: 'auto', }}>


                <CardGroup>

                    <Card border="black" style={{ margin: '30px', textAlign: 'center', backgroundColor: 'black' }}>
                        <Card.Img variant="top" src="https://alecsteeleshop.com/cdn/shop/products/DSC_7300_600x.jpg?v=1612549582" />
                        <Card.Body>
                            <Card.Title style={{ color: 'white', fontWeight: '200', letterSpacing: '1.5px' }}>SMITHING HAMMER</Card.Title>
                            <Card.Text style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>
                                <h4 style={{ color: '#F89520' }}> <AiFillStar>Hi</AiFillStar><AiFillStar>Hi Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar></h4>
                                <h4 style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>R900</h4>
                                <a style={{ marginTop: '5px', fontWeight: 'lighter' }} className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                    CHECK OUT</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border="black" style={{ margin: '30px', textAlign: 'center', backgroundColor: 'black' }}>
                        <Card.Img variant="top" src="https://alecsteeleshop.com/cdn/shop/products/DSC_1826steel_600x.jpg?v=1622832752" />
                        <Card.Body>
                            <Card.Title style={{ color: 'white', fontWeight: '200', letterSpacing: '1.5px' }}>FILE GUIDE</Card.Title>
                            <Card.Text style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>
                                <h4 style={{ color: '#F89520' }}> <AiFillStar>Hi</AiFillStar><AiFillStar>Hi Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar></h4>
                                <h4 style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>R750</h4>
                                <a style={{ marginTop: '5px', fontWeight: 'lighter' }} className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                    CHECK OUT</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border="black" style={{ margin: '30px', textAlign: 'center', backgroundColor: 'black' }}>
                        <Card.Img variant="top" src="https://alecsteeleshop.com/cdn/shop/products/Rhino_Wet_Sandpaper-2_400x.jpg?v=1573663203" />
                        <Card.Body>
                            <Card.Title style={{ color: 'white', fontWeight: '200', letterSpacing: '1.5px' }}>GRINDER</Card.Title>
                            <Card.Text style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>
                                <h4 style={{ color: '#F89520' }}> <AiFillStar>Hi</AiFillStar><AiFillStar>Hi Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar></h4>
                                <h4 style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>R25000</h4>
                                <a style={{ marginTop: '5px', fontWeight: 'lighter' }} className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                    CHECK OUT</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardGroup>


            </div>

            <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
                <h5 style={{ fontWeight: '200', letterSpacing: '1.5px' }}>SPECIALS</h5>
                <h3 style={{ fontWeight: '300', letterSpacing: '1.5px' }}>ONLY THE BEST PRICES</h3>
            </div>

            <div style={{ width: "80%", margin: 'auto', }}>


                <CardGroup>

                    <Card border="black" style={{ margin: '30px', textAlign: 'center', backgroundColor: 'black' }}>
                        <Card.Img variant="top" src="https://alecsteeleshop.com/cdn/shop/products/DSC_7300_600x.jpg?v=1612549582" />
                        <Card.Body>
                            <Card.Title style={{ color: 'white', fontWeight: '200', letterSpacing: '1.5px' }}>SMITHING HAMMER</Card.Title>
                            <Card.Text style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>
                                <h4 style={{ color: '#F89520' }}> <AiFillStar>Hi</AiFillStar><AiFillStar>Hi Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar></h4>
                                <h4 style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>R900</h4>
                                <a style={{ marginTop: '5px', fontWeight: 'lighter' }} className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                    CHECK OUT</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border="black" style={{ margin: '30px', textAlign: 'center', backgroundColor: 'black' }}>
                        <Card.Img variant="top" src="https://alecsteeleshop.com/cdn/shop/products/DSC_1826steel_600x.jpg?v=1622832752" />
                        <Card.Body>
                            <Card.Title style={{ color: 'white', fontWeight: '200', letterSpacing: '1.5px' }}>FILE GUIDE</Card.Title>
                            <Card.Text style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>
                                <h4 style={{ color: '#F89520' }}> <AiFillStar>Hi</AiFillStar><AiFillStar>Hi Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar></h4>
                                <h4 style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>R750</h4>
                                <a style={{ marginTop: '5px', fontWeight: 'lighter' }} className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                    CHECK OUT</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card border="black" style={{ margin: '30px', textAlign: 'center', backgroundColor: 'black' }}>
                        <Card.Img variant="top" src="https://alecsteeleshop.com/cdn/shop/products/Rhino_Wet_Sandpaper-2_400x.jpg?v=1573663203" />
                        <Card.Body>
                            <Card.Title style={{ color: 'white', fontWeight: '200', letterSpacing: '1.5px' }}>GRINDER</Card.Title>
                            <Card.Text style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>
                                <h4 style={{ color: '#F89520' }}> <AiFillStar>Hi</AiFillStar><AiFillStar>Hi Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar><AiFillStar>Hi</AiFillStar></h4>
                                <h4 style={{ color: 'white', fontWeight: '400', letterSpacing: '1.5px' }}>R25000</h4>
                                <a style={{ marginTop: '5px', fontWeight: 'lighter' }} className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                    CHECK OUT</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardGroup>


            </div>


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

export default Landing;