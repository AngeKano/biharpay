import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [navigate, setNavigate] = useState(false);
  const [numeroPhones, setNumeroPhones] = useState('');
  const [idUser,setIdUser]=useState(0)
  const [amount,setAmount]=useState(0)
  const [receiverNumeroPhone,setReceiverNumeroPhone]= useState('')

  return (
    <AuthContext.Provider
      value={{
        navigate,
        setNavigate,
        numeroPhones,  
        setNumeroPhones,
        idUser,
        setIdUser,
        amount,
        setAmount,
        receiverNumeroPhone,
        setReceiverNumeroPhone
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
