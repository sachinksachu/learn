import React, { Suspense, useEffect, useState } from 'react';
import apiCall from '../../API/api';

function Child1()
{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const response = await apiCall('GET','https://fakestoreapi.com/products?limit=4')
            // setProducts((prev) => ([...prev, response]))
            setProducts(response)
        })()
    },[])

    useEffect(()=>{
        console.log("pro", products)
    },[products])

    return (
        <>
          <h3>Child 1</h3>
          {
            products.map((item, index) => (
              <ol key={index}>
                <li><p>{item.price}</p></li>
              </ol>
            )) // Added closing parenthesis here
          }
        </>
      )
      
}

export default Child1;