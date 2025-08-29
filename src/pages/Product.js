import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Product() {

    const { id } = useParams(); // get ":id"
    const productId = Number(id); // convert to number

    const [products, setProducts] = useState({
        1: "Pen",
        2: "Pencil",
        3: "Car"
    })

    if (productId === 1) {
        console.log(products[productId]);
    }
    else if (productId === 2) {
        console.log(products[productId]);
    }
    else if (productId === 3) {
        console.log(products[productId]);
    }
    else {
        console.log('invalid product');
    }

    // setProducts({ ...products, 4: "Eraser" }); // add new product

    


  return (
    <div>Product
        <p>ID: {productId}</p>
        <p>Name: {products[productId] || "Not Found"}</p>
    </div>
  )
}
