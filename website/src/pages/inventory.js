import react from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/uiComponents/productCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function Inventory() {

    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Define an async function to fetch products
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/allProducts'); // Adjust the URL as needed
                setProducts(response.data); // Update the products state with the fetched data
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts(); // Call the function to fetch products
    }, []);

    const handleDeleteClick = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/Products/${id}`);
            // Remove the deleted product from the local state to update the view
            setProducts(products.filter((product) => product._id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleUpdateClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleUpdateSubmit = async () => {
        try {
            await axios.put(`http://localhost:3001/api/Products/${selectedProduct._id}`, selectedProduct);
            // Update the local state with the modified product
            const updatedProducts = products.map((product) =>
                product._id === selectedProduct._id ? selectedProduct : product
            );
            setProducts(updatedProducts);
            handleCloseModal();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    useEffect(() => {
        if (showModal) {
            // Handle any logic needed when the modal is shown
        }
    }, [showModal]);


    return (
        <>

            <form  style={{ border: "2px black solid", margin: 'auto', borderRadius: '5px', width: "50%" }} className="container">
                <div className="form">
                    <h1 style={{ color: "black" }} >Products</h1>
                    <div >
                        <input
                            type="text"
                            placeholder="Product Name"
                           
                        />
                        <input
                            type="number"
                            placeholder="Price"
                           
                        />
                        <input
                            type="number"
                            placeholder="Stock"
                            
                        />
                        <input
                            type="text"
                            placeholder="Category"
                         
                        />
                        <button type='submit'>Add Product</button>
                        <button >Update Product</button>
                        <button >Delete Product</button>
                    </div>
                </div>
            </form >


            <div style={{ width: '80%', position: 'relative', margin: 'auto' }}>
                <table class="table">

                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>STOCK</th>
                    <th>CATEGORY</th>
                    <th>EDIT</th>


                    <tr>
                        <td id='name'></td>
                        <td id='price'></td>
                        <td id='stock'></td>
                        <td id='category'></td>
                        <td><a className="btn btn-outline-light btn-lg" role="button" >Update</a>
                            <a className="btn btn-outline-light btn-lg" role="button" >Delete</a>
                        </td>
                    </tr>



                </table>
            </div>

            {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <Row className='mb-3'>
                  <Col>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder={selectedProduct.name} />
                  </Col>
                </Row>

                <Row className='mb-3'>
                  <Col>
                    <label htmlFor="make">Car Make</label>
                    <input type="text" className="form-control" id="make" name="make" placeholder={selectedProduct.make} />
                  </Col>

                  <Col>
                    <label htmlFor="model">Car Model</label>
                    <input type="text" className="form-control" id="model" name="model" placeholder={selectedProduct.model} />
                  </Col>
                </Row>

                <Row className='mb-3'>
                  <Col>
                    <label htmlFor="year">Car Year</label>
                    <input type="text" className="form-control" id="year" name="year" placeholder={selectedProduct.year} />
                  </Col>

                  <Col>
                    <label htmlFor="chase">Car Chase</label>
                    <input type="text" className="form-control" id="chase" name="chase" placeholder={selectedProduct.chasisNum} />
                  </Col>
                </Row>

                <Row className='mb-3'>
                  <Col>
                    <label htmlFor="stock">Stock</label>
                    <input type="text" className="form-control" id="stock" name="stock" placeholder={selectedProduct.stock} />
                  </Col>
                  <Col>
                    <label htmlFor="stock">Price</label>
                    <input type="text" className="form-control" id="stock" name="stock" placeholder={selectedProduct.price} />
                  </Col>
                </Row>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary"onClick={handleUpdateSubmit}>Save Changes</Button>
          </Modal.Footer>
        </Modal >
      )
      }
        </>
    )

}

export default Inventory;