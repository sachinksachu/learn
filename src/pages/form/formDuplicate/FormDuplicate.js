import React, { useState } from "react";
import { nanoid } from "nanoid";

const formDomInit = { 0: { 'id': "1", 'type': "text", 'name': "", 'value': "" }, 1: { 'id': "2", 'type': "text", 'name': "", 'value': "" } }
function FormDuplicate() {
  const [fields, setFields] = useState([formDomInit])

  const addField = () => {
    const _id1 = nanoid()
    const _id2 = nanoid()

    const newFields = { ...formDomInit, 0: { ...formDomInit[0], id: _id1 }, 1: { ...formDomInit[1], id: _id2 } }
    setFields((prevFields) => [...prevFields, newFields])
  }

  const handleChange = (id, value) => {
    setFields((prevFields) => {
      const updated = prevFields.map((group) => (
        {
          ...group, 0: id === group[0].id ? { ...group[0], value: value } : group[0],
                    1: id === group[1].id ? { ...group[1], value: value } : group[1],
        }
      ))
      return updated;
    })
  }

  return (
    <div>
      <form>
        {
          fields?.map((item) => (
            <div key={item[0].id}>
              <input type={item[0].type} name={item[0].name} key={item[0].id} id={item[0].id} value={item[0].value}
                onChange={(e) => handleChange(item[0].id, e.target.value, 0)} />

              <input type={item[1].type} name={item[1].name} key={item[1].id} id={item[1].id} value={item[1].value}
                onChange={(e) => handleChange(item[1].id, e.target.value, 1)} />
            </div>
          ))
        }
      </form>
      <button onClick={() => addField()}>+</button>
    </div>
  );
}

export default FormDuplicate;
