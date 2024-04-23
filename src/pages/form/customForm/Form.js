import React from "react";
import useCustomForm from "./CustomFormHook";

const initialFields = { "name" :"", "age": 0, "sex" : "M"}
function Form() {
  const [fields, setFields] = useCustomForm(initialFields)


  return (
    <div>
        <form>
            <input type="text" name="name" value={fields.name} onChange={setFields}/>
            <input type="text" name="age" value={fields.age} onChange={setFields}/>
            <input type="text" name="sex" value={fields.sex} onChange={setFields}/>
        </form>
        <h6>Name: {fields.name}, Age: {fields.age}, Sex : {fields.sex}</h6>
    </div>
  );
}

export default  Form;
