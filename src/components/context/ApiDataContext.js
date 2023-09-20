import React, { createContext, useContext, useState } from 'react';

const ApiDataContext = createContext();

export function useApiData() {
  const context = useContext(ApiDataContext);
  if (!context) {
    throw new Error('useApiData must be used within an ApiDataProvider');
  }
  return context;
}

export function ApiDataProvider({ children }) {
  const [apiDataArrived, setApiDataArrived] = useState(false);

  const updateApiDataArrived = (value) => {
    setApiDataArrived(value);
  };

  return (
    <ApiDataContext.Provider value={{ apiDataArrived, updateApiDataArrived }}>
      {children}
    </ApiDataContext.Provider>
  );
}
