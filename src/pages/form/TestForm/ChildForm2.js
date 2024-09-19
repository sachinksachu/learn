import { useContext } from "react";
import FormContext from "./FormContext";

const ChildForm2 = () => {
  const { fields, handleChange, onFormSubmit } = useContext(FormContext);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type='text' name="address" id="address_id" onChange={handleChange} value={fields.address}/>
        <input type='text' name="pin" id="pin_id" onChange={handleChange} value={fields.pin}/>
        <input type='text' name="place" id="place_id" onChange={handleChange} value={fields.place}/>

        <select id='drop-down' name='country' onChange={handleChange}>
          <option value={'in'}>IN</option>
          <option value={'us'}>US</option>
          <option value={'jp'}>JP</option>
          <option value={'cn'}>CN</option>
        </select>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default ChildForm2;