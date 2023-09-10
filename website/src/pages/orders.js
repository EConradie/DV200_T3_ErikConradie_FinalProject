import react from 'react';
import '../App.css';

function Orders() {

    return (

        <div style={{width:'80%' ,position:'relative', margin:'auto' }}>
        <table class="table">

            <th>ID</th>
            <th>REFERENCE</th>
            <th>AMOUNT</th>
            <th>DATE</th>
            <th></th>

            <tr>
                <td id='name'>Product.name</td>
                <td id='price'>Product.name</td>
                <td id='stock'>Product.name</td>
                <td id='category'>Product.name</td>
                <td><a className="btn btn-outline-light btn-lg" role="button" >Dispatch</a></td>
            </tr>

        </table>
        </div>

    )

}

export default Orders;