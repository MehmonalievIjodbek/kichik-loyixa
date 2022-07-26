import React from 'react';
import products from "./propsProducts";
import ProductRow from "./productRow";

function ProductTable() {
    const rows = [];
    // products.forEach((product, index) => {
    //     rows.push(<ProductRow product={product} key={index}/>)
    // })


    console.log('products', products)
    return (

        <table>
            <thead>
            <tr>
                <th align="left">Nomi</th>
                <th align="left">Narxi</th>
            </tr>
            </thead>
            <tbody>{products.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
            ))}</tbody>

        </table>
    );
}

export default ProductTable;