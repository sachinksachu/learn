import { useContext } from "react";
import FormContext from "./FormContext";

const ChildForm1 = () => {
  const { fields, handleChange, onFormSubmit } = useContext(FormContext);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type='text' name="title" id="title_id" onChange={handleChange} value={fields.title}/>
        <input type='text' name="price" id="price_id" onChange={handleChange} value={fields.price}/>
        <input type='text' name="description" id="desc_id" onChange={handleChange} value={fields.description}/>
        <input type='text' name="image" id="image_id" />
        <select id='drop-down' name='category' onChange={handleChange} value={fields.category}>
          <option value={'electronics'}>Ele</option>
          <option value={'jewelery'}>Jwel</option>
          <option value={'men\'s clothing'}>Mens</option>
          <option value={'women\'s clothing'}>Womens</option>
        </select>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default ChildForm1;