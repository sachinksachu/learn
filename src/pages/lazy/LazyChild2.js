import React, { Suspense, useEffect, useState } from 'react';
import apiCall from '../../API/api';

function Child2()
{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const response = await apiCall('GET','https://fakestoreapi.com/products?limit=4')
            console.log(response);
            // setProducts((prev) => ([...prev, response]))
            setProducts(response)
        })()
    },[])

    return (
        <>
          <h3>Child 2</h3>
          {
            products.map((item, index) => (
              <div key={index}>
                <p>{item.price}</p>
              </div>
            )) // Added closing parenthesis here
          }
        </>
      )
      
}

export default Child2;