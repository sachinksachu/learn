import React, { useState } from 'react';
import { createContext } from 'react';
const init = {'title': '', 'price' : 0, 'description' : '', 'image' : 'https://i.pravatar.cc', 'category' : 'electronics','address': '', 'pin' : 0, 'place' : '', 'country' : 'in'}

const FormContextProvider = createContext(init)
export function FormContext({childern}) {
    const [form, setForm] = useState(null)

    const handleChange =(event) =>{
        event.preventDefault();
        const {name, value} = event.target;
        form((prevField)=> ({...prevField, [name]: value}))
    }

    const onFormSubmit = () =>{
        console.log("form submitted")
    }

    const contextValue = {form, handleChange, onFormSubmit}; 
    return (
        <FormContext.Provider value= {contextValue}>
            {childern}
        </FormContext.Provider>
    );
}
export default FormContextProvider;