import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState([]);
  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};
