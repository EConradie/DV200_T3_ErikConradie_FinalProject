import react from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/uiComponents/productCard';



function Inventory() {

    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productStock, setProductStock] = useState();
    const [productCategory, setProductCategory] = useState();

    const [products, setProducts] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);

    const addProduct = (e) => {

        let payload = {

            name: productName,
            price: productPrice,
            stock: productStock,
            category: productCategory

        }
        setUpdateProducts(true);

        axios.post('http://localhost:5000/api/newProduct', payload)
            .then()
            .catch()
        console.log(payload);

    }

    useEffect(() => {

        axios.get('http://localhost:5000/api/allproducts/')
            .then((res) => {
                let productData = res.data;
                let renderProducts = productData.map((item) => <ProductCard key={item._id} stock={item.stock} name={item.name} category={item.category} />)
                setProducts(renderProducts);
                setUpdateProducts(false);
            })
            .catch()


    }, [updateProducts]);

   

    

    return (
        <>

            <form onSubmit={addProduct} style={{ border: "2px black solid", margin: 'auto', borderRadius: '5px', width: "50%" }} className="container">
                <div className="form">
                    <h1 style={{ color: "black" }} >Products</h1>
                    <div >
                        <input
                            type="text"
                            placeholder="Product Name"
                            onChange={(e => setProductName(e.target.value))}
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            onChange={(e => setProductPrice(e.target.value))}
                        />
                        <input
                            type="number"
                            placeholder="Stock"
                            onChange={(e => setProductStock(e.target.value))}
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            onChange={(e => setProductCategory(e.target.value))}
                        />
                        <button type='submit'>Add Product</button>
                        <button >Update Product</button>
                        <button >Delete Product</button>
                    </div>
                </div>
            </form >

            {products}

            <div style={{ width: '80%', position: 'relative', margin: 'auto' }}>
                <table class="table">

                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>STOCK</th>
                    <th>CATEGORY</th>
                    <th>EDIT</th>

                    {/* {products.map(productData => {
                        return (
                            <tr>
                                <td id='name'>{productData.name}</td>
                                <td id='price'>{productData.price}</td>
                                <td id='stock'>{productData.stock}</td>
                                <td id='category'>{productData.category}</td>
                                <td><a className="btn btn-outline-light btn-lg" role="button" >Update</a>
                                    <a className="btn btn-outline-light btn-lg" role="button" >Delete</a>
                                </td>
                            </tr>
                        )
                    })} */}

                </table>
            </div>
        </>
    )

}

export default Inventory;