import React, { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return (<AuthContext.Provider value={{}}>{children}</AuthContext.Provider>);
};

export { AuthProvider };

export default AuthContext;
