// KeywordContext.js
import { createContext, useContext, useState } from 'react';

const KeywordContext = createContext();

export function KeywordProvider({ children }) {
  const [keyword, setKeyword] = useState('');

  const updateKeyword = (newKeyword) => {
    setKeyword(newKeyword);
  };

  return (
    <KeywordContext.Provider value={{ keyword, updateKeyword }}>
      {children}
    </KeywordContext.Provider>
  );
}

export function useKeyword() {
  return useContext(KeywordContext);
}
