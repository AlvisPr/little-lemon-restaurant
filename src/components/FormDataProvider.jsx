import React, { createContext, useState } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);
  const [tableData, setTableData] = useState(null);

  return (
    <FormDataContext.Provider value={{ formData, setFormData, tableData, setTableData }}>
      {children}
    </FormDataContext.Provider>
  );
};
