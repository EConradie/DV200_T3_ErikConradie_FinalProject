import react from 'react';
import '../App.css';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';


function Orders() {

    return (

        <header style={{ paddingLeft: 0 }}>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 500 }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-5'>Heading</h1>
                            <h4 className='mb-5'>Subheading</h4>
                            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                Call to action
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );

}

export default Orders;