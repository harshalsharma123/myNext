"use client";

import Loader from "@/app/components/commonComponents/Loader";
import React, { createContext, useContext, useState } from "react";

const LoaderContext = createContext(undefined);

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
      <Loader />
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  return context;
};
