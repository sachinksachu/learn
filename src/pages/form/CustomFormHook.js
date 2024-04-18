import {useState} from "react";

const useCustomForm = (initalValues) =>{
    console.log("initalValues",initalValues);
    const [fields, setFields] = useState(initalValues)

    const handleFieldChange = (event) =>{

        event.preventDefault();
        
        const {name, value} = event.target;

        setFields({...fields, [name]: value})

    }

    return [fields, handleFieldChange]
}
export default useCustomForm;