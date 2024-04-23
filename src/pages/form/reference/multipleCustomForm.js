import React, { useState } from "react";
import { nanoid } from "nanoid";

const useFormFields = (initialState = []) => {
  const [fields, setFields] = useState(initialState);

  const addField = (type = "text", name = "") => {
    const newId = nanoid();
    setFields((prevFields) => [...prevFields, { id: newId, type, name }]);
  };

  const removeField = (id) => {
    setFields((prevFields) => prevFields.filter((field) => field.id !== id));
  };

  const updateFieldValue = (id, newValue) => {
    setFields((prevFields) =>
      prevFields.map((field) => (field.id === id ? { ...field, value: newValue } : field))
    );
  };

  const updateFieldName = (id, newName) => {
    setFields((prevFields) =>
      prevFields.map((field) => (field.id === id ? { ...field, name: newName } : field))
    );
  };

  // Add more field update functions as needed...

  return { fields, addField, removeField, updateFieldValue, updateFieldName };
};

export default useFormFields;
