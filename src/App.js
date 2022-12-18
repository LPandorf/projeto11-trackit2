import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Habitos from "./components/Habitos";
import Hoje from "./components/Hoje";
import Historico from "./components/Historico";
import { useState } from "react";

import { InfoLogin } from "./Contexts";


export default function App() {
  const [infoLogin,setInfoLogin]=useState(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')) : null);
  
  return (
    <InfoLogin.Provider value={{infoLogin,setInfoLogin}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </InfoLogin.Provider>
  );
}

