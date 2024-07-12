import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routercom } from "./Common/Router/Routercom";
import Navbar from "./Common/Navbar/Navbar";
import CommonDashboard from "./Common/Dashboard/Dashboard";
import "./Style.css";

export default function App() {
  return (
    <div>
      {/* <BrowserRouter>
       <Routercom/>
      </BrowserRouter> */}
      <p>Haii!! This project test for pipeline in netlify server </p>
    </div>
  );
}
