// context-- Warehouse
// provider-- delivery man
// customer-- us

/* above is the Sample Example*/
import React, { useContext, useEffect } from "react";

const API_URL =
  "https://ebay-average-selling-price.p.rapidapi.com/findCompletedItems";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const getProduct = async (url) => {
    try {
      const response = await fetch(url);
      const result = (await response).json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    getProduct(API_URL);
  },[]);

  return (
    <AppContext.Provider value={"Kamal Results"}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
