import React, { useState } from "react";
import "./App.css";
import Navbar from "./page_psrts/nav_foot/navbar";

export const CheckUser = React.createContext();

function App() {
  const [checkUser, setCheckUSer] = useState(false);

  const routes = [
    {
      id: 1,
      path: "/",
      element: "",
    },
  ];

  return (
    <>
      <CheckUser.Provider value={{checkUser,setCheckUSer}}>
        <Navbar />
      </CheckUser.Provider>
    </>
  );
}

export default App;
