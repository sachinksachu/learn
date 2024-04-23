import React from "react";
import useFormFields from "./useFormFields"; // Assuming correct path to the hook
import { nanoid } from "nanoid";


function FormDuplicate() {
  const { fields, addField, removeField, updateFieldValue, updateFieldName } = useFormFields([
    { id: nanoid(), type: "text", name: "Field 1", value: "" },
    { id: nanoid(), type: "text", name: "Field 2", value: "" },
  ]);

  return (
    <div>
      <form>
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.name}</label>
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              value={field.value || ""} // Ensure value is defined
              onChange={(e) => updateFieldValue(field.id, e.target.value)}
              onBlur={(e) => updateFieldName(field.id, e.target.value)} // Optional name update on blur
            />
            <button onClick={() => removeField(field.id)}>Remove</button>
          </div>
        ))}
      </form>
      <button onClick={() => addField()}>Add Field</button>
    </div>
  );
}
