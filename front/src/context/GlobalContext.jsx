import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [loadingPage, setLoadingPage] = useState(false);

  return (
    <GlobalContext.Provider value={{ loadingPage, setLoadingPage }}>
      {children}
    </GlobalContext.Provider>
  );
};
