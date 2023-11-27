import React from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Tablero from "./components/Tablero";
import Activos from "./components/Activos";
import Inactivos from "./components/Inactivos";
import Revocados from "./components/Revocados";
import Nombre from "./components/Nombre";
import FechaInicial from "./components/FechaInicial";
import FechaFinal from "./components/FechaFinal";
import Editar from "./components/Editar";

function App() {
  return (
   <React.Fragment>
    <Router>
      
    <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/Gestion" element={<Dashboard />} />
        <Route path="/Tablero" element={<Tablero />} />
        <Route path="/Activos" element={<Activos />} />
        <Route path="/Inactivos" element={<Inactivos />} />
        <Route path="/Revocados" element={<Revocados />} />
        <Route path="/Nombre/:nombre" element={<Nombre />} />
        <Route path="/FechaInicial/:FechaInicial" element={<FechaInicial />} />
        <Route path="/FechaFinal/:FechaFinal" element={<FechaFinal />} />
        <Route path="/Editar" element={<Editar />} />
      </Routes>
      
    </Router>
   </React.Fragment>
  );
};

export default App;
