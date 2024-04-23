import {useState} from "react";

const useCustomForm = (initalValues) =>{
    console.log("initalValues",initalValues);
    const [inputs, setInputs] = useState(initalValues)

    const handleFieldChange = (event) =>{

        event.preventDefault();
        
        const {name, value, id} = event.target;
        const newInput = {...inputs, [id]:{...inputs[id], [name]: value}}
        setInputs(newInput)

    }

    return [inputs, handleFieldChange]
}
export default useCustomForm;