import React, { useContext, useState } from 'react';
import { FormContext } from './FormContext';
// import apiCall from '../../../API/api';

function MultipleForm1() {

    const {form, handleChange, onFormSubmit} = useContext(FormContext)

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

        </div>
    );
}

export default MultipleForm1;