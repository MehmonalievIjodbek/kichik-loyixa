import React from 'react';
import propsProducts from "./propsProducts";

function ProductRow() {
    const product = propsProducts;
    return (

            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
    );
}

export default ProductRow;