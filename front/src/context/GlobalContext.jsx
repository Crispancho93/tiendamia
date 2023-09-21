import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [loadingPage, setLoadingPage] = useState(false);
  const [orders, setOrders] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ 
        loadingPage, setLoadingPage,
        orders, setOrders 
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
