import React, { useState } from "react";
import ChildForm1 from "./ChildForm1";
import ChildForm2 from "./ChildForm2";
import FormContext from "./FormContext";

const ParentForm = () => {

  const init = { 'title': '', 'price': 0, 'description': '', 'image': 'https://i.pravatar.cc', 'category': 'electronics', 'address': '', 'pin': 0, 'place': '', 'country': 'in' }
  const [fields, setFields] = useState(init);
  const [tab, setTab] = useState(true);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFields((prevField) => ({ ...prevField, [name]: value }))
  }

  
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("fields", fields)
  }

  const contextValue = { fields, handleChange, onFormSubmit }

  return (

    <FormContext.Provider value={contextValue}>
      <button onClick={() => setTab((prevTab) => !prevTab)}>Tab</button>
      {tab ? <ChildForm1 /> : <ChildForm2 />}
    </FormContext.Provider>
  )
}

export default ParentForm;