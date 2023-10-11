import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [navigate, setNavigate] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        navigate,
        setNavigate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
