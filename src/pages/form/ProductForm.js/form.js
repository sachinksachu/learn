import React, { useState } from 'react';
import apiCall from '../../../API/api';

function ProductForm() {
    
    const init = {'title': '', 'price' : 0, 'description' : '', 'image' : 'https://i.pravatar.cc', 'category' : 'electronics'}
    const [field, setField] = useState(init);
    const [products, setProducts] = useState([]);

    const handleChange =(event) =>{
        event.preventDefault();
        const {name, value} = event.target;
        setField((prevField)=> ({...prevField, [name]: value}))
    }
    
    const onFormSubmit = async(event) =>{
        event.preventDefault();
        const response = await apiCall('POST','https://fakestoreapi.com/products', field)
        setProducts((prev) => ([...prev, response]))
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type='text'name="title" id="title_id" onChange={handleChange}/>
                <input type='text'name="price" id="price_id" onChange={handleChange}/>
                <input type='text'name="description" id="desc_id" onChange={handleChange}/>
                <input type='text'name="image" id="image_id"/>
                <select id='drop-down' name='category' onChange={handleChange}>
                    <option value={'electronics'}>Ele</option>
                    <option value={'jewelery'}>Jwel</option>
                    <option value={'men\'s clothing'}>Mens</option>
                    <option value={'women\'s clothing'}>Womens</option>
                </select>
                <button type="submit">Submit</button>
            </form>

            <section>
                {
                    products?.map((item, index) => (
                        <ul key={Math.random()}>
                            <li>{item.title}</li>
                            <li>{item.price}</li>
                            <li>{item.description}</li>
                            <li>{item.category}</li>
                        </ul>))
                }
            </section>
        </div>
    );
}

export default ProductForm;