// import react, { useEffect } from 'react';
// import '../App.css';
// import React, { useState } from 'react';
// import axios from 'axios'

// function Products() {

//     const [productName, setProductName] = useState();
//     const [productPrice, setProductPrice] = useState();
//     const [productStock, setProductStock] = useState();
//     const [productCategory, setProductCategory] = useState();

//     const [Products, setProducts] = useState([]);

//     const addProduct = (e) => {

//         let payload = {

//             name: productName,
//             price: productPrice,
//             stock: productStock,
//             category: productCategory

//         }

//         axios.post('http://localhost:5000/api/item', payload)
//             .then()
//             .catch()

//     }

//     useEffect(() => {

//         axios.get('http://localhost:5000/api/item/')
//             .then((res) => {
//                 setProducts(res.data)
//             })
//             .catch()

//     })

//     const handleDelete = (id) => {
//         axios.delete('http://localhost:5000/api/item/:'+id)
//     }

    

//     return (
//         <form onSubmit={addProduct} style={{ border: "2px black solid", margin: 'auto', borderRadius: '5px', width: "50%" }} className="container">
//             <div className="form">
//                 <h1 style={{ color: "black" }} >Products</h1>
//                 <div >
//                     <input 
//                         type="text"
//                         placeholder="Product Name"
//                         onChange={(e => setProductName(e.target.value))}
//                     />
//                     <input 
//                         type="number"
//                         placeholder="Price"
//                         onChange={(e => setProductPrice(e.target.value))}
//                     />
//                     <input 
//                         type="number"
//                         placeholder="Stock"
//                         onChange={(e => setProductStock(e.target.value))}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Category"
//                         onChange={(e => setProductCategory(e.target.value))}
//                     />
//                     <button type='submit'>Add Product</button>
//                     <button >Update Product</button>
//                     <button >Delete Product</button>
//                 </div>
//             </div>
//             <table>
//                 <tbody>
//                     <th>Product Name</th>
//                     <th>Price</th>
//                     <th>Stock</th>
//                     <th>Category</th>
//                     {Products.map(Product => {
//                         return (
//                             <tr>
//                                 <td id='name'>Product.name</td>
//                                 <td id='price'>Product.name</td>
//                                 <td id='stock'>Product.name</td>
//                                 <td id='category'>Product.name</td>
//                                 <td><a class="btn btn-primary" role="button" >Update</a></td>
//                                 <td><a onClick={()=>handleDelete(Product._id)} class="btn btn-danger" role="button" >Delete</a></td>
//                                 {/* <Link to={`/update/${user.id}`} className="btn btn-sm btn-success me-2">Update</Link> */}
//                             </tr>
//                         );

//                     })}

//                 </tbody>
//             </table>
//         </form >

//     );
// }

// export default Products;