import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Habitos from "./components/Habitos";
import Hoje from "./components/Hoje";
import Historico from "./components/Historico";
import { useState } from "react";

import { AddHabit, InfoLogin, Porcentagem, NovaRequisicao, ListaHabitos } from "./Contexts";


export default function App() {
  const [infoLogin,setInfoLogin]=useState(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')) : null);
  const [addHabit,setAddHabit]=useState(false);
  const [porcentagem,setPorcentagem]=useState(0);
  const [novaRequisicao,setNovaRequisicao]=useState(false);
  const [listaHabitos,setListaHabitos]=useState([]);

  return (
    <InfoLogin.Provider value={{infoLogin,setInfoLogin}}>
    <AddHabit.Provider value={{addHabit,setAddHabit}}>
    <Porcentagem.Provider value={{porcentagem, setPorcentagem}}>
    <NovaRequisicao.Provider value={{novaRequisicao, setNovaRequisicao}}>
    <ListaHabitos.Provider value={{listaHabitos, setListaHabitos}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </ListaHabitos.Provider>
    </NovaRequisicao.Provider>
    </Porcentagem.Provider>
    </AddHabit.Provider>
    </InfoLogin.Provider>
  );
}

